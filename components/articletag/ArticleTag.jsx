import React from "react";
import { Tag } from "./ArticleTag.styled";

const ArticleTag = ({ tag }) => {
  return <Tag>{tag.label}</Tag>;
};

export default ArticleTag;
