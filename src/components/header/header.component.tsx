import { signOut } from "firebase/auth";
import { useContext } from "react";
import { BsCart3 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import { auth } from "../../config/firebase.config";
import { UserContext } from "../../contexts/user.context";
import {
  HeaderContainer,
  HeaderItem,
  HeaderItems,
  HeaderTitle,
} from "./header.styles";

function Header() {
  const navigate = useNavigate();

  const { isAuthenticated } = useContext(UserContext);

  const handleHomeClick = () => {
    navigate("/");
  };

  const handleExploreClick = () => {
    navigate("/explore");
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleSignUpClick = () => {
    navigate("/sign-up");
  };

  return (
    <HeaderContainer>
      <HeaderTitle onClick={handleHomeClick}>YAMADA CLUB CLOTHING</HeaderTitle>

      <HeaderItems>
        <HeaderItem onClick={handleExploreClick}>Explorar</HeaderItem>

        {!isAuthenticated && (
          <>
            <HeaderItem onClick={handleLoginClick}>Login</HeaderItem>
            <HeaderItem onClick={handleSignUpClick}>Criar Conta</HeaderItem>
          </>
        )}

        {isAuthenticated && (
          <HeaderItem onClick={() => signOut(auth)}>Sair</HeaderItem>
        )}

        <HeaderItem>
          <BsCart3 size={25} />5
        </HeaderItem>
      </HeaderItems>
    </HeaderContainer>
  );
}

export default Header;
