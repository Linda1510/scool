import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">Logo</div>
      <nav className="header__nav">
        <NavLink className={`header__nav__link`} to={"/"}>
          HI
        </NavLink>
      </nav>
    </header>
  );
};
export default Header;
