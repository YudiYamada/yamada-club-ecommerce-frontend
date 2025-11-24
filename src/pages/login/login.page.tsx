import { BsGoogle } from "react-icons/bs";
import { FiLogIn } from "react-icons/fi";

import CustomButton from "../../components/custom-button/custom-button.component";
import Header from "../../components/header/header.component";
import {
  LoginContainer,
  LoginContent,
  LoginHeadline,
  LoginInputContainer,
  LoginSubtitle,
} from "./login.styles";

function LoginPage() {
  return (
    <>
      <Header />
      <LoginContainer>
        <LoginContent>
          <LoginHeadline>Entre com a sua conta</LoginHeadline>

          <CustomButton startIcon={<BsGoogle size={20} />}>
            Entrar com o Google
          </CustomButton>

          <LoginSubtitle>ou entre com o seu e-mail</LoginSubtitle>

          <LoginInputContainer>{/* Email input */}</LoginInputContainer>
          <LoginInputContainer>{/* Password input */}</LoginInputContainer>

          <CustomButton startIcon={<FiLogIn size={20} />}>Entrar</CustomButton>
        </LoginContent>
      </LoginContainer>
    </>
  );
}

export default LoginPage;
