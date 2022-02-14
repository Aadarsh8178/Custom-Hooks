import React,{useState} from 'react'
import useOptimalReq from '../../customHooks/useOptimalReq'
import { useEffect } from 'react';
import { apiCall } from './api';

const OptimalReqExample = () => {
  const [page,setPage] = useState(1);
  const getData = useOptimalReq(500,5);
  const [data,setData] = useState();

  useEffect(() => {
    getData(async () => {
      let data = await apiCall(page,1000);
      setData(data);
    })
  },[page,getData])
  
  return (
    <div>
      <p>Page No. {page}</p>
      <button onClick={() => setPage(p => p+1)}> Inc </button>
      <button onClick={()=>setPage(p => p-1)}> Dec </button>

      <p>Current fetched page : {data}</p>
    </div>
  )
}

export default OptimalReqExample