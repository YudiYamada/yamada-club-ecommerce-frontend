import { BsCart3 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import {
  HeaderContainer,
  HeaderItem,
  HeaderItems,
  HeaderTitle,
} from "./header.styles";

function Header() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <HeaderContainer>
      <HeaderTitle>YAMADA CLUB CLOTHING</HeaderTitle>

      <HeaderItems>
        <HeaderItem>Explorar</HeaderItem>
        <HeaderItem onClick={handleLoginClick}>Login</HeaderItem>
        <HeaderItem>Criar</HeaderItem>
        <HeaderItem>
          <BsCart3 size={25} />5
        </HeaderItem>
      </HeaderItems>
    </HeaderContainer>
  );
}

export default Header;
