<?php


namespace App\Traits;


use App\Entity\User;

trait AuthUser
{
    /**
     * @return |null
     */
    public function authUser(): ?User
    {
        $authUser = $this->get('security.token_storage')
            ->getToken()
            ->getUser();

        if ($authUser instanceof User)
        {
            return $authUser;
        }
        return null;
    }
}