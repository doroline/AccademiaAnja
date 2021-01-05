import { useContext,useEffect, useState } from "react";
import firebase from "firebase";
import firebaseConfig from "../firebase-config";
import { useHistory, useLocation } from "react-router-dom";
import { ROTTE } from "../costanti";
//import { nodoContext } from "./App";
//import { tabellaContext } from "./App";
import styled from "styled-components";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

// import firebase from "firebase";
// import firebaseConfig from "../firebase-config";
// firebase.initializeApp(firebaseConfig);

const Corso = () => {
  //const nodo = useContext(nodoContext);
  //const tabella = useContext(tabellaContext);
  const [nodo, setNodo] = useState([]);
  const [tabella, setTabella] = useState({});

  useEffect(() => {
    const riferimentoTabella = firebase.database().ref("/corsi");
    riferimentoTabella.on("value", (tabellaDb) => {
      const tabFirebase = tabellaDb.val();
      const chiavi = Object.keys(tabFirebase); // creo una var "chiavi" e la riempio grazie all'Object.key con le chiavi, i nodi, principali della tabella del db definendola come se fosse un array ogni chiave

      if (tabFirebase) {
        // è un if che controlla se ci sono dati nella tabella
        setTabella(tabFirebase); // assegno all'oggetto "tabella" tutti i valori della tabella del db
        setNodo(chiavi); // assegno all'array "nodo" solo i valori dei nodi principali sotto forma di array
       
      }
    });
  }, []);


  // costanti per gli Hook di Routing
  const listaRottePrecedenti = useHistory();
  const rottaCorrente = useLocation();

  const cambiaRotta = (nuovaRotta) => {
    listaRottePrecedenti.push(nuovaRotta);
  };

  return (
    <Contenitore>
    <h2>ecco il corso che hai scelto</h2>
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
                <div
                  dangerouslySetInnerHTML={{ __html: tabella[nodo].programma }}
                ></div>
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
