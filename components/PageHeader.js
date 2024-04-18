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
  font-size: 4.8em;
  color: var(--text-color);
  text-decoration: none;
  letter-spacing: 0.001em;
  margin: 10px 0px -10px 20px;
`;
