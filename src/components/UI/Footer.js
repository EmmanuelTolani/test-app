import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <ul className="footer__links">
          <li className="footer__link">
            <Link href="#">About</Link>
          </li>
          <li className="footer__link">
            <Link href="#">Privacy</Link>
          </li>
          <li className="footer__link">
            <Link href="#">Terms</Link>
          </li>
          <li className="footer__link">
            <Link href="#">Contact</Link>
          </li>
          <li className="footer__link">
            <Link href="#">Careers</Link>
          </li>
          <li className="footer__link">
            <Link href="#">Challenges</Link>
          </li>
        </ul>
        <div className="footer__info">
          <div className="footer__socials">
            <Link href="#" alt="facebook">
              <i className="fa-brands fa-facebook"></i>
            </Link>
            <Link href="#" alt="linkedin">
              <i className="fa-brands fa-linkedin"></i>
            </Link>
            <Link href="#" alt="twitter">
              <i className="fa-brands fa-square-twitter"></i>
            </Link>
          </div>
          <span className="footer__copyright">&copy; 2022 Anki</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
