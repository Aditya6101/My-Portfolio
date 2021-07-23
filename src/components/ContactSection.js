import "./scss/ContactSection.scss";
import ContactFrom from "./ContactForm";
const ContactSection = () => {
  return (
    <section className="contact-section">
      <h3 className="section-heading">Contact</h3>
      <div className="container">
        <div className="text-content">
          <div className="wrapper">
            <h3>Send an Email</h3>
            <h4>adityakamble6101@gmail.com</h4>
          </div>
          <div className="wrapper">
            <h3>DMs are always open for you</h3>
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/in/aditya-kamble/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/AdityaK6101"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/adityak6101/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <ContactFrom />
      </div>
    </section>
  );
};

export default ContactSection;
