import { useState, useEffect } from "react";
import styled from "styled-components";
import NuoviCorsi from "../components/NuoviCorsi";

const Home = () => {
  return (
    <Contenitore>
    <h1 className="titoloHome">Accademia Anja</h1>
    <h2 className="sottotitoloHome">Corsi di formazione: Master Web, Master Grafica e Corsi Web a Roma dal 1999</h2>
    <p className="introAccademia">
    Ci occupiamo di formazione professionale nell'ambito dell'informatica <strong>da oltre 20 anni</strong>.
Cosa intendiamo per: Corsi Informatica? Che eroghiamo Corsi professionalizzanti, indirizzati, quindi, ha chi già possiede una buona conoscenza di base sull'utilizzo del Computer.
Nei nostri Master di Grafica e nei Master Web, ci sono 1, 2, o anche 3 Certificazioni valevoli a livello internazionale in omaggio!
Scopri per quali Master e' attiva questa promozione.
    </p>
      <NuoviCorsi />
    </Contenitore>
  );
};

const Contenitore = styled.div`
display: flex;
    flex-wrap: wrap;
    padding: 50px;
    justify-content: center;
    .titoloHome{
      color: #5294ce;
    margin-bottom: 0px;
    }
    .sottotitoloHome{
      color: grey;
    text-align: center;
    font-size: 21px;
    margin-top: 3px;
    }
    .introAccademia{
      font-size: 16px;
    text-align: justify;
    color: #757575;
    }
`

export default Home;
