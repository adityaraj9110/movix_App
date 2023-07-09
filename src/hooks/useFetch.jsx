import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";

const useFetch = (baseurl) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async (url) => {
      setLoading("Loading....");
      setData(null);
      setError(null);
      try {
        const res = await fetchDataFromApi(url);
        setLoading(false);
        setData(res);
      } catch (error) {
        setLoading(false);
        setError("Somthing went wrong");
      }
    };
    getData(baseurl);
  }, [baseurl]);

  return { data, loading, error };
};
export default useFetch;
