import React from "react";
import "./PaginationComponent.scss";

export const PaginationComponent = ({paginationState, setPaginationState}) => {
  const {page, offset, limit} = paginationState;

  const nextPage = () => {
    setPaginationState({
      page: page + 1,
      offset: offset + limit,
      limit: limit,
    });
  };
  const previousPage = () => {
    setPaginationState({
      page: page + -1,
      offset: offset - limit,
      limit: limit,
    });
  };
  return (
    <>
      <div className="pagination">
        {page > 1 && (
          <div
            className="pagination-previous"
            onClick={() => {
              previousPage();
            }}
          >
            -
          </div>
        )}

        <div className="pagination-current">{page}</div>
        <div
          className="pagination-next"
          onClick={() => {
            nextPage();
          }}
        >
          +
        </div>
      </div>
    </>
  );
};
