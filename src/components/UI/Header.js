import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__logo">
          <Link href="/">Anki</Link>
        </div>
        <div className="header__menu">
          <ul className="header__anchor-nav">
            <li>
              <Link href="/test" alt="test">
                Test
              </Link>
            </li>
            <li>
              <Link href="/" alt="courses">
                Courses
              </Link>
            </li>
          </ul>
          <ul className="header__profile-nav">
            <li>
              <Link href="/" alt="login">
                Login
              </Link>
            </li>
            <li>
              <Link href="/" alt="sign up">
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
