import { InputErrorMessageContainer } from "./input-error-message.styles";

interface InputErrorMessageProps {
  children: string;
}

function InputErrorMessage({ children }: InputErrorMessageProps) {
  return <InputErrorMessageContainer>{children}</InputErrorMessageContainer>;
}

export default InputErrorMessage;
