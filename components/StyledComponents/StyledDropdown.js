import styled from "styled-components";

export const StyledDropdown = styled.select`
  width: 66%;
  height: 35px;
  background: white;
  color: var(--text-color);
  padding-left: 5px;
  font-size: var(--font-size);
  border: none;
  margin: 0px 0px 20px 35px;

  &:focus {
    outline-color: var(--background-color);
  }

  &:hover {
    cursor: pointer;
  }
`;
