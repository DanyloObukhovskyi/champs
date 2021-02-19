<?php


namespace App\Service\Seo;


use App\Entity\SeoPages;
use App\Repository\SeoPagesRepository;
use App\Service\EntityService;

class SeoService extends EntityService
{
    protected $entity = SeoPages::class;

    /**
     * @var SeoPagesRepository
     */
    protected $repository;

    public function getSeo($name)
    {
        $seo = [
          'title' => 'Champs.pro',
          'keywords' => 'League of Legends, СS:GO, Dota, Игровые матчи, Игровые новости, События, Рейтинг команд, Рейтинг игроков, Игрок недели, Результаты матчей, Турниры',
          'description' =>  'Тренеры по League of Legends, СS:GO, Dota, матчи, игровые новости, события и мероприятия в игровой индустрии',
          'heading' => '',
          'heading_type' => 1,
          'meta' => [],
        ];
        $page = $this->repository->findOneBy([
                'name' => $name
            ]);
        if(!empty($page)){
            if(!empty($page->getTitle())){
                $seo['title'] = $page->getTitle();
            }
            if(!empty($page->getKeywords())){
                $seo['keywords'] = $page->getKeywords();
            }
            if(!empty($page->getDescription())){
                $seo['description'] = $page->getDescription();
            }
            if(!empty($page->getHeadingType())){
                 $seo['heading_type'] = $page->getHeadingType();
            }
            if(!empty($page->getHeading())){
                $seo['heading'] = $page->getHeading();
            }
            if(!empty($page->getMeta())){
                foreach($page->getMeta() as $meta){
                    if(!empty($meta->getMetaTag()) && !empty($meta->getValue())){
                        $seo['meta'][] = [
                            'name' => $meta->getMetaTag(),
                            'value' => $meta->getValue()
                            ];
                    }
                }
            }
        }

        return $seo;
    }

}