import React, { useState, useEffect } from "react";
import useGetReq from "../../customHooks/useGetReq";

const LoadTiles = () => {
  const [albums, setAlbums] = useState([]);
  const [getData, cancelRequests] = useGetReq();

  useEffect(() => {
    getData("https://jsonplaceholder.typicode.com/albums", setAlbums);

    return cancelRequests;
  }, []);

  return (
    <div className="bg-secondary">
      {albums &&
        albums.map((item) => (
          <div key={item.id} className="p-3 text-bold">
            {item.title}
          </div>
        ))}
    </div>
  );
};

export default LoadTiles;
