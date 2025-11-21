import { BsCart3 } from "react-icons/bs";

import {
  HeaderContainer,
  HeaderItem,
  HeaderItems,
  HeaderTitle,
} from "./header.styles";

function Header() {
  return (
    <HeaderContainer>
      <HeaderTitle className="header-title">YAMADA CLUB CLOTHING</HeaderTitle>

      <HeaderItems className="header-items">
        <HeaderItem className="header-item">Explorar</HeaderItem>
        <HeaderItem className="header-item">Login</HeaderItem>
        <HeaderItem className="header-item">Criar</HeaderItem>
        <HeaderItem className="header-item">
          <BsCart3 size={25} />5
        </HeaderItem>
      </HeaderItems>
    </HeaderContainer>
  );
}

export default Header;
