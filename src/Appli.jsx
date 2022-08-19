import { useState } from 'react';
import './Appli.scss';
import Entete from './Entete';
import ListeProduits from './ListeProduits';
import PiedPage from './PiedPage';

export default function Appli() {
    // React lift state up
    //les props(proprietés) comme argument en passant doit du Parents vers les descendants . Disons que Appli.jsx -> BtnAjoutPanier.jsx , 

  // const etatPanier = useState({});
  // console.log("la variable d'état qui gère le panier : ", etatPanier[0]);
  const [panier, setPanier] = useState({prd001: {}, prd005: {}});

  return (
    <div className="Appli">
      <Entete panier={panier} setPanier={setPanier}/>
      <ListeProduits pa />
      <PiedPage />
    </div>
  );
}



/*
let panier = 
{
    "prd001": {
        "prix": 25.99,
        "qte": 1
    }
}
*/