import useStorage from "@/hooks/create/useStorage";
import useAuthor from "@/hooks/store/useAuthor";
import { Comment } from "@/types/schema";
import { formatDateNumeric } from "@/utils/date/formatter";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface Props {
  comments: Comment[];
}

const Comments: React.FC<Props> = ({ comments }) => {

  return (
    <div className="th-comments-wrap">
      <h2 className="blog-inner-title h3">Comentários ({comments.length})</h2>
      <ul className="comment-list">
        {comments.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </ul>
    </div>
  );
};

interface CommentItemProps {
  comment: Comment;
}

const CommentItem: React.FC<CommentItemProps> = ({ comment }) => {
  const { getUrl } = useStorage();
  const { author } = useAuthor(comment.authorId);
  const [replies, setReplies] = useState<Comment[]>([]);

  useEffect(() => {
    (async () => {
      if (!replies) return;
      const [{ data: repliesData }] = await Promise.all([
        comment.replies(),
      ]);

      setReplies(repliesData as unknown as Comment[]);
    })();
  }, [replies, comment]);

  if (!author) return null;

  return (
    <li className="th-comment-item">
      <div className="th-post-comment">
        <div className="comment-avater">
          {
            author.profilePicture && (
              <Image
                src={getUrl(author.profilePicture)}
                alt="Blog Author Image"
                width={100}
                height={100}
              />
            )
          }
        </div>
        <div className="comment-content">
          <span className="commented-on">
            <i className="fas fa-calendar-alt"></i>
            {formatDateNumeric(comment.createdAt)}
          </span>
          <h3 className="name">{comment.author?.name || "Anônimo"}</h3>
          <p className="text">{comment.content}</p>
          <div className="reply_and_edit">
            <Link href="#" className="reply-btn">
              <i className="fas fa-reply"></i>Responder
            </Link>
          </div>
        </div>
      </div>
      {replies.length > 0 && (
        <ul className="children">
          {replies.map((reply) => (
            <CommentItem key={reply.id} comment={reply} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default Comments;
