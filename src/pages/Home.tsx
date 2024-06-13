import React from "react";
import Header from "../components/Header";
import useFetch from "../hooks/useFetch";

function Home() {
  const { data, error, loading } = useFetch("");

  return (
    <div>
      <Header />
      esta es la pagina del home
    </div>
  );
}

export default Home;
