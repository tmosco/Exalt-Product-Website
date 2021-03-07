import Link from "next/link";
import Image from "next/image";
import navStyles from "../../../../styles/PostNav.module.css"
import Logo from "../../../../components/Logo"


const PostNav = () => {
  function HomeClick() {
    console.log(`This button is clicked`);
  }

  return (
    <>
    <div className={navStyles.navContainer}>

      <div className={navStyles.header}>
        <Logo onClick={HomeClick} />
      </div>
      <nav className={navStyles.nav}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
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
            <Link href="/">Blog</Link>
          </li>
        </ul>
      </nav>
    </div>
    </>
  );
};

export default PostNav;
