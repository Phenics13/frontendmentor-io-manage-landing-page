import Button, { BUTTON_TYPES } from "../button/button.component";
import "./banner.styles.scss";

const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <div className="banner--content">
          <h1 className="banner--title">Simplify how your team works today.</h1>
          <Button buttonType={BUTTON_TYPES.SECONDARY}>Get Started</Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
