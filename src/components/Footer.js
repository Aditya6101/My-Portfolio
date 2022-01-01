import './scss/Footer.scss';

const Footer = () => {
  return (
    <footer>
      <div className="col">
        <h3>
          <i className="fas fa-copyright gradient-text"></i>Aditya S. Kamble
          2022
        </h3>
      </div>
      <div className="col">
        <a
          href="https://github.com/Aditya6101"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github gradient-text"></i>
        </a>
        <a
          href="https://codepen.io/Ad6101"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-codepen gradient-text"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
