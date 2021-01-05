import { useContext } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { ROTTE } from "../costanti";
import { nodoContext } from "../containers/App";
import { tabellaContext } from "../containers/App";
import styled, { keyframes } from "styled-components";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Button from '@material-ui/core/Button';
import Truncate from 'react-truncate';

// import firebase from "firebase";
// import firebaseConfig from "../firebase-config";
// firebase.initializeApp(firebaseConfig);

const Corso = () => {
  const nodo = useContext(nodoContext);
  const tabella = useContext(tabellaContext);

  // costanti per gli Hook di Routing
  const listaRottePrecedenti = useHistory();
  const rottaCorrente = useLocation();

  const cambiaRotta = (nuovaRotta) => {
    listaRottePrecedenti.push(nuovaRotta);
  };

  return (
    <Contenitore>
      {
        //nodo.slice(0,1).map((nodo) => {
        nodo.map((nodo, key) => {
          return (
            <Card className="card" id={key}>
              <CardHeader
                title={tabella[nodo].nome}
                subheader={"Durata: " + tabella[nodo].durata}
              />
             
              <CardMedia className="card-media" image={tabella[nodo].foto} />
              <CardContent className="programma">
              <Truncate lines={3} ellipsis={<span>...</span>}>
                <div
                    dangerouslySetInnerHTML={{
                      __html: tabella[nodo].programma,
                    }}
                  ></div>
            </Truncate>
            <div>
                  <Button
                    onClick={() =>
                      cambiaRotta(ROTTE.CORSO, tabella[nodo].nomeId)
                    }
                  >
                    Visualizza corso
                  </Button>
                </div>
                </CardContent>
            </Card>
          );
        })
      }
    </Contenitore>
  );
};

const Contenitore = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 30px;
  padding-top:80px;
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
export default Corso;
