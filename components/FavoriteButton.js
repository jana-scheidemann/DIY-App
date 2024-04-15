import { useState } from "react";

export default function FavoriteButton({ onToggleFavorite, _id, isFavorite }) {
  const [favorite, setFavorite] = useState(isFavorite);

  console.log("ID to update:", _id);

  function handleToggle(_id) {
    setFavorite(!favorite);
    onToggleFavorite(_id);
  }
  return (
    <button type="button" onClick={() => handleToggle(_id)}>
      {favorite ? "❤️" : "🤍"}
    </button>
  );
}
