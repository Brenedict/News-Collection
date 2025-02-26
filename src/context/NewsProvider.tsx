import { createContext, useState, ReactNode } from "react";
import { ArticleInterface } from "../services/api";

interface NewsContextType {
  article: ArticleInterface;
  setArticle: (articles: ArticleInterface) => void;
}

// Actual context
export const NewsContext = createContext<NewsContextType | undefined>(
  undefined
);

// Component that surrounds its children with a context provider as well as useState
export const NewsProvider = ({ children }: { children: ReactNode }) => {
  const [article, setArticle] = useState<ArticleInterface | undefined>(
    undefined
  );

  return (
    <NewsContext.Provider value={{ article, setArticle }}>
      {children}
    </NewsContext.Provider>
  );
};
