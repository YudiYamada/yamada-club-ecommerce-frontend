import { AlertContainer, Overlay } from "./alert.styles";

interface AlertProps {
  message: string;
  onClose: () => void;
}

function Alert({ message, onClose }: AlertProps) {
  return (
    <Overlay>
      <AlertContainer>
        <span>{message}</span>
        <button onClick={onClose}>Fechar</button>
      </AlertContainer>
    </Overlay>
  );
}

export default Alert;
