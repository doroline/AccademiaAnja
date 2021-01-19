import { useState, useContext } from "react";
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

import { colors } from '../global-styles';

import CardActions from "@material-ui/core/CardActions";
import { UtenteContext } from "../containers/App";
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';


const NuoviCorsi = () => {
  const corsi = useContext(corsiContext);

  // costanti per gli Hook di Routing
  const listaRottePrecedenti = useHistory();
  const rottaCorrente = useLocation();
  const contestoUtente = useContext(UtenteContext);

  const cambiaRotta = (nuovaRotta) => {
    listaRottePrecedenti.push(nuovaRotta);
  };

 console.log(corsi.tabella)
  return (
    <Contenitore>
      <h2>Ecco le ultime novità</h2>
      {corsi.nodoPrincipale.map((nodo, key) => {
        if (corsi.tabella[nodo].news === "y") {

          const gestisciPreferito = (evento) =>{
    evento.stopPropagation();
    contestoUtente.togglePreferito(nodo);
  };
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
                <Truncate lines={3} ellipsis={<span>...</span>}>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: corsi.tabella[nodo].programma,
                    }}
                  ></div>
                </Truncate>
              </CardContent>
              <div>
                <Button
                  onClick={() =>
                    cambiaRotta(ROTTE.DETTAGLIO_CORSO + "/" + nodo)
                  }
                >
                  Visualizza corso
                </Button>
              </div>
              {contestoUtente?.utente?.loggato && (
                <CardActions disableSpacing>
                  <IconButton onClick={(evento) => gestisciPreferito(evento)}>
                    {contestoUtente.isPreferito(nodo) ? (
                      <FavoriteIcon htmlColor={colors.mainOrange} />
                    ) : (
                      <FavoriteBorderIcon htmlColor={colors.mainOrange} />
                    )}
                  </IconButton>
                </CardActions>
              )}
            </Card>
          );
        }
      })}
    </Contenitore>
  );
};

const Contenitore = styled.div`
  padding: 10px;
  .card {
    width: 350px;
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
export default NuoviCorsi;
