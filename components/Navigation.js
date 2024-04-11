import Link from "next/link";
import NavigationMeuIcon from "../public/icons/icon-bruger-menu.svg";
import NavigationMenuCloseIcon from "../public/icons/icon-cancel.svg";
import StyledSearchIcon from "../public/icons/icon-search.svg";
import styled from "styled-components";
import { useState } from "react";
import ModalAdd from "./ModalAdd";

export default function Navigation({
  onAddProject,
  toggleSortModal,
  toggleFilterModal,
  showSearchField,
}) {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  const [modalAdd, setModalAdd] = useState(false);

  function toggleNavigation() {
    setIsNavigationOpen(!isNavigationOpen);
  }

  function toggleSearchBar() {
    setIsSearchBarOpen(!isSearchBarOpen);
  }

  function toggleAddModal() {
    setModalAdd(!modalAdd);
    setIsNavigationOpen(!isNavigationOpen);
  }

  function openSearch() {
    setIsSearchBarOpen(!isSearchBarOpen);
    showSearchField();
  }

  function openSortModal() {
    setIsSearchBarOpen(!isSearchBarOpen);
    toggleSortModal();
  }

  function openFilterModal() {
    setIsSearchBarOpen(!isSearchBarOpen);
    toggleFilterModal();
  }

  return (
    <>
      {!isNavigationOpen && (
        <>
          <StyledSearchMenu onClick={toggleSearchBar}>
            <StyledSearchIcon width={35} height={35} />
          </StyledSearchMenu>
          <StyledNavigationMenu onClick={toggleNavigation}>
            <NavigationMeuIcon width={35} height={35} />
          </StyledNavigationMenu>
        </>
      )}

      {isNavigationOpen && (
        <StyledNavigationMenuBar>
          <StyledNavigationMenu onClick={toggleNavigation}>
            <NavigationMenuCloseIcon width={35} height={35} fill={"#b8b7ad"} />
          </StyledNavigationMenu>
          <StyledNavigationLink href="/" onClick={toggleNavigation}>
            HomePage
          </StyledNavigationLink>
          <StyledNavigationLink href="" onClick={toggleAddModal}>
            Add New Project
            {modalAdd && (
              <ModalAdd
                onAddProject={onAddProject}
                onToggleAddModal={toggleAddModal}
              />
            )}
          </StyledNavigationLink>
          <StyledNavigationLink
            href="/projects/favorites"
            onClick={toggleNavigation}
          >
            Favorite Projects
          </StyledNavigationLink>
        </StyledNavigationMenuBar>
      )}

      {isSearchBarOpen && (
        <StyledSearchBar>
          <StyledNavigationLink href="/" onClick={openSearch}>
            Search
          </StyledNavigationLink>
          <StyledNavigationLink href="/" onClick={openSortModal}>
            Sort Projects
          </StyledNavigationLink>
          <StyledNavigationLink href="/" onClick={openFilterModal}>
            Filter Projects
          </StyledNavigationLink>
        </StyledSearchBar>
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
  right: 2rem;
  cursor: pointer;
`;

const StyledSearchMenu = styled.div`
  position: fixed;
  top: 1rem;
  right: 4rem;
  cursor: pointer;
  z-index: 1000;
`;

const StyledSearchBar = styled.div`
  position: fixed;
  z-index: 1000;
  top: 3.5rem;
  right: 4rem;
  background-color: white;
  border: 1px solid black;
  padding: 0px 20px 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #373a47;
`;

const StyledNavigationMenuBar = styled.nav`
  position: fixed;
  z-index: 1000;
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
