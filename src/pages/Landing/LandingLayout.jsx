import Navbar from "./Navbar";
import HowToPlay from "./HowToPlay";
import WhoWeAre from "./WhoWeAre";
import Footer from "./Footer";
import Home from "./Home";

const LandingLayout = () => {
  return (
    <>
      <Navbar />
      <Home />
      <HowToPlay />
      {/* <WhoWeAre /> */}
      <Footer />
    </>
  );
};

export default LandingLayout;
