import { ReactNode, useContext } from "react";
import { Link } from "react-router-dom";

import "../styles/ArticleDisplay1.css";
import { ArticleInterface } from "../services/api";
import { NewsContext } from "../context/NewsProvider";

interface Prop {
  page?: string;
  article: ArticleInterface;
}

function ArticleDisplay1({ page, article }: Prop) {
  const newsContext = useContext(NewsContext);
  return (
    <div className={`image-container`}>
      <img src={article.urlToImage} alt="" className={`${page}`} />
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

export default ArticleDisplay1;
