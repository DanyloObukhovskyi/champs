<?php

namespace App\Controller;

use App\Traits\Mail;
use Symfony\Component\Mime\Email;
use App\Entity\Event;
use App\Entity\Match;
use App\Entity\News;
use App\Entity\Person;
use App\Entity\RatingPerson;
use App\Entity\RatingTeam;
use App\Entity\Result;
use App\Service\Event\EventService;
use App\Service\MatchService;
use App\Service\RatingPersonService;
use App\Service\RatingTeamService;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class MainController extends DefController
{
    use Mail;

    /**
     * @Route("/ru/", name="main")
     */
    public function login(AuthenticationUtils $authenticationUtils): Response
    {
        // get the login error if there is one
        $authenticationUtils->getLastAuthenticationError();
        // last username entered by the user
        $authenticationUtils->getLastUsername();

        $entityManager = $this->getDoctrine()->getManager();
        $matchService = new MatchService($entityManager);
        $eventService = new EventService($entityManager);
        $ratingPlayersService = new RatingPersonService($entityManager);
        $ratingCommandService = new RatingTeamService($entityManager);

        $matches = $entityManager->getRepository(Match::class)->findMatchesByDate(new \DateTime());
        $matchesItems = $matchService->matchesDecorator($matches);

        $events = $entityManager->getRepository(Event::class)->getCurrentEvents();
        $eventItems = $eventService->eventsDecorator($events);

        $results =  $entityManager->getRepository(Result::class)->getCurrent();
        $matchResults = [];

        // RATING PLAYERS
        $ratingPlayers = $entityManager->getRepository(RatingPerson::class)->getRatingPersons();
        $ratingPlayers = $ratingPlayersService->retingPlayersDecorator($ratingPlayers);

        // RATING COMMANDS
        $ratingCommands = $entityManager->getRepository(RatingTeam::class)->getRatingTeams();
        $ratingCommands = $ratingCommandService->retingTeamsDecorator($ratingCommands);

        // BEST PLAYER WEEK
        /** @var Person $playerWeek */
        $playerWeek = $entityManager->getRepository(Person::class)->getWeekPlayer();

        $currDate = null;
        foreach ($results as $result)
        {
            $match = $result->getMatch();

            $key = date("d", $match->getStartAt()->getTimestamp());
            /** @var Match $match */

            if (!array_key_exists($key, $matchResults))
            {
                $matchResults[$key] = [
                    "date" => date("d F", $match->getStartAt()->getTimestamp()),
                    "items" => [],
                ];
            }
            $matchResults[$key]["items"][] = $matchService->matchDecorator($match);
        }

        $repository = $entityManager->getRepository(News::class);
        $news = $repository->findBy([],['date'=>'DESC'],6,0);
	
	    $livesItems = [
		    [
			    'id' => 1,
			    'video_id' => "Nz3_Vg5GBio",
			    'video_type' => 0,
			    'logo' => "",
			    'title' => "ТОП 5 мобильных игр | Champs | Hino",
		    ],
		    [
			    'id' => 2,
			    'video_id' => "1NnA3hbwqRY",
			    'video_type' => 0,
			    'logo' => "",
			    'title' => "ММОшим / Champs / ModirDred",
		    ],
		    [
			    'id' => 3,
			    'video_id' => "Lmz9itL7sqs",
			    'video_type' => 0,
			    'logo' => "",
			    'title' => "Новости недели / Hino x ModirDred / Champs",
		    ],
		    [
			    'id' => 4,
			    'video_id' => "cwd6zSjKEW4",
			    'video_type' => 0,
			    'logo' => "",
			    'title' => "Cyberpunk 2077 | Однопользовательские | Champs | MontemDred"
		    ],
	    ];
        
	    /*
	    * stream - news type - 8
	    * video - news type - 3
	    */
	    $VideoData = $repository->findBy(['type'=>array(8, 3)],['date'=>'DESC'],4,0); //8 - stream; 3 - video
	    $VideoItems = $this->prepare_video($VideoData);
	    if(count($VideoItems) < 4) {
		    $ij =  4 - (4 - count($VideoItems));
		    for($ij; $ij < 4; $ij++) {
			    $VideoItems[$ij] = $livesItems[$ij];
		    }
	    }
	
	    $last_stream = $repository->findBy(['type'=>array(8)],['date'=>'DESC'],1,0); //8 - stream; 3 - video
	    if(!empty($last_stream)) {
		    $last_stream_result = $this->prepare_video($last_stream);
		    $last_stream_result = $last_stream_result[0];
	    } else {
		    $last_stream_result = array();
	    }
	
	
	    return $this->render('templates/home.html.twig', [
            'events' => $eventItems,
            'router' => 'home',
            'matches' => $matchesItems,
            'results' => $matchResults,
		    'last_stream' =>$last_stream_result,
//            'videoNews' => $livesItems,
	        'videoNews' => $VideoItems,
            'ratingPlayers' => $ratingPlayers,
            'ratingCommands' => $ratingCommands,
            'playerWeek' => $playerWeek,
            'news' => $news
            ]);
    }
	
	public function prepare_video($data=array()) {
		$VideoItems = array();
		if(!empty($data)) {
			foreach ($data as $v_key => &$v_value) {
				$tmp = array();
				$tmp['id'] = $v_value->getId();
				
				$link = $v_value->getText();
				preg_match("/http|s:\/\//",$link,$match_items);
				preg_match("/twitch/",$link,$is_TW);
				preg_match("/youtu/",$link,$is_YT);
				if(strlen($link) == 11 && count($match_items) == 0) {
					$tmp['video_type'] = 0; //YouTube video
					$tmp['video_id'] = $link;
				}
				if(count($is_TW) > 0) {
					$tmp['video_type'] = 1; //Twich video
					$link = str_replace("https://www.twitch.tv/", "", $link);
					$link = str_replace("http://www.twitch.tv/", "", $link);
					$link = str_replace("https://twitch.tv/", "", $link);
					$link = str_replace("http://twitch.tv/", "", $link);
					$link = str_replace("https://player.twitch.tv/?channel=", "", $link);
					$link = str_replace("http://player.twitch.tv/?channel=", "", $link);
					$tmp['video_id'] = $link;
				}
				if(count($is_YT) > 0) {
					$tmp['video_type'] = 0; //YouTube video
					$link = str_replace("https://youtu.be/", "", $link);
					$link = str_replace("http://youtu.be/", "", $link);
					$link = str_replace("https://www.youtube.com/watch?v=", "", $link);
					$link = str_replace("http://www.youtube.com/watch?v=", "", $link);
					
					$tmp['video_id'] = $link;
				}
				$tmp['logo'] = $v_value->getLogo();
				$tmp['title'] = $v_value->getTitle();
				$VideoItems[$v_key] = $tmp;
			}
		}
		return $VideoItems;
	}
	
    /**
     * @Route("/ru/404", name="notFound")
     */
    public function notFound()
    {
        return $this->render('templates/404.html.twig', ['router' => '404']);
    }

    /**
     * @Route("/ru/setcookies", name="main_setcookies")
     */
    public function setcookies()
    {
        setcookie("cookie_agree", 'true');
        return $this->json(array('status' => true));
    }

    /**
     * @Route("/ru/map", name="map_index")
     */
    public function index()
    {
        return $this->render('templates/map.html.twig', [
            'router' => 'map',
            'styles' => [
                'cabinet/cabinet.css',
                'map.css'
            ]
        ]);
    }

    /**
     * @Route("/ru/service_agreement", name="service_agreement_index")
     */
    public function service_agreement()
    {
        return $this->render('templates/service.agreement.html.twig', [
            'router' => 'map',
            'styles' => [
                'politica.css',
            ]
        ]);
    }

}
