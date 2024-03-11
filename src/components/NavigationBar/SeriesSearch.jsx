import React, { useState } from "react";
import films from "../MovieList/films"; // Assurez-vous que le chemin est correct

const SearchComponent = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setQuery(query);

    if (query) {
      const allFilms = Object.values(films).flat();
      const filteyellow = allFilms.filter((film) =>
        film.title.toLowerCase().includes(query)
      );
      setResults(filteyellow);
    } else {
      setResults([]);
    }
  };

  const handleFilmClick = (film) => {
    alert(`Film sélectionné : ${film.title}`);
  };

  return (
    <div className="flex flex-col items-center mt-5 relative">
      <input
        type="text"
        placeholder="Recherchez une série..."
        value={query}
        onChange={handleSearch}
        className="p-2.5 w-72 bg-yellow-600 text-white border-2 border-yellow-700 rounded-md text-center focus:outline-none focus:ring-2 focus:ring-yellow-300 hover:bg-yellow-400 transition-colors duration-200 ease-in-out input-placeholder"
      />
      <div className="absolute mt-2 w-80 bg-yellow-700 text-white rounded-lg shadow-lg overflow-hidden z-10 top-full">
        {query && results.length > 0 ? (
          results.map((film) => (
            <div
              key={film.id}
              className="px-4 py-2 hover:bg-yellow-300 hover:text-yellow-700 cursor-pointer transition-colors"
              onClick={() => handleFilmClick(film)}
            >
              {film.title}
            </div>
          ))
        ) : query && (
          <div className="px-4 py-2">
            Aucun film trouvé.
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchComponent;
