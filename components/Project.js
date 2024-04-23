import FavoriteButton from "./FavoriteButton";
import Image from "next/image";
import { StyledLink } from "./StyledComponents/StyledLink";
import {
  StyledArticle,
  StyledArticleHeadlineH3,
  StyledArticleDescription,
  StyledArticleTags,
  StyledArticleTag,
  StyledArticleTagDescription,
} from "./StyledComponents/StyledArticle";

export default function Project({
  title,
  description,
  slug,
  duration,
  complexity,
  id,
  onToggleFavorite,
  isFavorite,
  image,
}) {
  const truncate = (input) =>
    input.length > 100 ? `${input.substring(0, 100)} ...` : input;

  return (
    <>
      <StyledArticle>
        <StyledLink href={`/projects/${slug}`}>
          <StyledArticleHeadlineH3>{title}</StyledArticleHeadlineH3>
        </StyledLink>
        <FavoriteButton
          id={id}
          onToggleFavorite={onToggleFavorite}
          isFavorite={isFavorite}
        />
      </StyledArticle>

      <StyledArticleDescription>
        {truncate(description)}
      </StyledArticleDescription>

      <Image
        style={{ marginBlockStart: "1.33em" }}
        src={image}
        width={320}
        height={213}
        layout="responsive"
        alt={`Image of ${title} in comic style`}
      />

      <StyledArticleTags>
        <StyledArticleTagDescription>Duration: </StyledArticleTagDescription>
        <StyledArticleTag>{duration}</StyledArticleTag>
        <StyledArticleTagDescription>Complexity: </StyledArticleTagDescription>
        <StyledArticleTag>{complexity}</StyledArticleTag>
      </StyledArticleTags>
    </>
  );
}
