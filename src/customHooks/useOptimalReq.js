import { useEffect, useRef,useCallback } from "react"

function debounce(func, timeout = 300){
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
}

const useOptimalReq = (debuncePeriod=300,maxParallelReq=3) => {
  const saveLatestReq = useRef();
  const countRef = useRef(0);

  useEffect(() => {
    if(countRef.current < maxParallelReq && saveLatestReq.current) {
      getDataDebounced(saveLatestReq.current);
      saveLatestReq.current = null;
    }
  })

  const getDataDebounced =  useCallback(debounce(async (fetcher) => {
    if(countRef.current === maxParallelReq) {
      saveLatestReq.current = fetcher
      return;
    }
    countRef.current +=1;
    try {
      await fetcher();
    }catch(e) {
    }finally {
      countRef.current -=1;
    }
  }, debuncePeriod),[])

  return getDataDebounced
}

export default useOptimalReq