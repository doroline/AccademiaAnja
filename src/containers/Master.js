import { useContext, useState,useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { ROTTE } from "../costanti";
import { nodoContext } from "./App";
import { tabellaContext } from "./App";
import styled from "styled-components";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

// import firebase from "firebase";
// import firebaseConfig from "../firebase-config";
// firebase.initializeApp(firebaseConfig);

const Master = () => {
  const nodo = useContext(nodoContext);
  const tabella = useContext(tabellaContext);

  // costanti per gli Hook di Routing
  const listaRottePrecedenti = useHistory();
  const rottaCorrente = useLocation();

  const cambiaRotta = (nuovaRotta) => {
    listaRottePrecedenti.push(nuovaRotta);
  };

  const [pippo, setPippo] = useState(false);
  const [testobtn, setTestobtn] = useState('mostra');

  let prova = {
    testo:'mimmo'
  };
  
  const cambiaPippo=()=>{
    if(pippo){
      setPippo(false);
      setTestobtn('mostra');
      prova.testo='mimmo2';
    }else{
      setPippo(true);
      setTestobtn('nascondi');
      prova['testo']='danilo';
    }
  }

 

  // useEffect(() => {
  //   setPippo(false);
  //   return () => {
  //     setPippo(true);
  //     console.log(pippo);
  //   }
  // }, [setProva])


  return (
    <Contenitore>
      <h2>I nostri Masterrr:</h2>
      {
        //nodo.slice(0,1).map((nodo) => {
        nodo.map((nodo) => {
          if (tabella[nodo].master === true) {
            return (
              <Card className="card">
                <CardHeader
                  title={tabella[nodo].nome}
                  subheader={"Durata: " + tabella[nodo].durata}
                />
                Prezzo {tabella[nodo].prezzo}
                <CardMedia className="card-media" image={tabella[nodo].foto} />
                <CardContent className="programma">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: tabella[nodo].programma,
                    }}
                  ></div>
                </CardContent>
              </Card>
            );
          } else {
            return null;
          }
        })
      }
      {pippo && <h1>ecco un testo condizionato da un specie di if usando </h1>}
      {console.log(pippo)}
      <div>
      {pippo === true ? 'il valore di pippo è: TRUE':'il valore di pippo è: FALSE'}
      </div>
      <button onClick={() =>cambiaPippo()}>{testobtn}</button>
      {prova.testo}
      {console.log(prova)}
    </Contenitore>
  );
};

const Contenitore = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 50px;
  justify-content: center;
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
