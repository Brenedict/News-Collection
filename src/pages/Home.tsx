import { use, useEffect, useState } from "react";
import "../services/api";
import { sampleSource } from "../services/api";
import "../styles/Global.css";
import "../styles/Home.css";

import ArticleDisplay1 from "../components/ArticleDisplay1";

interface Article {
  source: {
    id: string | null;
    name: string;
  };
  author: string | null;
  title: string;
  description: string;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
}

function Home() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [mainArticle, setMainArticle] = useState<Article>();
  const [mainArticleSelected, setMainArticleSelected] = useState<number>(0);
  useEffect(() => {
    const sampleNews = async () => {
      const articles = await sampleSource();
      setArticles(articles);
    };

    sampleNews();
  }, []);

  useEffect(() => {
    if (articles.length > 0) {
      setMainArticle(articles[0]);
    }
  }, [articles]);

  return (
    <main>
      {/* Sample Loading text for temporary indication */}
      {articles.length == 0 && <h1 className="loading-draft">LOADING</h1>}
      <section className="hero-section">
        <ArticleDisplay1 imageSrc={mainArticle?.urlToImage} page="home-image">
          {mainArticle?.description}
        </ArticleDisplay1>
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
                  <p className="main-article-date">{article?.publishedAt}</p>
                  <p className="main-article-title">{article?.title}</p>
                </div>
              )
          )}
        </div>
      </section>
    </main>
  );
}

export default Home;
