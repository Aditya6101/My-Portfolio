import "./scss/Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="col">
        <h3>
          <i class="fas fa-copyright gradient-text"></i>Aditya S. Kamble 2021
        </h3>
      </div>
      <div className="col">
        <a
          href="https://github.com/Aditya6101"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-github gradient-text"></i>
        </a>
        <a
          href="https://codepen.io/Ad6101"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-codepen gradient-text"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
