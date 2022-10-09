import { useState } from "react";
import Link from "next/link";

const MobileMenu = () => {
  const [toggle, setToggle] = useState(false);
  var mobileLogo = {
    color: "#1A6DD9",
    fontSize: "1.7rem",
    fontWeight: "900",
    letterSpacing: "3px",
  };
  return (
    <div className="mobile-menu">
      <div className="mobile-menu__container">
        <div className="mobile-menu__in">
          <div className="mobile-menu__logo">
            <Link href="/">
              <a style={mobileLogo}>Anki</a>
            </Link>
          </div>
          <div className="trigger" onClick={() => setToggle(!toggle)}>
            <div
              className={`hamburger hamburger--slider ${
                toggle ? "is-active" : ""
              }`}
            >
              <div className="hamburger-box">
                <div className="hamburger-inner"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dropdown" style={{ display: toggle ? "block" : "none" }}>
        <div className="dropdown_inner">
          <ul className="anchor_nav">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/test">Test</Link>
            </li>
            <li>
              <Link href="/">Course</Link>
            </li>
            <li>
              <Link href="/">Sign Up</Link>
            </li>
            <li>
              <Link href="/">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default MobileMenu;
