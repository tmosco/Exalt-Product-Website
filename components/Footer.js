import footerStyles from "../styles/Footer.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Logo from "./Logo";

import { MDBIcon } from "mdbreact";

const Footer = () => {
  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <footer className={footerStyles.footer}>
        <div className={footerStyles.footerInfo}>
          <div className={footerStyles.footerHeader}>
            <div className={footerStyles.logo}>
              <Logo />
            </div>
            <div className={footerStyles.navlist}>
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
                <div className={footerStyles.fontIcons}>
                  <ul>
                    <li>
                      <Link href="/">
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
              </ul>
            </div>
          </div>
          <div className={footerStyles.borderline}>
            <hr />
          </div>
          <div className={footerStyles.disclaimer}>
            <ul>
              <li>
                <Link href="/">Terms and Conditions</Link>
              </li>
              <li>
                {" "}
                <Link href="/">Privacy Policies</Link>
              </li>

              <li className={footerStyles.copyright}>
                Copyright 2020 || Exalt solution Limited
              </li>
            </ul>
          </div>
        </div>
        <div className={footerStyles.upArrow}>
          <MDBIcon
            // onClick={}
            className="upArrow"
            icon="long-arrow-alt-up"
            size="4x"
            onClick={goTop}
          />
          <h4> Top </h4>
        </div>
      </footer>
    </>
  );
};

export default Footer;
