import React, { useContext, useState, useEffect } from "react";
import { ArticleContext } from "../context/ArticlesContext";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

function Card({ article, type = false, limitArticlesTag }) {
  const [tagName, setTagname] = useState("");
  const [trigger, setTrigger] = useState(false);
  const { updateArticlesList, setArticleTag } = useContext(ArticleContext);
  const [articlesByTag, setArtclesByTag] = useState(0);

  const { data } = useFetch(
    `${BASE_URL}data/v1/tag/${tagName}/post?limit=${limitArticlesTag}`,
    "get",
    trigger
  );

  useEffect(() => {
    setArtclesByTag(articlesByTag + 5);
  }, [limitArticlesTag]);

  useEffect(() => {
    if (data !== null) {
      updateArticlesList(data.data);
    }
  }, [data]);

  const handleTag = (tag) => {
    setTrigger(true);
    setTagname(tag);
    setArticleTag(tag);
  };

  return (
    <div>
      <Link to={`/article/${article.id}`}>
        <div className="bg-slate-300">
          <img className="rounded-lg" src={article.image} alt="" />
        </div>
        <h3 className="text-slate-700 mt-2 mb-2 font-semibold">
          {article?.owner.firstName}
          {article?.owner.lastName}
        </h3>
      </Link>
      {type ? (
        ""
      ) : (
        <div>
          {article?.tags.map((tag) => {
            return (
              <button
                onClick={() => handleTag(tag)}
                className="bg-black px-3 rounded-lg py-0.5 text-white p mr-2 text-center"
              >
                {tag}
              </button>
            );
          })}
        </div>
      )}
      {type && <p>{article.text}</p>}
    </div>
  );
}

export default Card;
