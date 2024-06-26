import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

function ArticleDetailed() {
  const params = useParams();
  const [trigger, setTrigger] = useState(true);
  const [article, setArticle] = useState({
    id: "",
    image: "",
    likes: 0,
    owner: {
      firstName: "",
      id: "",
      lastName: "",
      picture: "",
      title: "",
    },
    publishDate: "",
    tags: [],
    text: "",
  });
  const { id } = params;

  const { data, error, loading } = useFetch(
    `${BASE_URL}data/v1/post/${id}`,
    "get",
    trigger
  );

  useEffect(() => {
    if (data !== null) {
      setArticle(data);
    }
  }, [data]);

  return (
    <div className="max-w-7xl bg-slate-100 mx-auto py-8 px-12 mt-14 rounded">
      <Card article={article} type={true} />

      <Link
        to="/"
        className="inline-block mt-2 bg-red-600 text-white rounded-lg px-8 py-1.5"
      >
        Regresar
      </Link>
    </div>
  );
}

export default ArticleDetailed;
