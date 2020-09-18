<?php


namespace App\Message;


class Match
{
    private $match;

    public function __construct(array $match)
    {
        $this->match = $match;
    }

    public function getMatch()
    {
        return $this->match;
    }
}