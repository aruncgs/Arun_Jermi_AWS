import React from "react";
import Header from "../../../components/Header/MovieHeader";
import Footer from "../../../components/Footer/Footer";
import SearchComponent from "../../../components/NavigationBar/MovieSearch";
/*import Section from "../../components/MovieList/Section";
import films from "../../components/MovieList/films"*/


function FilmsPage() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div className="bg-red-700">
          <h1>Page de Films</h1>
          <SearchComponent />
          {/* Contenu de votre page de connexion */}
        </div>
        <div className="black-section">
          <Footer />
        </div>
      </div>
    );
  }

export default FilmsPage;
