import styled from "styled-components";

export const StyledArticle = styled.article`
  width: 100%;
  background-color: var(--background-color-yellow);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  // padding: 10px 20px 10px 20px;
  margin: 0px 0px 10px 0px;
`;

export const StyledArticleHeadlineH2 = styled.h2`
  font-size: 3.8em;
  font-weight: 600;
  margin: 7px 0px 7px 25px;
`;

export const StyledArticleHeadlineH3 = styled.h3`
  font-size: 1.9em;
  font-weight: 500;
  margin: 7px 0px 7px 25px;
`;

export const StyledArticleDescription = styled.div`
  font-size: 1.2em;
  font-weight: 400;
  margin: 20px 25px 0px 25px;
`;

export const StyledArticleTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: space-between;
  justify-content: flex-start;
  margin: 10px;
`;

export const StyledArticleTagDescription = styled.div`
  font-size: 0.9em;
  font-weight: 500;
  margin: 10px 10px 10px 15px;
`;

export const StyledArticleTag = styled.span`
  // background-color: var(--tag-background);
  // color: var(--tag-text);
  // width: 100px;
  // text-align: center;
  font-size: 1.2em;
  font-weight: 600;
  // border-radius: 5px;
  // border: none;
  padding: 5px 0px 8px 0px;
  // margin: 5px;
  // box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
