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
        <StyledNavigationMenu onClick={toggleNavigation}>
          <Image
            src={"/icons/burger_menu.png"}
            width={35}
            height={35}
            alt={"burger menu icon"}
          />
        </StyledNavigationMenu>
      )}

      {isNavigationOpen && (
        <StyledNavigationMenuBar>
          <StyledNavigationMenu onClick={toggleNavigation}>
            <Image
              src={"/icons/cancel_light.png"}
              width={35}
              height={35}
              alt={"cancel icon"}
            />
          </StyledNavigationMenu>
          <StyledNavigationLink href="/" onClick={toggleNavigation}>
            HomePage
          </StyledNavigationLink>
          <StyledNavigationLink href="/" onClick={toggleAddModal}>
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

      {modalAdd && (
        <ModalAdd
          onAddProject={onAddProject}
          onToggleAddModal={closeAddModal}
        />
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
