import { useState } from "react";
import Heart from "../public/icons/Icon-favorite.svg";
import styled from "styled-components";

export default function FavoriteButton({ onToggleFavorite, id, isFavorite }) {
  const [favorite, setFavorite] = useState(isFavorite);

  function handleToggle(id) {
    setFavorite(!favorite);
    onToggleFavorite(id);
  }
  return (
    <StyledFavButton type="button" onClick={() => handleToggle(id)}>
      {favorite ? (
        <Heart width={20} height={20} fill={"red"} />
      ) : (
        <Heart width={20} height={20} fill={"lightgrey"} />
      )}
    </StyledFavButton>
  );
}
const StyledFavButton = styled.button`
  border: none;
  border-radius: 30%;
  background-color: transparent;
  width: 40px;
  height: 40px;
`;
