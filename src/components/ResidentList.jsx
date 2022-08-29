import axios from "axios";
import React, { useState } from "react";
import ResidentInfo from "./ResidentInfo";

const ResidentList = ({ location }) => {
  console.log(location);
  const [page, setPage] = useState(1);
  const lastIndex = page * 20;
  const firstIndex = lastIndex - 20;
  const paginacion = location.residents?.slice(firstIndex, lastIndex);
  const lastPage = Math.ceil(location.residents?.length / 20);

  const numbers = []; // [1, 2, 3, 4]
  for (let i = page - 3; i <= page + 3; i++) {
    if (i > 0 && i <= lastPage) {
      numbers.push(i);
    }
  }
  return (
    <div className="ResidentList">
      <div className=" childResidentList">
        {paginacion?.map((url) => (
          <ResidentInfo url={url} key={url} />
        ))}
      </div>
      <div className="pagination">
        <a href="#">
          <button
            className="burronPagination"
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
          >
            Prev
          </button>
        </a>
        {numbers.map((number) => (
          <a href="#">
            <button
              key={number}
              className="buttonNumbersPagination"
              onClick={() => setPage(number)}
            >
              {number}
            </button>
          </a>
        ))}
        <a href="#">
          <button
            className="burronPagination"
            onClick={() => setPage(page + 1)}
            disabled={page === lastPage}
          >
            Next
          </button>
        </a>
      </div>
    </div>
  );
};

export default ResidentList;
