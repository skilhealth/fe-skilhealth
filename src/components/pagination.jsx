import React from "react";
import PropTypes from "prop-types";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="flex mt-4">
      <nav>
        <ul className="pagination flex space-x-2">
          {pageNumbers.map((number) => (
            <li key={number}>
              <button
                className={`${
                  currentPage === number ? "bg-red-700 text-white" : "bg-white text-red-700 border-red-700 border"
                } py-2 px-4 rounded focus:outline-none`}
                onClick={() => onPageChange(number)}
              >
                {number}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
