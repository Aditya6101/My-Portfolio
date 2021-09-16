import "./scss/ContactForm.scss";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_pnt90rj",
        "my-portfolio-template",
        e.target,
        "user_y2pnmU5DCdz2ix4rLeh5J"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message Sent");
        },
        (error) => {
          console.log(error.text);
          alert("Something Went wrong. Please try again later");
        }
      );
    e.target.reset();
  };

  return (
    <div className="contact-form">
      <h3>Leave Your Message Here</h3>
      <form onSubmit={sendEmail}>
        <div className="form-control">
          <label htmlFor="name">Name:</label>
          <input id="name" maxLength="20" type="text" name="name" />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email:</label>
          <input id="email" type="email" name="email" />
        </div>
        <div className="form-control">
          <label htmlFor="message">Your Message:</label>
          <textarea id="message" cols="10" rows="5" name="message"></textarea>
        </div>
        <button className="submit-btn" type="submit">
          Send Message <i className="fas fa-paper-plane"></i>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
