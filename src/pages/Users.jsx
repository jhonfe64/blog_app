import React from "react";
import useFetch from "../hooks/useFetch";
const BASE_URL = import.meta.env.VITE_API_BASE_URL;
import { Link } from "react-router-dom";
import killSession from "../helpers/killSession";
import Loader from "../components/Loader";

function Users() {
  const { data, loading } = useFetch(
    `${BASE_URL}data/v1/user?limit${20}`,
    "get",
    true
  );

  return (
    <div className="max-w-7xl bg-slate-100 mx-auto py-8 px-12 mt-14 rounded flex justify-between  flex-wrap gap-3">
      <div className="w-full flex mb-6">
        <Link
          to="/"
          className="mr-4 bg-red-600 text-white rounded-lg px-8 py-1.5"
        >
          Regresar
        </Link>
        <button
          onClick={() => killSession()}
          className=" bg-black text-white rounded-lg px-8 py-1.5"
        >
          Salir
        </button>
      </div>
      <div className="w-full">{loading && <Loader />}</div>

      {data?.data?.map((user) => (
        <div key={user.id}>
          <div className="w-40 mb-2">
            <img
              className="w-full rounded-xl bg-slate-300"
              src={user.picture}
              alt={`${user.firstName} ${user.lastName}`}
            />
          </div>
          <h3 className="text-center font-semibold">
            {user.firstName} {user.lastName}
          </h3>
        </div>
      ))}
    </div>
  );
}

export default Users;
