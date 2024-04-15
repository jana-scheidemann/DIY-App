import Link from "next/link";
import NavigationMeuIcon from "../public/icons/icon-bruger-menu.svg";
import NavigationMenuCloseIcon from "../public/icons/icon-cancel.svg";
import styled from "styled-components";
import { useState } from "react";

export default function Navigation({ onAddProject, handletoggleModalAdd }) {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);

  function toggleNavigation() {
    setIsNavigationOpen(!isNavigationOpen);
  }

  return (
    <>
      {!isNavigationOpen && (
        <StyledNavigationMenu onClick={toggleNavigation}>
          <NavigationMeuIcon width={35} height={35} />
        </StyledNavigationMenu>
      )}

      {isNavigationOpen && (
        <StyledNavigationMenuBar>
          <StyledNavigationMenu onClick={toggleNavigation}>
            <NavigationMenuCloseIcon width={35} height={35} fill={"#b8b7ad"} />
          </StyledNavigationMenu>
          <StyledNavigationLink href="/" onClick={toggleNavigation}>
            HomePage
          </StyledNavigationLink>
          <StyledNavigationLink href="" onClick={handletoggleModalAdd}>
            Add New Project
          </StyledNavigationLink>
          <StyledNavigationLink
            href="/projects/favorites"
            onClick={toggleNavigation}
          >
            Favorite Projects
          </StyledNavigationLink>
        </StyledNavigationMenuBar>
      )}
    </>
  );
}

const StyledNavigationLink = styled(Link)`
  color: #b8b7ad;
  font-size: 2rem;
  margin: 0.4rem;
`;

const StyledNavigationMenu = styled.div`
  position: fixed;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
`;

const StyledNavigationMenuBar = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  width: 45%;
  height: 100vh;
  background-color: #373a47;
  padding: 80px 0 0 40px;

  transition-duration: 1.2s;
  animation-duration: 1.2s;
  animation-name: slideInRight;

  @keyframes slideInRight {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
