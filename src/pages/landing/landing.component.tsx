import "./landing.styles.scss";

import Header from "../../components/header/header.component";
import Preview from "../../components/preview/preview.component";
import Benefits from "../../components/benefits/benefits.component";
import Comments from "../../components/comments/comments.component";

const Landing = () => {
  return (
    <>
      <Header />
      <Preview />
      <Benefits />
      <Comments />
    </>
  );
};

export default Landing;
