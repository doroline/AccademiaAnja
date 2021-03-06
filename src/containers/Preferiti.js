import { useContext } from "react";
import { useHistory, useLocation, Redirect} from "react-router-dom";
import { ROTTE } from "../costanti";
import { corsiContext, UtenteContext } from "../containers/App";
import styled, { keyframes } from "styled-components";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Truncate from "react-truncate";

import { colors } from "../global-styles";

import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";


 
 
const Preferiti = () => {
  const corsi = useContext(corsiContext);
  const contestoUtente = useContext(UtenteContext);

  // costanti per gli Hook di Routing
  const listaRottePrecedenti = useHistory();
  const rottaCorrente = useLocation();

  const cambiaRotta = (nuovaRotta) => {
    listaRottePrecedenti.push(nuovaRotta);
  };

  const corsiPreferiti = corsi?.nodoPrincipale.filter((chiave) => {
    // in questo modo mi ciclo tutte le ricette e vado a verificare se ci sono dei preferiti
    return contestoUtente.isPreferito(chiave); // tramite il metodo isPreferito, verifico se le ricette ciclate, sono tra nel nodo preferiti dell'utente, e se ci sono le assegno alla costante ricettePreferite
  });

  console.log(corsiPreferiti);

  if (!contestoUtente.utente?.loggato) {
    return (
        <Redirect to={ROTTE.LOGIN} />
    )
   }

  return (
 
    
    <Contenitore>
 
      {
        //nodo.slice(0,1).map((nodo) => {
        corsiPreferiti.map((nodo, key) => {
          const gestisciPreferito = (evento) => {
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
            </Card>
          );
        })
      }

      {corsiPreferiti == 0 && 
        <div className="noPreferiti">
           <div>
           Attualmente non ci sono preferiti
           </div>
        </div>
    }
    </Contenitore>
  );
    
};

const Contenitore = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 30px;
  padding-top: 80px;
  justify-content: center;
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
export default Preferiti;
