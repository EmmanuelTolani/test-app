import React, {useState, useLayoutEffect} from "react";
import Link from "next/link";


const Header = ({ sticky }) => {
   const[scrolled, setScrolled] = useState(false)
    useLayoutEffect(()=>{
      const handleScroll = e =>{
        setScrolled(window.scrollY > 50)
      }
      window.addEventListener("scroll", handleScroll)
  
      return () =>{
        window.removeEventListener("scroll", handleScroll)
      }
     }, [])

   
  return (
    <div className={sticky && scrolled ? "header sticky" : "header"}>
      <div className="container">
        <div className="header__logo">
          <Link href="/">Anki</Link>
        </div>
        <div className="header__menu">
          <ul className="header__anchor-nav">
          <li>
              <Link href="/" alt="Home">
                Home
              </Link>
            </li>
            <li>
              <Link href="/" alt="about">
                About
              </Link>
            </li>
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
