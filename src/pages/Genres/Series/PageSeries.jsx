import React from "react";
import Header from "../../../components/Header/SeriesHeader";
import Footer from "../../../components/Footer/Footer";
import SearchComponent from "../../../components/NavigationBar/SeriesSearch";
/*import Section from "../../components/MovieList/Section";
import films from "../../components/MovieList/films"*/


function Series() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div className="bg-yellow-600">
          <h1>Page de Séries</h1>
          <SearchComponent />
          {/* Contenu de votre page de connexion */}
        </div>
        <div className="black-section">
          <Footer />
        </div>
      </div>
    );
  }

export default Series;
