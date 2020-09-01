<?php


namespace App\Service;


class ImageService
{
    protected $image;

    public const PATH = '/uploads/images/';

    public const DEFAULT = '/images/noLogo.png';

    public function setImage($image, $withPath = false)
    {
        $this->image = $image;
        if (!$withPath and !empty($image)){
            $this->image = self::PATH.$this->image;
        }
        return $this->image;
    }

    public function isExist(): bool
    {
        return file_exists(__DIR__.'/../../public'.$this->image);
    }

    public function getImagePath(): string
    {
        if(empty($this->image) or !$this->isExist()){
            return self::DEFAULT;
        }
        return $this->image;
    }
}