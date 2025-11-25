import { useForm, useWatch } from "react-hook-form";
import { FiLogIn } from "react-icons/fi";
import validator from "validator";

import CustomButton from "../../components/custom-button/custom-button.component";
import CustomInput from "../../components/custom-input/custom-input.component";
import InputErrorMessage from "../../components/input-error-message/input-error-message.component";
import {
  SignUpContainer,
  SignUpContent,
  SignUpHeadline,
  SignUpInputContainer,
} from "./sign-up.styles";

interface SignUpForm {
  name: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

function SignUpPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpForm>();

  const { control } = useForm<SignUpForm>();
  const watchPassword = useWatch({ control, name: "password" });

  const handleSubmitPress = (data: SignUpForm) => {
    console.log(data);
  };

  console.log({ errors });

  return (
    <>
      <SignUpContainer>
        <SignUpContent>
          <SignUpHeadline>Crie sua conta</SignUpHeadline>
          <SignUpInputContainer>
            <p>Nome</p>
            <CustomInput
              hasError={!!errors?.name}
              placeholder="Digite seu nome"
              {...register("name", { required: true })}
            />
            {errors?.name?.type === "required" && (
              <InputErrorMessage>O nome é obrigatório.</InputErrorMessage>
            )}
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Sobrenome</p>
            <CustomInput
              hasError={!!errors?.lastName}
              placeholder="Digite seu sobrenome"
              {...register("lastName", { required: true })}
            />
            {errors?.lastName?.type === "required" && (
              <InputErrorMessage>O sobrenome é obrigatório.</InputErrorMessage>
            )}
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>E-mail</p>
            <CustomInput
              hasError={!!errors?.email}
              type="email"
              placeholder="Digite seu e-mail"
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
          </SignUpInputContainer>

          <SignUpInputContainer>
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
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Confirme sua senha</p>
            <CustomInput
              hasError={!!errors?.passwordConfirmation}
              placeholder="Digite sua senha novamente"
              type="password"
              {...register("passwordConfirmation", {
                required: true,
                validate: (value) => {
                  return value === watchPassword;
                },
              })}
            />
            {errors?.passwordConfirmation?.type === "required" && (
              <InputErrorMessage>
                A confirmação de senha é obrigatória.
              </InputErrorMessage>
            )}
            {errors?.passwordConfirmation?.type === "validate" && (
              <InputErrorMessage>
                A confirmação de senha deve ser igual a senha.
              </InputErrorMessage>
            )}
          </SignUpInputContainer>

          <CustomButton
            startIcon={<FiLogIn size={18} />}
            onClick={handleSubmit(handleSubmitPress)}
          >
            Criar Conta
          </CustomButton>
        </SignUpContent>
      </SignUpContainer>
    </>
  );
}

export default SignUpPage;
