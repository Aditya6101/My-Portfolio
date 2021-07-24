import PropTypes from "prop-types";
import "./scss/Button.scss";
function Button({ text, icon, href, target, rel }) {
  return (
    <a
      className="cta-btn"
      href={href}
      target={target ? target : null}
      rel={rel ? rel : null}
    >
      {text}
      {icon ? <i className={icon}></i> : null}
    </a>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

export default Button;
