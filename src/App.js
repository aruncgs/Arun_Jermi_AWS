import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles.css";
import "./tailwind.css";
import Connexion from "./pages/Connexion/Connexion"; 
import FilmsPage from "./pages/Genres/Films/PageFilms"; 
import Series from "./pages/Genres/Series/PageSeries"; 
import Accueil from "./pages/Accueil/Accueil";
import QCM from "./pages/Divers/Formulaire";
import Evenement from "./pages/Divers/Evenement";


function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Accueil/>} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/films" element={<FilmsPage />} />
          <Route path="/series" element={<Series />} />
          <Route path="/qcm" element={<QCM />} />
          <Route path="/Evenement" element={<Evenement />} />
        </Routes>
        {/* Vous pouvez ajouter plus de sections ou de contenu ici */}
    </Router>
  );
}

export default App;