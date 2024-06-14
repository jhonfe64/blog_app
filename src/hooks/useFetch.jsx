import { useEffect, useState } from "react";
const API_KEY = import.meta.env.VITE_API_KEY;

const useFetch = (url, type, trigger, body) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    if (trigger) {
      try {
        if (type === "get") {
          setLoading(true);
          const res = await fetch(url, {
            method: "get",
            headers: {
              "app-id": API_KEY,
            },
          });

          if (!res.ok) {
            const errorData = await res.json();
            setError(errorData);
            throw new Error(`Error en la solicitud: ${res.status}`);
          }
          const data = await res.json();
          if (data) {
            setData(data);
            setLoading(false);
          }
        }
        if (type === "post") {
          setLoading(true);

          const res = await fetch(url, {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
              "app-id": API_KEY,
            },
          });

          if (!res.ok) {
            const errorData = await res.json();
            setError(errorData);
            throw new Error(`Error en la solicitud: ${res.status}`);
          }
          const data = await res.json();
          if (data) {
            setData(data);
            setLoading(false);
          }
        }
      } catch (error) {
        if (error) {
          setError(error);
          setLoading(false);
          console.log("error en la solicitud" + error);
        }
      }
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    fetchData();
    return () => signal.abort;
  }, [url]);

  return {
    data,
    error,
    loading,
  };
};

export default useFetch;
