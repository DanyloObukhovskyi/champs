<?php


namespace App\Service;


use App\Entity\ConfirmCode;
use App\Repository\ConfirmCodeRepository;

/**
 * Class ConfirmCodeService
 * @package App\Service
 */
class ConfirmCodeService extends EntityService
{
    protected $entity = ConfirmCode::class;

    /**
     * @var ConfirmCodeRepository
     */
    protected $repository;

    /**
     * @param string $email
     * @return mixed
     * @throws \Exception
     */
    public function create(string $email)
    {
        /** @var ConfirmCode $code */
        $code = new $this->entity;
        $code->setEmail($email);
        $code->generateCode();

        return $this->save($code);
    }

    /**
     * @return ConfirmCodeRepository
     */
    public function getRepository(): ConfirmCodeRepository
    {
        return $this->repository;
    }

    public function getCode(string $email)
    {
        return $this->repository->getLastCodeByMail($email);
    }
}