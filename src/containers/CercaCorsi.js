import { useContext, useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { corsiContext, UtenteContext } from "./App";
import { colors, breakpoints } from "../global-styles";
import MiniaturaCorso from "../components/MiniaturaCorso";
import SearchIcon from "@material-ui/icons/Search";
import { ROTTE } from "../costanti";

import styled, { keyframes } from "styled-components";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Truncate from "react-truncate";

import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

import { normalizzaCorsi, filtra } from "../utils/filtri";

const Corso = () => {
  const contestoUtente = useContext(UtenteContext);
  const corsiContesto = useContext(corsiContext);
  const { tabella } = corsiContesto;

  const [corsiNormalizzateArray, setCorsiNormalizzateArray] = useState([]);
  const [corsiFiltrati, setCorsiFiltrati] = useState([]);
  const [barraRicercaInput, setbarraRicercaInput] = useState(null);

  const [buttonCerca, setButtonCerca] = useState(null);
  const [visualizza, setVisualizza] = useState(false);

  const onChangeBarraRicerca = (evento) => {
    setbarraRicercaInput(evento.target.value);
  };

  const pulsantePremuto = () => {
    setButtonCerca(barraRicercaInput);
    setVisualizza(true);
  };

  useEffect(() => {
    const newCorsiNormalizzate = normalizzaCorsi(tabella);
    setCorsiNormalizzateArray(newCorsiNormalizzate);
    setCorsiFiltrati(newCorsiNormalizzate);
  }, [tabella]);

  useEffect(() => {
    if (barraRicercaInput) {
      const newCorsiFiltrati = filtra(
        barraRicercaInput,
        corsiNormalizzateArray
      ); // cosi facendo passo al metodo filtra quello che verrà scritto nella barra di ricerca e tutte le ricette normalizzate, e l'assegno a newRicetteFiltrate
      setCorsiFiltrati(newCorsiFiltrati); // imposto setRicetteFiltrate con quello che dice il filtraggio
    }
  }, [buttonCerca]);

  const [mostraFrase, setMostraFrase] = useState(false);
  const [frase, setFrase] = useState("");
  const gestisciFrase = () => {
    if (mostraFrase) {
      setFrase("");
      setMostraFrase(false);
    } else {
      setFrase("per usare i preferiti devi essere loggato!");
      setMostraFrase(true);
    }
  };
  // costanti per gli Hook di Routing
  const listaRottePrecedenti = useHistory();
  const rottaCorrente = useLocation();

  const cambiaRotta = (nuovaRotta) => {
    listaRottePrecedenti.push(nuovaRotta);
  };

  return (
    <Contenitore>
      <div className="searchbar-container">
        <div className="search-icon-wrapper">
          <SearchIcon />
        </div>
        <input
          type="text"
          className="search-field"
          id="addInput"
          placeholder="Cerca un corso"
          onChange={(evento) => onChangeBarraRicerca(evento)}
        />
        <button onClick={() => pulsantePremuto()}>Cerca</button>
      </div>
      {visualizza &&
        corsiFiltrati.map((corsoNormalizzato) => (
          <MiniaturaCorso
            chiave={corsoNormalizzato.id}
            key={corsoNormalizzato.id}
            nome={corsiContesto.tabella[corsoNormalizzato.id].nome}
            foto={corsiContesto.tabella[corsoNormalizzato.id].foto}
            prezzo={corsiContesto.tabella[corsoNormalizzato.id]?.prezzo}
            durata={corsiContesto.tabella[corsoNormalizzato.id].durata}
            programma={corsiContesto.tabella[corsoNormalizzato.id].programma}
          />
        ))}

      {corsiFiltrati.length === 0 && (
        <div>Mi spiace non ci sono corsi che rispecchiano la tua ricerca</div>
      )}
    </Contenitore>
  );
};

const Contenitore = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 30px;
  padding-top: 80px;
  justify-content: center;
  margin-bottom: 30px;
  .card {
    width: 100%;
    margin-bottom: 30px;
  }
  .card-media {
    height: 0;
    padding-top: 56.25%;
  }
  .programma {
    text-align: left;
    font-size: 14px;
    color: grey;
  }
  .pagination {
    display: flex;
    justify-content: center;
  }
  .searchbar-container {
    background-color: #eeeeee;
    max-width: 500px;
    display: flex;
    padding: 8px 12px;
    border-radius: 4px;
    margin: 20px auto;
    .search-icon-wrapper {
      display: inline-flex;
    }
    .search-field {
      display: inline-flex;
      border: none;
      width: 88%;
      background: transparent;
      margin-left: 20px;
    }
  }
  .search-container {
    width: 100%;
    display: flex;
    padding: 20px 0px;
    justify-content: space-between;
    flex-direction: column;
    @media only screen and (min-width: ${breakpoints.screenMobBig}) {
      width: 100%;
      flex-direction: row;
    }
    .search-fields-container {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      margin-bottom: 45px;
      @media only screen and (min-width: ${breakpoints.screenMobBig}) {
        flex-wrap: nowrap;
        flex-direction: column;
        width: 20%;
        max-width: 300px;
        margin-bottom: 0px;
      }
      .search-fields-accordion-container {
        width: 100%;
        .MuiAccordionDetails-root {
          display: block;
          padding: 0;
        }
        .MuiAccordionSummary-content {
          margin: 0px;
        }
        .MuiAccordionSummary-root {
          padding: 0px;
          min-height: 30px;
        }
        .search-fields-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 15px;
          margin-top: 15px;
          width: 100%;
          .search-fields-title {
            font-weight: bold;
          }
          .search-fields-clear-btn {
            color: ${colors.mainRed};
            font-size: 11px;
            cursor: pointer;
          }
        }
        fieldset {
          margin-top: 20px;
          width: 100%;
          @media only screen and (min-width: ${breakpoints.screenMobMid}) {
            width: 33%;
          }
          @media only screen and (min-width: ${breakpoints.screenMobBig}) {
            width: 100%;
          }
          .Mui-focused {
            color: ${colors.mainRed};
          }
          .Mui-checked {
            color: ${colors.mainRed};
          }
        }
      }
    }
    .search-results-container {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      align-items: center;
      flex-wrap: wrap;
      width: 100%;
      @media only screen and (min-width: ${breakpoints.screenMobMid}) {
        width: 100%;
      }
      @media only screen and (min-width: ${breakpoints.screenMobBig}) {
        width: 80%;
        flex-direction: row;
        align-items: flex-start;
        padding-left: 8%;
      }
      .recipe-preview-container {
        width: 100%;
        margin-bottom: 45px;
        @media only screen and (min-width: ${breakpoints.screenMobMid}) {
          width: 100%;
        }
        @media only screen and (min-width: ${breakpoints.screenMobBig}) {
          width: 40%;
          margin: 20px;
        }
        .recipe-preview-wrapper {
          margin: 0 auto;
        }
      }
    }
  }
`;
export default Corso;
