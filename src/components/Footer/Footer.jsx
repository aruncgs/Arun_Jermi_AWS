// Footer/index.js
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <><div>
      <div className="container h-30 mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Section Logo et Nom */}
        <div className="mb-4 md:mb-0 flex items-center">
          <div>
            <img src={`${process.env.PUBLIC_URL}/images/RondAvecFond.png`} className="h-28 ml-14 mr-10" />
            <br></br>
            <div className="relative">
              <select className="bg-black text-white p-2 rounded cursor-pointer ml-16">
                <option value="fr">Français</option>
                <option value="en">English</option>
              </select>
          </div>
          </div>
          <div className="ml-14 pt-12 justify-center flex flex-col font-bold">
            <p className="mb-3 md:mb-3 md:mx-2 text-gray-500 text-xs" >ENTREPRISE</p>
            <Link to="/A-Propos" className="mb-3 md:mb-3 md:mx-2 hover:underline">À propos</Link>
            <Link to="/Creators" className="mb-3 md:mb-3 md:mx-2 hover:underline">Créateurs</Link>
            <Link to="/privacy-policy" className="mb-3 md:mb-3 md:mx-2 hover:underline">Confidentialité</Link>
            <Link to="/FAQ" className="mb-2 md:mb-3 md:mx-2 hover:underline">FAQ</Link>
            <Link to="/CGU" className="mb-2 md:mb-3 md:mx-2 hover:underline">CGU</Link>
          </div>
          <div className="ml-16 justify-center flex flex-col font-bold mb-14">
            <p className="mb-3 md:mb-3 md:mx-2 text-gray-500 text-xs" >LIENS UTILES</p>
            <Link to="/A-Propos" className="mb-3 md:mb-3 md:mx-2 hover:underline">Support</Link>
            <Link to="/Creators" className="mb-3 md:mb-3 md:mx-2 hover:underline">Contact</Link>
          </div>
          <div className="ml-16 justify-center flex flex-col font-bold mb-5">
            <p className="mb-3 md:mb-3 md:mx-2 text-gray-500 text-xs" >NOUS SUIVRE</p>
            <Link to="Facebook" className="mb-3 md:mb-3 md:mx-2 hover:underline">Facebook</Link>
            <Link to="/Twitter" className="mb-3 md:mb-3 md:mx-2 hover:underline">Twitter</Link>
            <Link to="/Instragram" className="mb-3 md:mb-3 md:mx-2 hover:underline">Instagram</Link>
          </div>
        </div>


        
      </div>
    </div><div>
        <div>
          <footer className="h-15 flex justify-center bg-black text-white text-center p-5 mt-8">
            <p>&copy; {new Date().getFullYear()}, What You Watched. All rights reserved.</p>
          </footer>
        </div>
      </div></>
  );
}

export default Footer;