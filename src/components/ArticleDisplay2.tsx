import { useContext } from "react";
import { Link } from "react-router-dom";

import "../styles/ArticleDisplay2.css";
import { ArticleInterface } from "../services/api";
import { NewsContext } from "../context/NewsProvider";

function ArticleDisplay2({ article }: { article: ArticleInterface }) {
  const newsContext = useContext(NewsContext);

  return (
    <div className={`image-container`}>
      <img src={article.urlToImage} alt="" />
      <p>
        <Link
          onClick={() => {
            newsContext?.setArticle(article);
          }}
          to={`/article/${article.publishedAt.slice(0, 10)}/${article.title}`}
        >
          {article.description}
        </Link>
      </p>
    </div>
  );
}

export default ArticleDisplay2;
