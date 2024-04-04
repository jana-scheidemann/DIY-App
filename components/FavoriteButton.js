import { useState } from "react";

export default function FavoriteButton({ onToggleFavorite, id, isFavorite }) {
  const [favorite, setFavorite] = useState(isFavorite);

  function handleToggle(id) {
    setFavorite(!favorite);
    onToggleFavorite(id);
  }
  return (
    <button type="button" onClick={() => handleToggle(id)}>
      {favorite ? "❤️" : "🤍"}
    </button>
  );
}
