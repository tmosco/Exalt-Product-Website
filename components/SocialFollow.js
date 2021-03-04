import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import SocialStyles from "../styles/SocialFollow.module.css";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

const SocialFollow = () => {
  return (
    <div className ={SocialStyles.container}>
        <ul>

       
      <li>
        <Link href="/" className ={SocialStyles.youtube}>
          <FontAwesomeIcon icon={faYoutube} size="1x" />

        </Link>
      </li>
      <li>
        <Link href="/" className="facebook social">
          <FontAwesomeIcon icon={faFacebook} size="1x" />
        </Link>
      </li>
      <li>
        <Link href="/" className="twitter social">
          <FontAwesomeIcon icon={faTwitter} size="1x" />
        </Link>
      </li>
      <li>
        <Link href="/" className="instagram social">
          <FontAwesomeIcon icon={faInstagram} size="1x" />
        </Link>
      </li>
      </ul>
    </div>
  );
};

export default SocialFollow;
