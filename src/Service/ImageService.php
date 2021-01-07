<?php


namespace App\Service;


class ImageService
{
    protected $image;

    public const PATH = '/uploads/images/';

    public const DEFAULT = '/images/noLogo.png';

    public const DEFAULT_PERSON = '/images/blankplayer.svg';

    /**
     * @param $image
     * @param bool $withPath
     * @return string
     */
    public function setImage($image, $withPath = false)
    {
        $this->image = $image;
        if (!$withPath and !empty($image)) {
            $this->image = self::PATH . $this->image;
        }
        return $this->image;
    }

    /**
     * @return bool
     */
    public function isExist(): bool
    {
        return file_exists(__DIR__ . '/../../public' . $this->image);
    }

    /**
     * @return string
     */
    public function getImagePath(): string
    {
        if (empty($this->image) or !$this->isExist()) {
            return self::DEFAULT;
        }
        return $this->image;
    }

    /**
     * @return mixed
     */
    public function getImageHeaderEvent()
    {
        return $this->image;
    }
}