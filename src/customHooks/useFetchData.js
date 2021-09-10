import { useState } from "react";
import axios from "axios";

const useFetchData = (cancelToken, path, onComplete, onError, reqParams) => {
  const [data, setData] = useState();
  const [error, setError] = useState();

  axios
    .get(path, {
      cancelToken: cancelToken.token,
      ...reqParams,
    })
    .then((res) => {
      if (onComplete) onComplete(res.data);
      setData(res.data);
    })
    .catch((err) => {
      if (onError) onError(err);
      setError(err);
    });

  return [data, error];
};

export default useFetchData;
