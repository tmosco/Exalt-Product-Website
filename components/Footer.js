import footerStyles from "../styles/Footer.module.css";
import Link from "next/link";
import SocialFollow from "./SocialFollow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <footer className={footerStyles.footer}>
        <div>
          <ul>
            <li>
              <Link href="/">About us</Link>
            </li>
            <li>
              <Link href="/">Services</Link>
            </li>
            <li>
              <Link href="/">Potfolio</Link>
            </li>
            <li>
              <Link href="/">Contact us</Link>
            </li>
            <li>
              <Link href="/" >
                <FontAwesomeIcon
                  icon={faYoutube}
                  size="1x"
                  className={footerStyles.youtube}
                />
              </Link>
            </li>
            <li>
              <Link href="/" className="facebook">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className={footerStyles.facebook}
                />
              </Link>
            </li>
            <li>
              <Link href="/" className="twitter">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className={footerStyles.twitter}
                  
                />
              </Link>
            </li>
            <li>
              <Link href="/" className="instagram social">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className={footerStyles.instagram}
                />
              </Link>
            </li>
          </ul>
        </div>
        <div className={footerStyles.borderline}>
          <hr />
        </div>
      </footer>
    </>
  );
};

export default Footer;
