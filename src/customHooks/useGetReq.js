import axios from "axios";

const useGetReq = () => {
  const cancelToken = axios.CancelToken.source();
  const getData = (path, onComplete, onError, reqParams) => {
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
  };

  const cancelRequests = () => {
    if (cancelToken) {
      cancelToken.cancel();
    }
  };

  return [getData, cancelRequests];
};

export default useGetReq;
