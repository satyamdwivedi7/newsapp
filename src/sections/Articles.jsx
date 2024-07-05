import Card from "../components/Card";
import React, { useState, useEffect } from "react";

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [selectedOption, setSelectedOption] = useState("world");

  useEffect(() => {
    const fetchData = async () => {
      try {
        let query = "";
        if (selectedOption === "india") {
          query = "india";
        } else if (selectedOption === "usa") {
          query = "usa";
        } else {
          query = "world";
        }

        const response = await fetch(
          `https://newsapi.org/v2/everything?q=${query}&from=2024-06-05&sortBy=publishedAt&apiKey=3f80e4ccd6c145cba7fada7c2c6a4e47`,
          { cache: "no-store" }
        );
        const data = await response.json();
        setArticles(data.articles.slice(0, 12)); // Access the articles array directly
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [selectedOption]); // Rerun useEffect when selectedOption changes

  const handleSelectionChange = (event) => {
    setSelectedOption(event.target.value);
  };

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
      <div className="p-2 dropdown text-wrap text-lg  text-gray-500 dark:text-white dark:bg-gray-600">
        <label htmlFor="area">Select News Area: </label>
        <select
          id="area"
          value={selectedOption}
          onChange={handleSelectionChange}
            className="border-none text-white dark:bg-gray-600"
        >
          <option value="world">World</option>
          <option value="india">India</option>
          <option value="usa">USA</option>
        </select>
      </div>
      <div className="flex flex-wrap justify-center mt-4">
        {articles.map((article, index) => (
          <Card
            key={index} // Using index as a key
            title={truncateText(article.title, 12)}
            description={truncateText(article.description, 100)}
            url={article.url}
          />
        ))}
      </div>
    </div>
  );
}
