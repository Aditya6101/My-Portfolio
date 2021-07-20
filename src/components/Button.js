import React from "react";
import PropTypes from "prop-types";

function Button({ text, fasIcon: icon }) {
  return (
    <button className="cta-btn">
      {text}
      {icon ? <i className={`fas ${icon}`}></i> : null}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  fasIcon: PropTypes.string,
};

export default Button;
