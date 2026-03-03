import "./Footer.scss";
import kasaLogo from "../../assets/KASA-Logo-122-White.svg";

function Footer() {
  return (
    <div className="footer">
      <img src={kasaLogo} className="footer__logo" />
      <div className="footer__content">
        <p>©2020 Kasa. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
