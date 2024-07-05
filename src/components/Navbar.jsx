import { FaNewspaper } from "react-icons/fa6";
import { useState } from "react";
export default function Navbar() {
  const [selectedOption, setSelectedOption] = useState("world");

  const handleSelectionChange = (event) => {
    setSelectedOption(event.target.value);
    console.log(selectedOption);
  };
  return (
    <>
      <nav
        className="fixed w-[100%] bg-white border-gray-200 dark:bg-gray-900"
      >
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a
            href="https://satyamdwivedi.com.np"
            target="_blank"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <div className="text-white">
              <FaNewspaper size={32} />
            </div>
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              NewsApp
            </span>
          </a>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <a
              href="tel:+91-9800000001"
              className="text-sm  text-gray-500 dark:text-white hover:underline"
            >
              +91-9800000001
            </a>
            <a
              href="#"
              className="text-sm  text-blue-600 dark:text-blue-500 hover:underline"
            >
              Login
            </a>
          </div>
        </div>
      </nav>
      <nav className="fixed mt-16 w-[100%] bg-gray-50 dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-900 dark:text-white hover:underline"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#articles"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Articles
                </a>
              </li>
              <li>
                <a
                  href="#contacts"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Contacts
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Features
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
