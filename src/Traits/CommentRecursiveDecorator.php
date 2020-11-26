<?php


namespace App\Traits;

trait CommentRecursiveDecorator
{
    public function recurciveComments($comments, $count = null, $user = null)
    {
        if ($count === null){
            $count = $_ENV['MAX_COMMENTS_ANSWERS'];
        }
        $commentsSlice = [];

        foreach ($comments as $comment){
            $decorateComment = $this->decorator($comment, $user);

            if ($count > 0){
                $decorateComment['children'] = $this->recurciveComments(
                    $comment->getChildren(),
                    $count - 1,
                    $user
                );
            }
            $commentsSlice[] = $decorateComment;
        }
        return $commentsSlice;
    }
}