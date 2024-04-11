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

  &:hover {
    transform: scale(1.05);
    transition: 0.4s;
  }
`;

export default StyledButton;

/*const Button = styled.button`
  color: #BF4F74;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #BF4F74;
  border-radius: 3px;
`;

// A new component based on Button, but with some override styles
const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;
 */
