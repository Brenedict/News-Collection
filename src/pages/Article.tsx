import { useContext } from "react";
import { ArticleInterface } from "../services/api";
import { NewsContext } from "../context/NewsProvider";
import "../styles/Article.css";

function Article() {
  const clickedArticle: ArticleInterface = useContext(NewsContext)?.article;

  return (
    <div className="article-container">
      <img src={clickedArticle.urlToImage} alt="" />
      <br />
      <h1>{clickedArticle.title}</h1>
      <br />
      <h2>{clickedArticle.description}</h2>
    </div>
  );
}
export default Article;
