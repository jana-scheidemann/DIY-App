import styled from "styled-components";
import Navigation from "../Navigation";
import Link from "next/link";

export default function StyledGlobalContainer({
  children,
  onResetFilters,
  onAddProject,
  toggleSortModal,
  toggleFilterModal,
  showSearchField,
}) {
  return (
    <>
      <Header>
        <StyledLink href={"/"} onClick={onResetFilters}>
          <StyledHeadline>DIY APP</StyledHeadline>
        </StyledLink>
        <Navigation
          onAddProject={onAddProject}
          toggleSortModal={toggleSortModal}
          toggleFilterModal={toggleFilterModal}
          showSearchField={showSearchField}
        />
      </Header>

      <Body>{children}</Body>
    </>
  );
}

const Header = styled.header`
  position: fixed;
  z-index: 100;
  background-color: var(--background-color-yellow);
  top: 0;
  height: 5rem;
  width: 100vw;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledHeadline = styled.h1`
  text-align: center;
  color: var(--text-color);
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--text-color);
  width: 100%;
  height: 100%;
`;
