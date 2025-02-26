import { useState, useEffect, useContext } from "react";
import { ArticleInterface } from "../services/api";
import ArticleDisplay1 from "./ArticleDisplay1";
import { headlineContext } from "../pages/Home";

function Home_MainDisplay() {
  const articles: ArticleInterface[] = useContext(headlineContext);

  // Tracks which image is shown in the main display
  const [mainArticle, setMainArticle] = useState<ArticleInterface>();
  const [mainArticleSelected, setMainArticleSelected] = useState<number>(0);

  // Sets the default main article to be the first article
  useEffect(() => {
    if (articles.length > 0) {
      setMainArticle(articles[0]);
    }
  }, [articles]);
  return (
    <>
      {/* Sample Loading text for temporary indication */}
      {articles.length == 0 && <h1 className="loading-draft">LOADING</h1>}

      <section className="hero-section">
        {mainArticle && (
          <ArticleDisplay1
            article={mainArticle}
            page="home-image"
          ></ArticleDisplay1>
        )}
        <div className="main-articles-buttons">
          {articles.map(
            (article, index) =>
              index < 3 && (
                <div
                  className={`main-articles-selection ${
                    mainArticleSelected == index ? "selected" : ""
                  }`}
                  onClick={() => {
                    setMainArticle(article);
                    setMainArticleSelected(index);
                  }}
                >
                  <p className="main-article-date">
                    {article?.publishedAt.slice(0, 10)}
                  </p>
                  <p className="main-article-title">{article?.title}</p>
                </div>
              )
          )}
        </div>
      </section>
    </>
  );
}

export default Home_MainDisplay;
