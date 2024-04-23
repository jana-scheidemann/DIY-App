import styled from "styled-components";

export const StyledInputSearch = styled.label`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 88%;
  margin: 0px 0px 20px 30px;
`;

export const StyledInputSearchField = styled.input`
  width: 100%;
  height: 40px;
  font-size: 1em;
  border: none;
  border-radius: 24px;
  padding-left: 45px;
  padding-right: 10px;
  outline-width: 0;
`;

export const StyledInputSearchFieldContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const StyledSearchIcon = styled.div`
  position: absolute;
  left: 10px;
  top: 25%;
  transform: translateX(20%);
  width: 25px;
  height: 25px;
`;

export const StyledSearchItem = styled.article`
  width: fit-content;
  justify-content: flex-start;
`;

export const StyledInputModal = styled.input`
  width: 85%;
  height: 40px;
  font-size: 0.9em;
  font-weight: 400;
  border: none;
  border-radius: 10px;
  padding: 0px 10px 0px 10px;
  margin: 0px 0px 5px 8px;
  outline-width: 0;
`;

export const StyledFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  // align-items: start;
`;

export const StyledFormContainerButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledRadioButton = styled.input`
  --s: 1.3em;
  --c: var(--radio-button-background);
  height: var(--s);
  aspect-ratio: 1;
  border: calc(var(--s) / 8) solid var(--radio-button-border);
  padding: calc(var(--s) / 8);
  background: radial-gradient(farthest-side, var(--c) 94%, #0000) 50%/0 0
    no-repeat content-box;
  border-radius: 50%;
  outline-offset: calc(var(--s) / 10);
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
  font-size: inherit;
  transition: 0.3s;

  &:checked {
    border-color: var(--c);
    background-size: 100%100%;
  }
`;

export const StyledRadioButtonLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 5px;
  margin: 0px 0px 0px 10px;
  padding: 0px 0px 4px 0px;
`;

export const StyledCheckbox = styled.input`
  --s: 1.3em;
  --c: var(--radio-button-background);
  height: var(--s);
  aspect-ratio: 1;
  border: calc(var(--s) / 8) solid var(--radio-button-border);
  padding: calc(var(--s) / 8);
  background: radial-gradient(farthest-side, var(--c) 94%, #0000) 50%/0 0
    no-repeat content-box;
  border-radius: 50%;
  outline-offset: calc(var(--s) / 10);
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
  font-size: inherit;
  transition: 0.3s;

  &:checked {
    border-color: var(--c);
    background-size: 100%100%;
  }
`;

export const StyledCheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  margin: 0px 0px 0px 5px;
`;
