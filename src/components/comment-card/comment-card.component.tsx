import { FC } from "react";
import { CommentT } from "../comments/comments.component";
import "./comment-card.styles.scss";

const CommentCard: FC<CommentT> = ({ photoUrl, name, text }) => {
  return (
    <div className="comment-card">
      <div className="comment-card--photo">
        <img src={photoUrl} alt={`${name}'s avatar`} />
      </div>
      <h3 className="comment-card--name">{name}</h3>
      <p className="comment-card--text">{`"${text}"`}</p>
    </div>
  );
};

export default CommentCard;
