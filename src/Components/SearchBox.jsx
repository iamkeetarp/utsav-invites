import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBox = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex border border-gray-300 rounded-full overflow-hidden">
        <div className="flex items-center justify-center ps-3  border-gray-300">
          <FaSearch className="text-gray-400" />
        </div>
        <input
          type="text"
          className="px-4 py-1.5 w-32 md:w-36 lg:w-64 focus:outline-none text-gray-500"
          placeholder="Search..."
        />
      </div>
    </div>
  );
};

export default SearchBox;
