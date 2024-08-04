import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBox from "../Components/SearchBox";
import labels from "../messages/labels";

const Navbar = () => {
  const appName = process.env.REACT_APP_NAME;

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("/");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-1xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex items-center justify-start">
            <Link to={labels.routeLables.home}>
              <h1 className="text-2xl md:text-xl lg:text-4xl  font-Raleway text-green-primary font-black">
                {appName && appName}
              </h1>
            </Link>
          </div>

          <div className="flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-green-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="hidden sm:flex sm:items-center sm:ml-6">
            <div className="flex space-x-4">
              <Link
                to={labels.routeLables.home}
                onClick={() => setSelected(labels.routeLables.home)}
                className={`text-gray-700 hover:text-green-primary px-3 py-2 rounded-md text-sm font-medium nav-item nav-link-active ${
                  selected === "/" ? "text-green-primary font-semibold" : ""
                }`}
              >
                {labels.navbar.home}
              </Link>
              <Link
                onClick={() => setSelected(labels.routeLables.shop)}
                to={labels.routeLables.shop}
                className={`text-gray-700 hover:text-green-primary px-3 py-2 rounded-md text-sm font-medium nav-item nav-link-active ${
                  selected === "/shop" ? "text-green-primary font-semibold" : ""
                }`}
              >
                {labels.navbar.shop}
              </Link>
              <Link
                onClick={() => setSelected(labels.routeLables.shopDetails)}
                to={labels.routeLables.shopDetails}
                className={`text-gray-700 hover:text-green-primary px-3 py-2 rounded-md text-sm font-medium nav-item nav-link-active ${
                  selected === "/shop-details"
                    ? "text-green-primary font-semibold"
                    : ""
                }`}
              >
                {labels.navbar.shopDetails}
              </Link>
              <Link
                onClick={() => setSelected(labels.routeLables.pages)}
                to={labels.routeLables.pages}
                className={`text-gray-700 hover:text-green-primary px-3 py-2 rounded-md text-sm font-medium nav-item nav-link-active ${
                  selected === "/pages" ? "text-green-primary font-semibold" : ""
                }`}
              >
                {labels.navbar.pages}
              </Link>
              <Link
                onClick={() => setSelected(labels.routeLables.contact)}
                to={labels.routeLables.contact}
                className={`text-gray-700 hover:text-green-primary px-3 py-2 rounded-md text-sm font-medium nav-item nav-link-active ${
                  selected === "/contact" ? "text-green-primary font-semibold" : ""
                }`}
              >
                {labels.navbar.contact}
              </Link>
            </div>
          </div>
          {/* <SearchBox /> */}
        </div>
      </div>

      <div
        className={`${isOpen ? "block" : "hidden"} sm:hidden`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 border-red-400">
          <Link
            onClick={() => {
              setIsOpen(!isOpen);
              setSelected(labels.routeLables.contact);
            }}
            to={labels.routeLables.home}
            className="text-gray-700 hover:text-green-primary block px-3 py-2 rounded-md text-base font-medium"
          >
            {labels.navbar.home}
          </Link>
          <Link
            onClick={() => {
              setIsOpen(!isOpen);
              setSelected(labels.routeLables.shop);
            }}
            to={labels.routeLables.shop}
            className="text-gray-700 hover:text-green-primary block px-3 py-2 rounded-md text-base font-medium"
          >
            {labels.navbar.shop}
          </Link>
          <Link
            onClick={() => {
              setIsOpen(!isOpen);
              setSelected(labels.routeLables.shopDetails);
            }}
            to={labels.routeLables.shopDetails}
            className="text-gray-700 hover:text-green-primary block px-3 py-2 rounded-md text-base font-medium"
          >
            {labels.navbar.shopDetails}
          </Link>
          <Link
            onClick={() => {
              setIsOpen(!isOpen);
              setSelected(labels.routeLables.pages);
            }}
            to={labels.routeLables.pages}
            className="text-gray-700 hover:text-green-primary block px-3 py-2 rounded-md text-base font-medium"
          >
            {labels.navbar.pages}
          </Link>
          <Link
            onClick={() => {
              setIsOpen(!isOpen);
              setSelected(labels.routeLables.contact);
            }}
            to={labels.routeLables.contact}
            className="text-gray-700 hover:text-green-primary block px-3 py-2 rounded-md text-base font-medium"
          >
            {labels.navbar.contact}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
