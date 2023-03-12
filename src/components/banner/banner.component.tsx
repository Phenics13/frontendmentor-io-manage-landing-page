import Button, { BUTTON_TYPES } from "../button/button.component";
import "./banner.styles.scss";

const Banner = () => {
  return (
    <section className="banner">
      <div className="container">
        <div className="banner--content">
          <h2 className="banner--title">Simplify how your team works today.</h2>
          <Button buttonType={BUTTON_TYPES.SECONDARY}>Get Started</Button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
