<?php

namespace App\Entity;

use App\Repository\BlogTypesRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=BlogTypesRepository::class)
 */
class BlogTypes
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $title;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $image;

    /**
     * @ORM\OneToMany(targetEntity=Blogs::class, mappedBy="type_id")
     */
    private $blogs;

    /**
     * @ORM\OneToMany(targetEntity=BlogTypeAttr::class, mappedBy="blog_type_id")
     */
    private $blogTypeAttr;

    public function __construct()
    {
        $this->blogs = new ArrayCollection();
        $this->blogTypeAttr = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getImage(): ?string
    {
        return $this->image;
    }

    public function setImage(string $image): self
    {
        $this->image = $image;

        return $this;
    }

    /**
     * @return Collection|Blogs[]
     */
    public function getBlogs(): Collection
    {
        return $this->blogs;
    }

    public function addBlog(Blogs $blog): self
    {
        if (!$this->blogs->contains($blog)) {
            $this->blogs[] = $blog;
            $blog->setTypeId($this);
        }

        return $this;
    }

    public function removeBlog(Blogs $blog): self
    {
        if ($this->blogs->removeElement($blog)) {
            // set the owning side to null (unless already changed)
            if ($blog->getTypeId() === $this) {
                $blog->setTypeId(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|BlogTypeAttr[]
     */
    public function getBlogTypeAttr(): Collection
    {
        return $this->blogTypeAttr;
    }

    public function addBlogTypeAttr(BlogTypeAttr $blogTypeAttr): self
    {
        if (!$this->blogTypeAttr->contains($blogTypeAttr)) {
            $this->blogTypeAttr[] = $blogTypeAttr;
            $blogTypeAttr->setBlogTypeId($this);
        }

        return $this;
    }

    public function removeBlogTypeAttr(BlogTypeAttr $blogTypeAttr): self
    {
        if ($this->blogTypeAttr->removeElement($blogTypeAttr)) {
            // set the owning side to null (unless already changed)
            if ($blogTypeAttr->getBlogTypeId() === $this) {
                $blogTypeAttr->setBlogTypeId(null);
            }
        }

        return $this;
    }
}
