import React, { useState } from "react";
import { Link } from "react-router-dom";
import labels from "../messages/labels";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("/");
  console.log(selected);

  const logoStyle = {
    height: "60px",
    width: "100px",
    backgroundColor: "green",
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const phoneNumber = "7582082750";
  const defaultMessage = "hi prateek";

  const handleWhatsappClick = () => {
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      defaultMessage
    )}`;

    window.open(url, "_blank");
  };
  return (
    <div className="px-4 md:px-24 lg:px-32 mx-auto w-100 bg-white-700">
      <nav className="bg-white shadow-y-md">
        <div className="max-w-1xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="flex items-center justify-start">
              <Link
                to={labels.routeLables.home}
                onClick={() => setSelected(labels.routeLables.home)}
              >
                <img
                  src="assets/images/new.png"
                  alt="Nimantran"
                  className="text-gray-500"
                  style={logoStyle}
                />
              </Link>
            </div>

            <div className="flex items-center sm:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-orange-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={toggleMenu}
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6 text-orange-primary"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
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
                  className={`text-gray-700 font-medium hover:text-orange-primary px-2 py-2 rounded-md text-sm font-Vietnam ${
                    selected === "/" ? "text-orange-primary" : ""
                  }`}
                >
                  {labels.navbar.home}
                </Link>
                <Link
                  onClick={() => setSelected(labels.routeLables.about)}
                  to={labels.routeLables.about}
                  className={`text-gray-700 font-medium hover:text-orange-primary px-2 py-2 rounded-md text-sm  font-Vietnam  ${
                    selected === "/about" ? "text-orange-primary " : ""
                  }`}
                >
                  {labels.navbar.about}
                </Link>
                <Link
                  onClick={() => setSelected(labels.routeLables.contact)}
                  to={labels.routeLables.contact}
                  className={`text-gray-700 font-medium hover:text-orange-primary px-2 py-2 rounded-md text-sm font-Vietnam  ${
                    selected === "/contact" ? "text-orange-primary " : ""
                  }`}
                >
                  {labels.navbar.contact}
                </Link>

                <Link
                  onClick={() => setSelected(labels.routeLables.contact)}
                  to={labels.routeLables.contact}
                  className={`text-gray-700 font-medium hover:text-orange-primary px-2 py-2 rounded-md text-sm font-Vietnam  ${
                    selected === "/contact" ? "text-orange-primary " : ""
                  }`}
                ></Link>
              </div>
            </div>
            {/* <SearchBox /> */}
            <Link
              className="hover:border-red-500 hidden sm:block"
              onClick={handleWhatsappClick}
            >
              <svg
                className="w-6 h-6 text-orange-primary` dark:whatapp-green"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="#f97316n"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#f97316"
                  fill-rule="evenodd"
                  d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z"
                  clip-rule="evenodd"
                />
                <path
                  fill="#f97316"
                  d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"
                />
              </svg>
            </Link>
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
              className="text-gray-700 font-medium hover:text-orange-primary block px-3 py-2 rounded-md text-base font-Vietnam "
            >
              {labels.navbar.home}
            </Link>

            <Link
              onClick={() => {
                setIsOpen(!isOpen);
                setSelected(labels.routeLables.about);
              }}
              to={labels.routeLables.about}
              className="text-gray-700 font-medium hover:text-orange-primary block px-3 py-2 rounded-md text-base font-Vietnam "
            >
              {labels.navbar.about}
            </Link>
            <Link
              onClick={() => {
                setIsOpen(!isOpen);
                setSelected(labels.routeLables.contact);
              }}
              to={labels.routeLables.contact}
              className="text-gray-700 font-medium hover:text-orange-primary block px-3 py-2 rounded-md text-base font-Vietnam "
            >
              {labels.navbar.contact}
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
