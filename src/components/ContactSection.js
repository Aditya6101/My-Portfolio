import "./scss/ContactSection.scss";

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
        <div className="contact-form">
          <h3>Leave Your Message Here</h3>
          <form>
            <div className="form-control">
              <label htmlFor="name">Name:</label>
              <input id="name" maxLength="20" type="text" />
            </div>
            <div className="form-control">
              <label htmlFor="email">Email:</label>
              <input id="email" type="email" />
            </div>
            <div className="form-control">
              <label htmlFor="message">Your Message:</label>
              <textarea
                name="message"
                id="message"
                cols="10"
                rows="5"
              ></textarea>
            </div>
            <button className="submit-btn" type="submit">
              Send Message <i class="fas fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
