import "./scss/AboutSection.scss";
import profileImg from "../images/profile-img.svg";

const AboutSection = () => {
  return (
    <section className="about-section">
      <h3 className="section-heading">About Me</h3>
      <div className="container">
        <div className="profile-img">
          <img src={profileImg} alt="profile-img" />
        </div>
        <div className="text-content">
          <div className="wrapper">
            <h3>Who am I</h3>
            <p>
              I am Aditya Kamble, 19 years old Frontend Developer, Designer & CS
              student based in India. I love to design and develop websites.
              Coding for the last two years, with emphasis on Web Dev. Worked
              with different languages and Frameworks{" "}
            </p>
          </div>
          <div className="wrapper">
            <h3>Skills & Tools</h3>
            <div className="sub-wrapper">
              <h5>Languages & Frameworks :</h5>
              <p>
                React, Angular, Javascript, Typescript, Scss, Tailwindcss,
                Bootstrap.
              </p>
            </div>
            <div className="sub-wrapper">
              <h5>Tools :</h5>
              <p>Visual Studio Code, Figma, Git, Postman.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
