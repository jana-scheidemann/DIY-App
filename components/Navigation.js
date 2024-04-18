import Link from "next/link";
import styled from "styled-components";
import { useState } from "react";
import ModalAdd from "./ModalAdd";
import Image from "next/image";

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
            <Image
              src="/icons/search-dummy.svg"
              width={50}
              height={50}
              alt="open search menu"
            />
          </StyledSearchMenu>

          <StyledNavigationMenu onClick={toggleNavigation}>
            <Image
              src="/icons/burger-menu.svg"
              width={50}
              height={50}
              alt="open navigation menu"
            />
          </StyledNavigationMenu>
        </>
      )}

      {isNavigationOpen && (
        <StyledNavigationMenuBar>
          <StyledNavigationMenu onClick={toggleNavigation}>
            <Image
              src="/icons/cancel.svg"
              width={50}
              height={50}
              alt="close navigation menu"
            />
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

const StyledSearchMenu = styled.div`
  position: fixed;
  top: 61px;
  left: 148px;
  cursor: pointer;
`;

const StyledSearchBar = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  right: 0;
  width: 100%;
  height: 45%;
  background-color: var(--search-menu-background);
  transition-duration: 0.6s;
  animation-duration: 0.6s;
  animation-name: slideDown;
  @keyframes slideDown {
    from {
      transform: translateY(-100%);
    }
    to {
      transform: translateY(0);
    }
  }
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const StyledNavigationMenuBar = styled.nav`
  position: fixed;
  z-index: 1000;
  top: 0;
  right: 0;
  width: 100%;
  height: 45%;
  background-color: var(--burger-menu-background);
  transition-duration: 0.6s;
  animation-duration: 0.6s;
  animation-name: slideDown;
  @keyframes slideDown {
    from {
      transform: translateY(-100%);
    }
    to {
      transform: translateY(0);
    }
  }
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const StyledNavigationLink = styled(Link)`
  color: var(--menu-color);
  text-decoration: none;
  margin: 20px 0 0 20px;
  padding-top: 10px;
  font-size: 1.9em;
  font-weight: 500;
  margin: 25px 0px 0px 30px;
`;

const StyledNavigationMenu = styled.div`
  position: fixed;
  top: 25px;
  right: 25px;
  cursor: pointer;
`;
