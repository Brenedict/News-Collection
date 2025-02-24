import { ReactNode } from "react";
import "../styles/ArticleDisplay1.css";
interface Prop {
  imageSrc: string;
  children: ReactNode;
  display?: string;
  page?: string;
}

function ArticleDisplay1({ imageSrc, children, display, page }: Prop) {
  return (
    <div className={`image-container ${display}`}>
      <img src={imageSrc} alt="" className={`${page}`} />
      <p>{children}</p>
    </div>
  );
}

export default ArticleDisplay1;
