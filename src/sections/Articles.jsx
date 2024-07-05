import Card from "../components/Card";
import React, { useState, useEffect } from "react";

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState("world");

  const handleClick = (event) => {
    event.preventDefault();
    const searchQuery = document.getElementById("default-search").value;
    setQuery(searchQuery);
    document.getElementById("default-search").value = "";
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=${query}&from=2024-06-05&sortBy=publishedAt&apiKey=3f80e4ccd6c145cba7fada7c2c6a4e47`
        );
        const data = await response.json();
        setArticles(data.articles.slice(0, 12));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (query) {
      fetchData();
    }
  }, [query]);

  const truncateText = (text, wordLimit) => {
    if (!text) return "";
    const words = text.split(" ");
    if (words.length <= wordLimit) {
      return text;
    }
    return words.slice(0, wordLimit).join(" ") + "...";
  };

  return (
    <div>
      <div className="p-2 dropdown text-wrap text-lg text-gray-500 dark:text-white dark:bg-gray-600">
        <form className="max-w-md mx-auto" onSubmit={handleClick}>
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for a keyword"
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <div className="flex flex-wrap justify-center mt-4">
        {articles.map((article, index) => (
          <Card
            key={index}
            title={truncateText(article.title, 12)}
            description={truncateText(article.description, 100)}
            url={article.url}
          />
        ))}
      </div>
    </div>
  );
}
