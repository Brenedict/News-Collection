import React from "react";
import { useEffect, useState } from "react";
import "../services/api";
import { sampleSource } from "../services/api";

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
  useEffect(() => {
    const sampleNews = async () => {
      const articles = await sampleSource();
      setArticles(articles);
    };

    sampleNews();
  }, []);
  return (
    <section>
      {articles.map(
        (article, index) => index < 3 && <img src={article.urlToImage} alt="" />
      )}
    </section>
  );
}

export default Home;
