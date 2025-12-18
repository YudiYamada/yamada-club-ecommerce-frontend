import { signOut } from "firebase/auth";
import { BsCart3 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import { auth } from "../../config/firebase.config";
import {
  HeaderContainer,
  HeaderItem,
  HeaderItems,
  HeaderTitle,
} from "./header.styles";

function Header() {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleSignUpClick = () => {
    navigate("/sign-up");
  };

  return (
    <HeaderContainer>
      <HeaderTitle>YAMADA CLUB CLOTHING</HeaderTitle>

      <HeaderItems>
        <HeaderItem onClick={handleHomeClick}>Explorar</HeaderItem>
        <HeaderItem onClick={handleLoginClick}>Login</HeaderItem>
        <HeaderItem onClick={handleSignUpClick}>Criar Conta</HeaderItem>
        <HeaderItem onClick={() => signOut(auth)}>Sair</HeaderItem>
        <HeaderItem>
          <BsCart3 size={25} />5
        </HeaderItem>
      </HeaderItems>
    </HeaderContainer>
  );
}

export default Header;
