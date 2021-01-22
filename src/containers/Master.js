import { useContext, useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { ROTTE } from "../costanti";
import { corsiContext } from "../containers/App";
import styled from "styled-components";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Truncate from "react-truncate";

import { colors } from "../global-styles";

import CardActions from "@material-ui/core/CardActions";
import { UtenteContext } from "../containers/App";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const Master = () => {
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

  const corsi = useContext(corsiContext);
  const contestoUtente = useContext(UtenteContext);

  // costanti per gli Hook di Routing
  const listaRottePrecedenti = useHistory();
  const rottaCorrente = useLocation();

  const cambiaRotta = (nuovaRotta) => {
    listaRottePrecedenti.push(nuovaRotta);
  };

  const [pippo, setPippo] = useState(false);
  const [pluto, setPluto] = useState(11);
  const [testobtn, setTestobtn] = useState("mostra");

  let prova = {
    testo: "mimmo",
  };

  const cambiaPippo = () => {
    if (pippo) {
      setPippo(false);
      setTestobtn("mostra");
      prova.testo = "mimmo2";
    } else {
      setPippo(true);
      setTestobtn("nascondi");
      prova["testo"] = "danilo";
    }
  };

  // useEffect(() => {
  //   setPippo(false);
  //   return () => {
  //     setPippo(true);
  //     console.log(pippo);
  //   }
  // }, [setProva])

  return (
    <Contenitore>
      <h1>I NOSTRI MASTER:</h1>
      {
        //nodo.slice(0,3).map((nodo) => {
        corsi.nodoPrincipale.map((nodo, key) => {
          const gestisciPreferito = (evento) => {
            evento.stopPropagation();
            contestoUtente.togglePreferito(nodo);
          };

          if (corsi.tabella[nodo].master === true) {
            return (
              <Card className="card" id={key}>
                <CardHeader
                  title={corsi.tabella[nodo].nome}
                  subheader={"Durata: " + corsi.tabella[nodo].durata}
                />
                <CardMedia
                  className="card-media"
                  image={corsi.tabella[nodo].foto}
                />
                <CardContent className="programma">
                  <Truncate width="1000">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: corsi.tabella[nodo].programma,
                      }}
                    />
                  </Truncate>
                  <div>
                    <Button
                      onClick={() =>
                        cambiaRotta(ROTTE.DETTAGLIO_CORSO + "/" + nodo)
                      }
                    >
                      Visualizza corso
                    </Button>
                  </div>
                </CardContent>
                {contestoUtente?.utente?.loggato && (
                  <CardActions disableSpacing>
                    <IconButton onClick={(evento) => gestisciPreferito(evento)}>
                      {contestoUtente.isPreferito(nodo) ? (
                        <FavoriteIcon
                          htmlColor={colors.mainOrange}
                          className="cuorePieno"
                        />
                      ) : (
                        <FavoriteBorderIcon
                          htmlColor={colors.mainOrange}
                          className="cuorePieno"
                        />
                      )}
                    </IconButton>
                  </CardActions>
                )}
                {!contestoUtente?.utente?.loggato && (
                  <div className="contenitoreBtnFalso">
                    <div
                      className="preferitiFalso"
                      onClick={() => gestisciFrase()}
                    >
                      <FavoriteBorderIcon
                        htmlColor={colors.mainOrange}
                        className="cuoreFinto"
                      />
                    </div>
                    <div className="frase">{frase}</div>
                  </div>
                )}
              </Card>
            );
          } else {
            return null;
          }
        })
      }
    </Contenitore>
  );
};

const Contenitore = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 30px;
  h1 {
    display: block;
    width: 100%;
    text-align: center;
  }
  h2 {
    width: 100%;
    text-align: center;
    color: #4d7ae0;
  }
  .card {
    width: 350px;
    margin: 20px;
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
`;
export default Master;
