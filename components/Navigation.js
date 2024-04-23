import Link from "next/link";
import styled from "styled-components";
import { useState } from "react";
import ModalAdd from "./ModalAdd";
import Image from "next/image";

export default function Navigation({ onAddProject }) {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);
  const [modalAdd, setModalAdd] = useState(false);

  function toggleNavigation() {
    setIsNavigationOpen(!isNavigationOpen);
  }

  function toggleAddModal() {
    setIsNavigationOpen(!isNavigationOpen);
    setModalAdd(!modalAdd);
  }
  function closeAddModal() {
    setModalAdd(!modalAdd);
  }

  return (
    <>
      {!isNavigationOpen && (
        <>
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
            Home
          </StyledNavigationLink>
          <StyledNavigationLink href="/" onClick={toggleAddModal}>
            add new project
          </StyledNavigationLink>
          <StyledNavigationLink
            href="/projects/favorites"
            onClick={toggleNavigation}
          >
            favorite projects
          </StyledNavigationLink>
        </StyledNavigationMenuBar>
      )}

      {modalAdd && (
        <ModalAdd
          onAddProject={onAddProject}
          onToggleAddModal={closeAddModal}
        />
      )}
    </>
  );
}

const StyledNavigationMenuBar = styled.nav`
  position: fixed;
  z-index: 300;
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
  font-size: 1.4em;
  font-weight: 500;
  margin: 30px 0px 0px 30px;
`;

const StyledNavigationMenu = styled.div`
  position: fixed;
  top: 25px;
  right: 25px;
  cursor: pointer;
`;
