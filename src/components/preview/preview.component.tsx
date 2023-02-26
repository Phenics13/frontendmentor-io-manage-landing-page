import "./preview.styles.scss";
import previewIllustration from "../../assets/illustration-intro.svg";
import bgPattern from "../../assets/bg-tablet-pattern.svg";
import Button from "../button/button.component";

const Preview = () => {
  return (
    <div className="preview container">
      <img src={bgPattern} className="preview--bg" alt="background image" />
      <img
        src={previewIllustration}
        className="preview--image"
        alt="preview illustration"
      />
      <h1 className="preview--title">
        Bring everyone together to build better products.
      </h1>
      <p className="preview--text">
        Manage makes it simple for software teams to plan day-to-day tasks while
        keeping the larger team goals in view.
      </p>
      <Button>Get Started</Button>
    </div>
  );
};

export default Preview;
