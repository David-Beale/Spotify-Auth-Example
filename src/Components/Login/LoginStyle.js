import styled from "styled-components";
import { colors } from "../../colors";

export const Status = styled.div`
  width: 130px;
  color: ${({ error }) => (error ? "rgb(247,49,49)" : "")};
  font-weight: 700;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const AccessRequired = styled.div`
  font-size: 1rem;
  color: white;
  padding: 0 25px;
  text-align: center;
`;

export const WelcomeButtonsContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  z-index: 4;
`;
export const Button = styled.div`
  background-color: ${colors.spotifyGreen};
  width: 200px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  border-radius: 25px;
  cursor: pointer;
  box-shadow: 0 0 6px 0px white;
  user-select: none;
  transition: background-position 0.2s ease-in-out;
  background-image: linear-gradient(to top, white 50%, transparent 50%);
  background-size: 100% 200%;
  background-position: top;
  &:hover {
    background-position: bottom;
    color: ${colors.spotifyGreen};
    font-weight: 600;
  }
`;
