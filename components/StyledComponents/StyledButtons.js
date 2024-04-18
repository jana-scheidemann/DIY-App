import styled from "styled-components";

const StyledButton = styled.button`
  background-color: var(--background-color-yellow);
  color: var(--text-color);
  font-size: 14px;
  width: 100px;
  justify-content: center;

  border-radius: 20px;
  border: none;
  padding: 8px;
  margin: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transform: scale(1);
  transition: 0.5s;

  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;

  &:hover {
    transform: scale(1);
    transition: 0.4s;
  }
`;

export default StyledButton;

