import "./header.component.css";

import { BsCart3 } from "react-icons/bs";

import ThemeToggleButton from "../theme-toggle-button/theme.toggle.button.component";

function Header() {
  return (
    <header className="header-container">
      <h2 className="header-title">YAMADA CLUB CLOTHING</h2>

      <div className="header-menu">
        <ul className="header-items">
          <li className="header-item">Explorar</li>
          <li className="header-item">Login</li>
          <li className="header-item">Criar</li>
          <li className="header-item">
            <BsCart3 size={25} />5
          </li>
        </ul>
        <ThemeToggleButton />
      </div>
    </header>
  );
}

export default Header;
