// HomePage.js

import React from "react";


const HomePage = () => {
  return (
    <>
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="max-w-4xl bg-white p-8 rounded-lg shadow-lg flex items-center">
          <div className="flex-1">
            <h1 className="text-4xl font-bold">NewsApp</h1>
            <p className="text-lg mt-4">
              Your go-to source for the latest news and updates.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <img
              src="https://secondary.oslis.org/learn-to-research/plan/plan-possible-sources/images-for-plan-possible-sources/newspaper/@@images/image.jpeg"
              alt="Newspaper"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>
      <div id="articles" className="w-[100%] h-[6.5rem]"></div>
    </>
  );
}

export default HomePage;
