import axios from "axios";
import { useCallback } from "react";

const useGetReq = () => {
  const cancelToken = axios.CancelToken.source();
  const getData = useCallback((path, onComplete, onError, reqParams) => {
    return new Promise((resolve, reject) => {
      axios
        .get(path, {
          cancelToken: cancelToken.token,
          ...reqParams,
        })
        .then((res) => {
          if (onComplete) onComplete(res.data);
          resolve(res);
        })
        .catch((err) => {
          if (onError) onError(err);
          reject(err);
        });
    });
  },[cancelToken.token]);

  const cancelRequests = () => {
    if (cancelToken) {
      cancelToken.cancel();
    }
  };

  return [getData, cancelRequests];
};

export default useGetReq;
