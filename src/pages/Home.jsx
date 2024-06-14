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
  const [limitArticles, setLimitArticles] = useState(5);
  const [limitArticlesTag, setLimitArticlesTag] = useState(5);

  const { data, loading } = useFetch(
    `${BASE_URL}data/v1/post?limit=${limitArticles}`,
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

  const loadMoreArticles = () => {
    setLimitArticles(limitArticles + 5);
  };
  
  const reloadF = ()=>{
    window.location.reload()
  }

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
        <button
          onClick={reloadF}
          className="bg-slate-500 text-white px-4 py-2 mb-4 rounded-xl"
        >
          Reiniciar la busqeda
        </button>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="30px">
            {articles.map((article) => {
              return (
                <Card article={article} limitArticlesTag={limitArticlesTag} />
              );
            })}
          </Masonry>
        </ResponsiveMasonry>
        {!articleTag ? (
          <button
            onClick={loadMoreArticles}
            className="bg-red-600 block mx-auto text-white px-4 py-3 rounded-xl mt-8"
          >
            {loading ? "Cargando...." : "Cargar mas articulos"}
          </button>
        ) : (
          <button
            onClick={loadMoreArticles}
            className="bg-red-600 block mx-auto text-white px-4 py-3 rounded-xl mt-8"
          >
            {loading
              ? "Cargando...."
              : `Cargar mas articulos para ${articleTag}`}
          </button>
        )}
      </div>
    </>
  );
}

export default Home;
