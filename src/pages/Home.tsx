import { createContext, useEffect, useState } from "react";
import "../services/api";
import "../styles/Global.css";
import "../styles/Home.css";

import Home_MainDisplay from "../components/Home_MainDisplay";

import { ArticleInterface } from "../services/api";
import { sampleSource } from "../services/api";
import Home_CollapsibleDisplay from "../components/Home_CollapsibleDisplay";

export const headlineContext = createContext<ArticleInterface[] | undefined>(
  undefined
);

// Disects "articles" to be an object instead of being treated as a variable
function Home() {
  const [articles, setArticles] = useState<ArticleInterface[]>([]);

  useEffect(() => {
    const sampleNews = async () => {
      const articles = await sampleSource();
      setArticles(articles);
    };

    sampleNews();
  }, []);

  return (
    <main className="home-container">
      <headlineContext.Provider value={articles}>
        <Home_MainDisplay></Home_MainDisplay>
        <Home_CollapsibleDisplay></Home_CollapsibleDisplay>
      </headlineContext.Provider>
    </main>
  );
}

export default Home;
