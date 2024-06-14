import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import useFetch from "../hooks/useFetch";
import Card from "../components/Card";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

function Home() {
  const [articles, setArticles] = useState([]);

  const { data, error, loading } = useFetch(
    `${BASE_URL}data/v1/post?limit${20}`,
    "get"
  );

  useEffect(() => {
    if (data !== null) {
      setArticles(data?.data);
    }
  }, [data]);

  return (
    <>
      <Header />
      <div className="max-w-7xl bg-slate-100 mx-auto py-8 px-12 mt-14 rounded">
        <h1 className="font-bold text-4xl mb-12">Ultimas noticias</h1>
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
