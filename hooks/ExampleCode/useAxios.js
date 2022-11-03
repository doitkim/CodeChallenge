import defaultAxios from "axios";
import { useState, useEffect } from "react";

const useAxios = (opts, axiosInstance = defaultAxios) => {
  const [state, setstate] = useState({
    loading: true,
    error: null,
    data: null,
  });

  useEffect(() => {
    if (!opts.url) {
      return;
    }
  }, []);
  return state;
};

export default useAxios;
