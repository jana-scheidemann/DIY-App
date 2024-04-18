import styled from "styled-components";
import { useState } from "react";
import Image from "next/image";

export default function FavoriteButton({ onToggleFavorite, id, isFavorite }) {
  const [favorite, setFavorite] = useState(isFavorite);

  function handleToggle(id) {
    setFavorite(!favorite);
    onToggleFavorite(id);
  }

  return (
    <StyledButtonFavorite onClick={() => handleToggle(id)}>
      <Image
        src={
          favorite
            ? "/icons/icon-heart-filled-red.svg"
            : "/icons/icon-heart-red.svg"
        }
        alt={favorite ? "favorite checked" : "favorite unchecked"}
        height={50}
        width={50}
      />
    </StyledButtonFavorite>
  );
}

const StyledButtonFavorite = styled.div`
  margin: 10px 10px 0px 0px;
`;
