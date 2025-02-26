import { useContext } from "react";
import ArticleDisplay2 from "./ArticleDisplay2";
import { headlineContext } from "../pages/Home";
import { ArticleInterface } from "../services/api";

function Home_CollapsibleDisplay() {
  const articles: ArticleInterface = useContext(headlineContext);
  return (
    <div>
      {/* Temporary way of checking */}
      {articles[0] && <ArticleDisplay2 article={articles[0]}></ArticleDisplay2>}
    </div>
  );
}

export default Home_CollapsibleDisplay;
