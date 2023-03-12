import "./landing.styles.scss";

import Header from "../../components/header/header.component";
import Preview from "../../components/preview/preview.component";
import Benefits from "../../components/benefits/benefits.component";
import Comments from "../../components/comments/comments.component";
import Banner from "../../components/banner/banner.component";
import Footer from "../../components/footer/footer.component";

const Landing = () => {
  return (
    <>
      <Header />
      <div style={{ width: "100%", flex: "1" }}>
        <Preview />
        <Benefits />
        <Comments />
        <Banner />
      </div>
      <Footer />
    </>
  );
};

export default Landing;
