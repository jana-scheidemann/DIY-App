import styled from "styled-components";
import Link from "next/link";

export default function PageHeader({ onResetFilters }) {
  return (
    <>
      <Link href="/" onClick={onResetFilters}>
        <StyledPageHeader>DIY.</StyledPageHeader>
      </Link>
    </>
  );
}

const StyledPageHeader = styled.h1`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 900;
  width: 100%;
  background-color: var(--background-color);
  font-size: 4.8em;
  color: var(--text-color);
  text-decoration: none;
  letter-spacing: 0.001em;
  margin: 0px 0px 0px 0px;
  padding: 15px 0px 0px 30px;
`;
