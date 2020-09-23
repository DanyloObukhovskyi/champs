<?php
	
	namespace App\Controller;
	
	use App\Entity\Match;
	use App\Entity\News;
	use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
	use Symfony\Component\Routing\Annotation\Route;
	
	class NewsController extends AbstractController
	{
		/**
		 * @Route("/ru/news", name="news_index")
		 */
		public function index()
		{
			$entityManager = $this->getDoctrine()->getManager();
			$repository = $entityManager->getRepository(News::class);
			$items = $repository->findBy(array(),array('id'=>'DESC'),10,0);

//        $items = [
//            ['id' => 1,'logo' => 'News1.png','title' => '11 июня корпорация Sony провела презентацию их новой консоли PlayStation 5','ticket' => ''],
//            ['id' => 2,'logo' => 'News1.png','title' => 'новость 2','ticket' => ''],
//        ];
			
			return $this->render('templates/news.html.twig', ['items' => $items, 'counts' => ceil(count($items) / 5) - 1, 'router' => 'news']);
		}
		/**
		 * Matches /ru/news/*
		 *
		 * @Route("/ru/news/{id}", name="news_view_single")
		 */
		public function view($id)
		{
			$entityManager = $this->getDoctrine()->getManager();
			$newsUrl = substr(stristr($id, '-'), 1);
			/** @var News $news */
			$news = $this->getDoctrine()
				->getRepository(News::class)
				->findOneBy([
					'url' => $newsUrl
				]);
			
			if (!$news) {
				throw $this->createNotFoundException(
					'No product found for id '.$id
				);
			}
			
			$news->link = '';
			$date = $news->unix = $news->getCreatedAt()->format(("d F Y H:i"));
			str_replace("January", "Января", $date);
			str_replace("February", "Февраля", $date);
			str_replace("March", "Марта", $date);
			str_replace("April", "Апреля", $date);
			str_replace("May", "Мая", $date);
			str_replace("June", "Июня", $date);
			str_replace("Jule", "Июля", $date);
			str_replace("August", "Августа", $date);
			str_replace("September", "Сентября", $date);
			str_replace("October", "Октября", $date);
			str_replace("November", "Ноября", $date);
			str_replace("December", "Декабря", $date);
			$news->unixdate =
			$news->link_name = '';
			
			$tournaments = [];
			
			$matches = $entityManager->getRepository(Match::class)->findMatchesByDay(new \DateTime());
			
			$items    = [];
			$currDate = null;
			
			foreach ($matches as $match)
			{
				/** @var Match $match */
				
				if (!array_key_exists(date("d", $match->getStartAt()->getTimestamp()), $items))
				{
					$items[date("d", $match->getStartAt()->getTimestamp())] = [
						"date" => date("d F", $match->getStartAt()->getTimestamp()),
						"items" => [],
					];
				}
				$team1 = $match->getTeam1();
				$team2 = $match->getTeam2();
				$items[date("d", $match->getStartAt()->getTimestamp())]["items"][] =
					[
						"match_id" => $match->getId(),
						"time" => date("H:i", $match->getStartAt()->getTimestamp()),
						"title" => "",
						"startedAt" => $match->getStartAt()->getTimestamp(),
						"logo" => "",
						"teamA" => [
							"title" => $team1 ? str_replace("'", "", $team1->getName()) : '',
							"logo" => $team1 ? "/uploads/images/" . $team1->getLogo() : '',
							"score" => $match->getScore1()
						],
						"teamB" => [
							"title" => $team2 ? str_replace("'", "", $team2->getName()) : '',
							"logo" => $team2 ? "/uploads/images/" . $team2->getLogo() : '',
							"score" => $match->getScore2()
						],
						"event" => [
							"name" => $match->getEvent() === null ? null : $match->getEvent()->getName(),
							"startedAt" => $match->getEvent() === null ? null : $match->getEvent()->getStartedAt(),
							"endedAt" => $match->getEvent() === null ? null : $match->getEvent()->getEndedAt(),
							"image" => $match->getEvent() === null ? null : $match->getEvent()->getImage(),
						],
					];
			}
			$tmp_type = $news->getType();
			if(!empty($tmp_type)) {
				if($tmp_type == "3" || $tmp_type == "9"){
					
					$YT_template = '<iframe width="100%" height="500px" src="https://www.youtube.com/embed/{replace}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
					$TW_template = '<iframe src="https://player.twitch.tv/?channel={replace}&parent=champs2.pro" frameborder="0" allowfullscreen="true" scrolling="no" height="500px" width="100%"></iframe>';
					$link = $news->getText();
					preg_match("/http|s:\/\//",$link,$match_items);
					preg_match("/twitch/",$link,$is_TW);
					preg_match("/youtu/",$link,$is_YT);
					if(strlen($link) == 11 && count($match_items) == 0) {
						$YT_template = str_replace("{replace}", $link, $YT_template);
						$news->setText($YT_template);
					}
					if(count($is_TW) > 0) {
						$link = str_replace("https://www.twitch.tv/", "", $link);
						$link = str_replace("http://www.twitch.tv/", "", $link);
						$link = str_replace("https://twitch.tv/", "", $link);
						$link = str_replace("http://twitch.tv/", "", $link);
						$link = str_replace("https://player.twitch.tv/?channel=", "", $link);
						$link = str_replace("http://player.twitch.tv/?channel=", "", $link);
						$TW_template = str_replace("{replace}", $link, $TW_template);
						$news->setText($TW_template);
					}
					if(count($is_YT) > 0) {
						$link = str_replace("https://youtu.be/", "", $link);
						$link = str_replace("http://youtu.be/", "", $link);
						$link = str_replace("https://www.youtube.com/watch?v=", "", $link);
						$link = str_replace("http://www.youtube.com/watch?v=", "", $link);
						$YT_template = str_replace("{replace}", $link, $YT_template);
						$news->setText($YT_template);
					}
				}
			}
			
			return $this->render('templates/news.view.html.twig', [
				'item' => $news,
				'date' => $date,
				'tournaments' => $tournaments,
				'router' => 'news',
				'matches' => $items
			]);
		}
		
		/**
		 * Lessons /ru/news/*
		 *
		 * @Route("/ru/last/news", name="last_news_info")
		 */
		public function getLastNews()
		{
			$entityManager = $this->getDoctrine()->getManager();
			$repository = $entityManager->getRepository(News::class);
			$items = $repository->findBy(array(),array('id'=>'DESC'),10,0);
			
			return $this->json($items);
		}
		
		/**
		 * Lessons /ru/news/*
		 *
		 * @Route("/ru/news/search/{form}", name="search_news_info")
		 */
		public function getSearchedNews($form)
		{
			$form = json_decode($form);
			$type = $form->type;
			$dateFrom = new \DateTime($form->datefrom);
			$dateTo = new \DateTime($form->dateto);
			$search = $form->search;

//        return $this->json($form);
			$items = $this->getDoctrine()
				->getRepository(News::class)
				->findBySearchForm($type, $dateFrom, $dateTo, $search);
			
			return $this->json($items);
		}
	}