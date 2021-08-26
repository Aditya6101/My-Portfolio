import "./scss/ContactForm.scss";

const ContactForm = () => {
  return (
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
          <textarea name="message" id="message" cols="10" rows="5"></textarea>
        </div>
        <button className="submit-btn" type="submit">
          Send Message <i className="fas fa-paper-plane"></i>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
