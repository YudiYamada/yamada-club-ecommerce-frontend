import { type AuthError, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { BsGoogle } from "react-icons/bs";
import { FiLogIn } from "react-icons/fi";
import validator from "validator";

import Alert from "../../components/alert/alert.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import CustomInput from "../../components/custom-input/custom-input.component";
import Header from "../../components/header/header.component";
import InputErrorMessage from "../../components/input-error-message/input-error-message.component";
import { auth } from "../../config/firebase.config";
import {
  LoginContainer,
  LoginContent,
  LoginHeadline,
  LoginInputContainer,
  LoginSubtitle,
} from "./login.styles";

interface LoginForm {
  email: string;
  password: string;
}

function LoginPage() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<LoginForm>();

  const [showAlert, setShowAlert] = useState(false);

  const handleSubmitPress = async (data: LoginForm) => {
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password,
      );

      console.log(userCredentials);
    } catch (error) {
      const _error = error as AuthError;

      if (_error.code === "auth/invalid-credential") {
        setError("email", { type: "invalid" });
        setError("password", { type: "invalid" });

        setShowAlert(true);
        return;
      }
    }
  };

  return (
    <>
      <Header />

      {showAlert && (
        <Alert
          message="O email ou a senha é inválido."
          onClose={() => setShowAlert(false)}
        />
      )}

      <LoginContainer>
        <LoginContent>
          <LoginHeadline>Entre com a sua conta</LoginHeadline>

          <CustomButton startIcon={<BsGoogle size={20} />}>
            Entrar com o Google
          </CustomButton>

          <LoginSubtitle>ou entre com o seu e-mail</LoginSubtitle>

          <LoginInputContainer>
            <p>E-mail</p>
            <CustomInput
              hasError={!!errors?.email}
              placeholder="Digite seu e-mail"
              type="email"
              {...register("email", {
                required: true,
                validate: (value) => {
                  return validator.isEmail(value);
                },
              })}
            />
            {errors?.email?.type === "required" && (
              <InputErrorMessage>O e-mail é obrigatório.</InputErrorMessage>
            )}
            {errors?.email?.type === "validate" && (
              <InputErrorMessage>O e-mail é inválido.</InputErrorMessage>
            )}
          </LoginInputContainer>
          <LoginInputContainer>
            <p>Senha</p>
            <CustomInput
              hasError={!!errors?.password}
              placeholder="Digite sua senha"
              type="password"
              {...register("password", { required: true })}
            />
            {errors?.password?.type === "required" && (
              <InputErrorMessage>A senha é obrigatória.</InputErrorMessage>
            )}
          </LoginInputContainer>

          <CustomButton
            startIcon={<FiLogIn size={20} />}
            onClick={handleSubmit(handleSubmitPress)}
          >
            Entrar
          </CustomButton>
        </LoginContent>
      </LoginContainer>
    </>
  );
}

export default LoginPage;
