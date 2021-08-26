import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroImg from "../images/hero.svg";
import "./scss/IntroSection.scss";
import Button from "./Button";

const IntroSection = () => {
  gsap.registerPlugin(ScrollTrigger);
  const headerTitleRef = useRef(null);
  const headerSubtitleRef = useRef(null);
  const headerLeagelRef = useRef(null);

  useEffect(() => {
    gsap.from(headerTitleRef.current, {
      translateX: "-100%",
      duration: 1,
      ease: "SlowMO",
    });
    gsap.from(headerSubtitleRef.current, {
      translateX: "-150%",
      duration: 1,
      ease: "SlowMO",
    });
    gsap.from(headerLeagelRef.current, {
      translateX: "-200%",
      duration: 1,
      ease: "SlowMO",
    });
  }, []);

  return (
    <section className="intro-section">
      <div className="intro-img">
        <img src={HeroImg} alt="intro-img" />
      </div>
      <div className="intro-text">
        <h1 ref={headerTitleRef}>
          Hey, I'm <span className="gradient-text">Aditya</span>
        </h1>
        <h3 ref={headerSubtitleRef}>Developer & Designer</h3>
        <p ref={headerLeagelRef}>Stay tuned to know about me.</p>
        <Button
          text="See My Work"
          href="#project-section"
          target="_self"
          rel="noopener noreferrer"
        />
      </div>
    </section>
  );
};

export default IntroSection;
