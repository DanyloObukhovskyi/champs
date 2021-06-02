<?php


namespace App\Service\Match;


use App\Entity\Match;
use App\Entity\MatchComment;
use App\Entity\User;
use App\Repository\MatchCommentRepository;
use App\Service\EntityService;
use App\Service\News\NewsService;
use App\Traits\CommentRecursiveDecorator;
use Doctrine\ORM\EntityManagerInterface;

class MatchCommentService extends EntityService
{
    use CommentRecursiveDecorator;

    protected $entity = MatchComment::class;

    /**
     * @var MatchCommentRepository
     */
    protected $repository;

    /**
     * @var MatchCommentLikeService
     */
    protected $matchCommentLikeService;


    protected $commentService;

    public function __construct(EntityManagerInterface $entityManager)
    {
        parent::__construct($entityManager);

        $this->matchCommentLikeService = new MatchCommentLikeService($entityManager);
    }

    /**
     * @param User $user
     * @param Match $match
     * @param MatchComment|null $parentComment
     * @param $comment
     * @return mixed
     */
    public function create(User $user, Match $match, ?MatchComment $parentComment, $comment)
    {
        /** @var MatchComment $newsComment */
        $matchComment = new $this->entity;
        $matchComment->setMatch($match);
        $matchComment->setUser($user);
        $matchComment->setParent($parentComment);
        $matchComment->setComment($comment);

        return $this->save($matchComment);
    }

    /**
     * @return MatchCommentRepository
     */
    public function getRepository(): MatchCommentRepository
    {
        return $this->repository;
    }

    public function decorator(MatchComment $comment, $user = null)
    {
        $userLike = null;
        if (isset($user)) {
            $userLike = $this->matchCommentLikeService
                ->getRepository()
                ->findOneBy([
                    'comment' => $comment,
                    'user' => $user
                ]);

            if (isset($userLike)) {
                $userLike = $this->matchCommentLikeService->decorator($userLike);
            }
        }
        return [
            'id' => $comment->getId(),
            'matchId' => $comment->getMatch()->getId(),
            'user' => [
                'nickname' => $comment->getUser()->getNickname(),
                'surname' => $comment->getUser()->getFamily(),
                'name' => $comment->getUser()->getName(),
                'photo' => $comment->getUser()->getPhoto(),
            ],
            'comment' => $comment->getComment(),
            'createdAt' => NewsService::replaceMonth($comment->getCreatedAt()->format('d F H:i')),
            'timestamp' => $comment->getCreatedAt()->getTimestamp(),
            'likesCount' => $this->matchCommentLikeService->getLikesCount($comment),
            'userLike' => $userLike
        ];
    }
}