import HeroImg from "../images/hero.svg";
import "./scss/IntroSection.scss";
import Button from "../components/Button";

const IntroSection = () => {
  return (
    <section className="intro-section">
      <div className="intro-img">
        <img src={HeroImg} alt="intro-img" />
      </div>
      <div className="intro-text">
        <h1>
          Hey, I'm <span className="gradient-text">Aditya</span>
        </h1>
        <h3>Developer & Designer</h3>
        <p>Stay tuned to know about me.</p>
        <Button text="See My Work" href="#project-section" />
      </div>
    </section>
  );
};

export default IntroSection;
