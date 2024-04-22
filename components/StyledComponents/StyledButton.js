import styled from "styled-components";
import Link from "next/link";

export const StyledButton = styled.button`
  background-color: var(--button-background);
  color: var(--button-text);
  font-size: 16px;
  font-weight: 500;
  width: 100px;
  text-align: center;

  border-radius: 20px;
  border: none;
  padding: 8px;
  margin: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:hover {
    background-color: var(--button-text);
    color: var(--button-background);
  }
`;

export const StyledButtonReset = styled.input`
  background-color: var(--button-background);
  color: var(--button-text);
  font-size: 16px;
  font-weight: 500;
  width: 100px;
  text-align: center;

  border-radius: 20px;
  border: none;
  padding: 8px;
  margin: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

export const StyledButtonLink = styled(Link)`
  background-color: var(--button-background);
  color: var(--button-text);
  font-size: 16px;
  font-weight: 500;
  width: 100px;
  text-align: center;

  border-radius: 20px;
  border: none;
  padding: 8px;
  margin: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

export const StyledButtonFavorite = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 30%;
  width: 100px;
  height: 80px;
`;
