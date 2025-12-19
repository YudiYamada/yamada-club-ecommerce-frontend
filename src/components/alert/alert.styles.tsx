import styled from "styled-components";

import Colors from "../../theme/theme.colors";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
  z-index: 9998;
`;

export const AlertContainer = styled.div`
  width: 300px;
  height: 200px;
  padding: 20px;
  border-radius: 30px;
  background: ${Colors.background.dark};
  color: ${Colors.text.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;

  button {
    background-color: ${Colors.background.white};
    color: ${Colors.text.dark};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
    border: none;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-right: 15px;
    padding-left: 15px;
    font-weight: 600;
    transition: all 0.5s ease;

    &:hover {
      cursor: pointer;
      background-color: #000000;
      color: ${Colors.focus};
    }
  }
`;
