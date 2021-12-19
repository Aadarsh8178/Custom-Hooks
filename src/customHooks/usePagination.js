import { useState, useEffect, useCallback, useRef } from "react";

const usePagination = (apiCall, pageSize) => {
  const [pageNum, setPageNum] = useState(0);
  const [loading, setLoading] = useState();
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [pageEnd, setPageEnd] = useState(false);
  const observerRef = useRef();
  const parentContainer = useRef();
  const loader = useRef();
  const loaderElement = useRef(() => <div ref={loader}></div>);

  useEffect(() => {
    if (pageNum) {
      (async () => {
        setLoading(true);
        try {
          let data = await apiCall(pageNum, pageSize);
          if(!Array.isArray(data)) {
            throw Error('Fetcher should always return an array !!')
          }
          if (data.length < pageSize) {
            setPageEnd(true);
            observerRef.current.disconnect();
          }
          setData((p) => {
            if (!p) {
              return data;
            }
            return [...p, ...data];
          });
        } catch (e) {
          console.error(e);
          setError(e);
        } finally {
          setLoading(false);
        }
      })();
    }
  }, [pageNum, pageSize, apiCall]);
  useEffect(() => {
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);
  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setPageNum((prev) => prev + 1);
    }
  }, []);

  const startPagination = useCallback(() => {
    const option = {
      root: parentContainer.current || null,
      rootMargin: "20px",
      threshold: 1,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
    observerRef.current = observer;
  }, [handleObserver]);

  return {
    loading,
    data,
    error,
    startPagination,
    pageEnd,
    parentContainer,
    Loader: loaderElement.current,
  };
};

export default usePagination
