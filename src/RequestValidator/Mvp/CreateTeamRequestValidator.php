<?php


namespace App\Request\Mvp;


use App\Entity\MvpTeam;
use App\Service\Mvp\MvpTeamService;
use App\Traits\EntityManager;
use Symfony\Component\HttpFoundation\Request;

class CreateTeamRequestValidator
{
    use EntityManager;

    public $request;

    public $mvpTeamService;

    public function __construct(Request $request)
    {
        $this->request = $request;
        $this->mvpTeamService = new MvpTeamService($this->getEntityManager());
    }

    public function errorMessages()
    {
        $messages = [];
        $request = $this->request->getContent();

        $data = json_decode($request, false);
        if (empty($data->tag))
        {
            $messages['tag'][] = 'Тег не может быть пустым!';
        }
        if (empty($data->name))
        {
            $messages['name'][] = 'Название команды не может быть пустым!';
        }
        /** @var MvpTeam $mvpTeam */
        $mvpTeam = $this->mvpTeamService->getByTag($data->tag);

        if (isset($mvpTeam))
        {
            $messages['tag'][] = 'Команда с таким тегом уже существует!';
        }
        return $messages;
    }
}