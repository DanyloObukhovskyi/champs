<?php

namespace App\Entity;

use App\Repository\SettingRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=SettingRepository::class)
 */
class Setting
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string")
     */
    private $key;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $value;

    /**
     * @ORM\Column(type="string")
     */
    private $title;

    /**
     * @return int|null
     */
    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @return mixed
     */
    public function getKey()
    {
        return $this->key;
    }

    /**
     * @param mixed $key
     */
    public function setKey($key): void
    {
        $this->key = $key;
    }

    /**
     * @return mixed
     */
    public function getValue()
    {
        return $this->value;
    }

    /**
     * @param mixed $value
     */
    public function setValue($value): void
    {
        $this->value = $value;
    }

    public function getVideoId()
    {
        $explodeString = explode('/', $this->value);

        return end($explodeString);
    }

    /**
     * @return mixed
     */
    public function getTitle()
    {
        return $this->title;
    }

    /**
     * @param mixed $title
     */
    public function setTitle($title): void
    {
        $this->title = $title;
    }

    public function getVideoType()
    {
        $link = $this->value;
        preg_match("/http|s:\/\//", $link, $match_items);
        preg_match("/twitch/", $link, $is_TW);
        preg_match("/youtu/", $link, $is_YT);
        if (strlen($link) == 11 && count($match_items) == 0) {
            $tmp['video_type'] = 0; //YouTube video
            $tmp['video_id'] = $link;
        }
        if (count($is_TW) > 0) {
            $tmp['video_type'] = 1; //Twich video
            $link = str_replace("https://www.twitch.tv/", "", $link);
            $link = str_replace("http://www.twitch.tv/", "", $link);
            $link = str_replace("https://twitch.tv/", "", $link);
            $link = str_replace("http://twitch.tv/", "", $link);
            $link = str_replace("https://player.twitch.tv/?channel=", "", $link);
            $link = str_replace("http://player.twitch.tv/?channel=", "", $link);
            $tmp['video_id'] = $link;
        }
        if (count($is_YT) > 0) {
            $tmp['video_type'] = 0; //YouTube video
            $link = str_replace("https://youtu.be/", "", $link);
            $link = str_replace("http://youtu.be/", "", $link);
            $link = str_replace("https://www.youtube.com/watch?v=", "", $link);
            $link = str_replace("http://www.youtube.com/watch?v=", "", $link);

            $tmp['video_id'] = $link;
        }

        return $tmp;
    }
}
