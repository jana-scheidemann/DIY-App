import styled from "styled-components";
import Navigation from "../Navigation";
import PageHeader from "../PageHeader";

export default function StyledGlobalContainer({
  children,
  onResetFilters,
  onAddProject,
}) {
  return (
    <>
      <PageHeader onResetFilters={onResetFilters} />
      <Navigation onAddProject={onAddProject} />
      <Body>{children}</Body>
    </>
  );
}

const Body = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--text-color);
  width: 100%;
  height: 100%;
`;
