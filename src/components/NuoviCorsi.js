import { useState, useContext} from "react";
import { useHistory, useLocation } from "react-router-dom";
import { ROTTE } from "../costanti";
import { nodoContext } from "../containers/App";
import { tabellaContext } from "../containers/App";
import styled from "styled-components";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

// import firebase from "firebase";
// import firebaseConfig from "../firebase-config";
// firebase.initializeApp(firebaseConfig);


const NuoviCorsi = () => {
  const nodo = useContext(nodoContext);
  const tabella = useContext(tabellaContext);

  // costanti per gli Hook di Routing
  const listaRottePrecedenti = useHistory();
  const rottaCorrente = useLocation();
  
  const [nomeCorso, setNomeCorso] = useState("");

  const cambiaRotta = (nuovaRotta, nomeCorso) => {
    setNomeCorso(nomeCorso);
    listaRottePrecedenti.push(nuovaRotta);

    console.log(nomeCorso);
  };

  return (
 
      <Contenitore>
        <h2>Ecco le ultime novità</h2>
        {nodo.map((nodo) => {
          if (tabella[nodo].news === "y") {
            return (
             
              <Card className="card">
                <CardHeader
                  title={tabella[nodo].nome}
                  subheader={"Durata: " + tabella[nodo].durata}
                />
                <CardMedia className="card-media" image={tabella[nodo].foto} />
                <CardContent className="programma">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: tabella[nodo].programma,
                    }}
                  ></div>
                </CardContent>
                <div>
                  <button
                    onClick={() =>
                      cambiaRotta(ROTTE.CORSO, tabella[nodo].nomeId)
                    }
                  >
                    Visualizza corso
                  </button>
                </div>
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
