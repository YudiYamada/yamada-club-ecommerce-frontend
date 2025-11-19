import "./header.component.css";

import { BsCart3 } from "react-icons/bs";

function Header() {
  return (
    <header className="header-container">
      <h2 className="header-title">CLUB CLOTHING</h2>

      <ul className="header-items">
        <li className="header-item">Explorar</li>
        <li className="header-item">Login</li>
        <li className="header-item">Criar</li>
        <li className="header-item">
          <BsCart3 size={25} />5
        </li>
      </ul>
    </header>
  );
}

export default Header;
