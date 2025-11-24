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

          {/* BUTTON */}

          <LoginSubtitle>ou entre com o seu e-mail</LoginSubtitle>

          <LoginInputContainer>{/* Email input */}</LoginInputContainer>
          <LoginInputContainer>{/* Password input */}</LoginInputContainer>

          {/* BUTTON */}
        </LoginContent>
      </LoginContainer>
    </>
  );
}

export default LoginPage;
