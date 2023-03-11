import "./comments.styles.scss";
import avatar1 from "../../assets/avatar-ali.png";
import avatar2 from "../../assets/avatar-anisha.png";
import avatar3 from "../../assets/avatar-richard.png";
import avatar4 from "../../assets/avatar-shanai.png";
import CommentCard from "../comment-card/comment-card.component";
import Button from "../button/button.component";

export type CommentT = {
  photoUrl: string;
  name: string;
  text: string;
};

const COMMENTS: CommentT[] = [
  {
    photoUrl: avatar1,
    name: "Ali Bravo",
    text: "We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.",
  },
  {
    photoUrl: avatar2,
    name: "Anisha Li",
    text: "Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.",
  },
  {
    photoUrl: avatar3,
    name: "Richard Watts",
    text: "Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!",
  },
  {
    photoUrl: avatar4,
    name: "Shanai Gough",
    text: "Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.",
  },
];

const Comments = () => {
  return (
    <div className="container">
      <div className="comments">
        <h2 className="comments--title">What's they've said</h2>
        <div className="comments--items">
          {COMMENTS.map((comment, index) => (
            <CommentCard key={index} {...comment} />
          ))}
        </div>
        <Button>Get Started</Button>
      </div>
    </div>
  );
};

export default Comments;
