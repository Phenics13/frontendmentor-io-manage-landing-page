import "./comments.styles.scss";
import avatar1 from "../../assets/avatar-ali.png";
import avatar2 from "../../assets/avatar-anisha.png";
import avatar3 from "../../assets/avatar-richard.png";
import avatar4 from "../../assets/avatar-shanai.png";
import CommentCard from "../comment-card/comment-card.component";
import Button from "../button/button.component";
import { UIEvent, useRef, useState } from "react";

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
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (event: UIEvent<HTMLDivElement>) => {
    if (!sliderRef.current) return;
    const offset = sliderRef.current.getBoundingClientRect().x;
    const width = sliderRef.current.children[0].clientWidth;
    const activeIndex = Math.round(Math.abs(offset) / width);
    setActiveIndex(activeIndex);
  };

  return (
    <section className="comments">
      <h2 className="comments--title">What's they've said</h2>
      <div className="slider--wrapper" onScroll={handleScroll}>
        <div className="slider" ref={sliderRef}>
          {COMMENTS.map((comment, index) => (
            <CommentCard key={index} {...comment} />
          ))}
        </div>
      </div>
      <div className="slider--dots">
        {COMMENTS.map((_, index) => (
          <div
            key={index}
            className={`slider--dot ${index === activeIndex ? "--active" : ""}`}
          ></div>
        ))}
      </div>
      <Button>Get Started</Button>
    </section>
  );
};

export default Comments;
