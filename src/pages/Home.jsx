import React, { useState, useEffect, useContext } from "react";
import Header from "../components/Header";
import useFetch from "../hooks/useFetch";
import Card from "../components/Card";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { ArticleContext } from "../context/ArticlesContext";
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

function Home() {
  const [articles, setArticles] = useState([]);
  const { articles: articlesListByTag, articleTag } =
    useContext(ArticleContext);

  const { data, error, loading } = useFetch(
    `${BASE_URL}data/v1/post?limit${20}`,
    "get",
    true
  );

  //data principal del home
  useEffect(() => {
    if (data !== null) {
      setArticles(data?.data);
    }
  }, [data]);

  //data al hacer click en los tags
  useEffect(() => {
    if (articlesListByTag !== false) {
      setArticles(articlesListByTag);
    }
  }, [articlesListByTag]);

  return (
    <>
      <Header />
      <div className="max-w-7xl bg-slate-100 mx-auto py-8 px-12 mt-14 rounded">
        <div className="flex justify-between mb-12 items-center">
          <h1 className="font-bold text-4xl">Ultimas noticias</h1>
          {articleTag?.length > 0 && (
            <h3 className="font-semibold">
              Resultados para:
              <span className="font-normal"> {articleTag}</span>
            </h3>
          )}
        </div>

        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="30px">
            {articles.map((article) => {
              return <Card article={article} />;
            })}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </>
  );
}

export default Home;
