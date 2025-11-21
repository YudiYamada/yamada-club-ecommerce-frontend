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
      <HeaderTitle>YAMADA CLUB CLOTHING</HeaderTitle>

      <HeaderItems>
        <HeaderItem>Explorar</HeaderItem>
        <HeaderItem className="header-item">Login</HeaderItem>
        <HeaderItem className="header-item">Criar</HeaderItem>
        <HeaderItem>
          <BsCart3 size={25} />5
        </HeaderItem>
      </HeaderItems>
    </HeaderContainer>
  );
}

export default Header;
