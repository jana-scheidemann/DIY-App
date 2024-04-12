import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";

export default function FavoriteButton({ onToggleFavorite, id, isFavorite }) {
  const [favorite, setFavorite] = useState(isFavorite);

  function handleToggle(id) {
    setFavorite(!favorite);
    onToggleFavorite(id);
  }
  return (
    <StyledFavButton type="button" onClick={() => handleToggle(id)}>
      {favorite ? (
        <Image src={"/icons/heart_filled.png"} width={30}  height={30} alt= {"heart icon"}/>
      ) : (
        <Image src={"/icons/heart_empty.png"} width={30}  height={30} alt= {"heart icon"}/>
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
