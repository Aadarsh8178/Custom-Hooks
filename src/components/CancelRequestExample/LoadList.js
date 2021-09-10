import React, { useEffect, useState } from "react";
import useGetReq from "../../customHooks/useGetReq";

const LoadPostAndComments = () => {
  const [comments, setComments] = useState([]);
  const [posts, setPosts] = useState([]);
  const [getData, cancelRequests] = useGetReq();

  useEffect(() => {
    getData("https://jsonplaceholder.typicode.com/posts", setPosts);
    getData("https://jsonplaceholder.typicode.com/comments", setComments);

    return cancelRequests;
  }, []);
  return (
    <div className="bg-info">
      {comments &&
        comments.map((item) => (
          <div key={item.id} className="p-3 text-bold">
            {item.name}
          </div>
        ))}
      <br />
      {posts &&
        posts.map((item) => {
          <div key={item.id} className="p-3 text-bold">
            {item.title}
          </div>;
        })}
    </div>
  );
};

export default LoadPostAndComments;
