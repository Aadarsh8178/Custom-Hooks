import { useEffect } from "react";
import usePagination from "../../customHooks/usePagination";
import { apiCall } from "./api";

const PaginationExample = () => {
  const { data, startPagination, parentContainer, Loader } = usePagination(
    apiCall,
    10
  );

  useEffect(() => {
    startPagination();
  }, [startPagination]);

  return (
    <div className="container bg-light">
      <div
        className="row p-3"
        style={{ height: "80vh", overflowY: "scroll" }}
        ref={parentContainer}
      >
        {data &&
          data.map((item) => (
            <div
              className="col-6 mb-3"
              style={{ height: "300px" }}
              key={item._id}
            >
              <div className="card p-3 bg-info h-100">
                <p>{item.name}</p>
                <p>{item.trips}</p>
              </div>
            </div>
          ))}
        <Loader />
      </div>
    </div>
  );
};

export default PaginationExample;
