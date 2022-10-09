import { useState } from "react";

const MobileMenu = () => {
  const [toggle, setToggle] = useState(false);
  var mobileLogo = {
    color: "#1A6DD9",
    fontSize: "1.7rem",
    fontWeight: "900",
    letterSpacing: "3px"
  }
  return (
    <div className="mobile-menu">
			<div className="mobile-menu__container">
				<div className="mobile-menu__in">
					<div className="mobile-menu__logo">
						<a href="/" style={mobileLogo}>
							Anki
						</a>
					</div>
					<div className="trigger" onClick={() => setToggle(!toggle)}>
						<div
							className={`hamburger hamburger--slider ${
								toggle ? 'is-active' : ''
							}`}
						>
							<div className="hamburger-box">
								<div className="hamburger-inner"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="dropdown" style={{ display: toggle ? 'block' : 'none' }}>
				<div className="dropdown_inner">
					<ul className="anchor_nav">
						<li>
							<a href="/">Home</a>
						</li>
						<li>
							<a href="/test">Test</a>
						</li>
						<li>
							<a href="/">Course</a>
						</li>
						<li>
							<a href="/">Sign Up</a>
						</li>
						<li>
							<a href="/">Login</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
  );
};
export default MobileMenu;