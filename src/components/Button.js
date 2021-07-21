import PropTypes from "prop-types";
import "./scss/Button.scss";
function Button({ text, icon, href, target }) {
  return (
    <button className="cta-btn">
      <a href={href} target={target}>
        {text}
        {icon ? <i className={icon}></i> : null}
      </a>
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

export default Button;
