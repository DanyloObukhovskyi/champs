<?php

namespace App\Rss;
/**
 * Class RssTape
 */
class RssTape extends \DOMDocument
{
    const LANGUAGE_RU = 'ru-ru';

    private $channel;
    private $atomLink;

    public function __construct()
    {
        $version = '1.0';
        $encoding = 'utf-8';
        parent::__construct($version, $encoding);

        // Add Content-Type, for xml document.
        $this->formatOutput = true;

        $rssNode = $this->appendChild(
            $this->createElement('rss')
        );

        $rssNode->setAttribute('version', '2.0');
        $rssNode->setAttribute('xmlns:atom', 'http://www.w3.org/2005/Atom');

        $channel = $rssNode->appendChild(
            $this->createElement('channel')
        );

        $atomLink = $this->createElement('atom:link');
        $atomLink->setAttribute('rel', 'self');
        $atomLink->setAttribute('type', 'application/rss+xml');

        $channel->appendChild($atomLink);

        $this->channel = $channel;
        $this->atomLink = $atomLink;
    }

    private function setValue($parentNode, $name, $value)
    {
        if (is_array($value)) {
            $node = $parentNode->appendChild($this->createElement($name));
            foreach ($value as $itemIndex => $item) {
                $this->setValue($node, $itemIndex, $item);
            }
        } else {
            $parentNode->appendChild($this->createElement($name, htmlspecialchars($value)));
            $parentNode->setAttribute('turbo', 'true');
        }
    }

    public function setTitle($value)
    {
        $name = 'title';
        $this->setValue($this->channel, $name, $value);
        return $this;
    }

    public function setLink($value)
    {
        $name = 'link';
        $this->setValue($this->channel, $name, $value);
        $this->atomLink->setAttribute('href', $value . 'rss.xml');
        return $this;
    }

    public function setDescription($value)
    {
        $name = 'description';
        $this->setValue($this->channel, $name, $value);
        return $this;
    }

    public function setLanguage($value)
    {
        $name = 'language';
        $this->setValue($this->channel, $name, $value);
        return $this;
    }

    public function setImage(array $arr)
    {
        $name = 'image';
        $this->setValue($this->channel, $name, $arr);
        return $this;
    }

    public function setLastBuildDate($value)
    {
        $name = 'lastBuildDate';
        $value = gmdate('D, d M Y H:i:s', strtotime($value)). ' GMT';
        $this->setValue($this->channel, $name, $value);
        return $this;
    }

    public function addItem(array $arr)
    {
        $name = 'item';
        $node = $this->setValue($this->channel, $name, $arr);
        return $this;
    }

    public function output()
    {
        return str_replace('&nbsp;', ' ', $this->saveXML());
    }
}