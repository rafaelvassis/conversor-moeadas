import "./Footer.css";
import mascot from "/src/assets/img/bear_transparent.png";

function Footer() {
  return (
    <div>
      <div className="credits">
        <p>
          <img src={mascot} width="50" alt="Bear Logo" />
        </p>

        <p>
          <strong>Desenvolvido por Rafael Vassis</strong>
        </p>
      </div>
    </div>
  );
}

export default Footer;