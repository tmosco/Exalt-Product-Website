import Link from 'next/link'
import navStyles from "../styles/Nav.module.css";
// import logo from'./';

const Nav = () => {
  return (
      <>
    {/* <img  src={logo} style={nbStyle.logo} alt="fireSpot"/> */}
    <nav className={navStyles.nav}>
      <ul>
        <li>
            <Link href ='/'>Home</Link>
        </li>
        <li>
            <Link href ='/'>About us</Link>
        </li>
        <li>
            <Link href ='/'>Services</Link>
        </li>
        <li>
            <Link href ='/'>Potfolio</Link>
        </li>
        <li>
            <Link href ='/'>Contact us</Link>
        </li>
        <li>
            <Link href ='/'>Blog</Link>
        </li>
      </ul>
    </nav>
    </>
  );
};

export default Nav;


