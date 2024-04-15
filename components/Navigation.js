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
              src={"/icons/search.png"}
              width={35}
              height={35}
              alt={"search icon"}
            />
          </StyledSearchMenu>
          <StyledNavigationMenu onClick={toggleNavigation}>
            <Image
              src={"/icons/burger_menu.png"}
              width={35}
              height={35}
              alt={"burger menu icon"}
            />
          </StyledNavigationMenu>
        </>
      )}

      {isNavigationOpen && (
        <StyledNavigationMenuBar>
          <StyledNavigationMenu onClick={toggleNavigation}>
            <Image
              src={"/icons/cancel.png"}
              width={35}
              height={35}
              alt={"cancel icon"}
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

const StyledNavigationLink = styled(Link)`
  color: #b8b7ad;
  font-size: 1.3rem;
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
  z-index: 200;
`;

const StyledSearchBar = styled.div`
  position: fixed;
  z-index: 200;
  top: 3.5rem;
  right: 4rem;
  background-color: var(--text-color);
  color: var(--background-color);
  border: 1px solid black;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledNavigationMenuBar = styled.nav`
  position: fixed;
  z-index: 300;
  top: 0;
  right: 0;
  width: 45%;
  height: 100vh;
  background-color: var(--text-color);
  color: var(--background-color);
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
