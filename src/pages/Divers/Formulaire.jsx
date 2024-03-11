import React from "react";
import { Link } from "react-router-dom";


function QCM() {
  return (
    <div class="relative h-screen w-full flex flex-col items-center justify-center text-center text-white bg-cover bg-center">
      <div class="absolute top-0 right-0 bottom-0 left-0 bg-gray-900 opacity-90"></div>

      <div class="z-10 text-sm">
          WE ARE COMING SOON!
      </div>

      <div class="flex items-end justify-center z-10">
          <div class="m-2 sm:m-5">
              <span class="text-indigo-600 font-bold text-xl sm:text-5xl">7</span>
              <p>Days</p>
          </div>
          <div class="m-2 sm:m-5">
              <span class="text-indigo-600 font-bold text-xl sm:text-5xl">13</span>
              <p>Hours</p>
          </div>
          <div class="m-2 sm:m-5">
              <span class="text-indigo-600 font-bold text-xl sm:text-5xl">47</span>
              <p>Minutes</p>
          </div>
          <div class="m-2 sm:m-5">
              <span class="text-indigo-600 font-bold text-xl sm:text-5xl">20</span>
              <p>Seconds</p>
          </div>
      </div>

      <div class="rounded-md shadow z-10 mt-5">
        <Link to="/">  
          <a href="#"
              class="w-full px-8 py-3 border border-transparent text-base leading-6 font-light rounded-full text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-md md:px-16">
              <span>REVENIR A L'ACCUEIL</span>
          </a>
        </Link>
      </div>

  </div>
  );
}

export default QCM;