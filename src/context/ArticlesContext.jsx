import React, { useState, createContext } from "react";

const ArticleContext = createContext(null);

const ArticleContextProvider = ({ children }) => {
  const [articles, setArticles] = useState(false);
  const [articleTag, setArticleTag] = useState("");

  const updateArticlesList = (article) => {
    setArticles(article);
  };

  return (
    <ArticleContext.Provider
      value={{ articles, updateArticlesList, setArticleTag, articleTag }}
    >
      {children}
    </ArticleContext.Provider>
  );
};

export { ArticleContext, ArticleContextProvider };
