import React from "react";

function Card({ article }) {
  console.log(article);
  return (
    <div>
      <div>
        <img className="rounded-lg" src={article.image} alt="" />
      </div>
      <h3 className="text-slate-700 mt-2 mb-2 font-semibold">
        {article.owner.firstName}
        {article.owner.lastName}
      </h3>
      <div>
        {article?.tags.map((tag) => {
          return (
            <button className="bg-indigo-400 px-3 rounded-lg py-0.5 text-white p mr-2 text-center">
              {tag}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Card;
