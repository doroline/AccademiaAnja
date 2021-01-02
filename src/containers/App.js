import { useState, useEffect, createContext } from "react";
import Button from '@material-ui/core/Button';
import Home from "./Home";
import Corsi from "./Corsi";
import Corso from "./Corso";
import Master from "./Master";
import Contatti from "./Contatti";
import Footer from "../components/Footer";
import PrimoAccesso from './PrimoAccesso';
import Logo from "../img/logo.jpg";

// importiamo gli elementi di material ui che ci occorrono : il menu vero e proprio e gli elementi list, list item e list text per stilizzare i bottoni che avremo nel menu
import Menu from "../components/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import CircularProgress from "@material-ui/core/CircularProgress";

import styled from "styled-components";
import firebase from "firebase";
import firebaseConfig from "../firebase-config";

import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";

import { ROTTE } from "../costanti";

firebase.initializeApp(firebaseConfig);

function onUtenteLoggato(utenteLoggatoCallBack) {
  // eseguirà questo codice del return, interno al metodo, quando l'utente si sarà loggato o sloggato
  return firebase.auth().onAuthStateChanged((utenteParametro) => {
    if (utenteParametro) {
      // così vuol dire che è loggato
      console.log("utenteParametro: ", utenteParametro); // cosi possiamo vedere quali dati ci passa google
      utenteLoggatoCallBack({
        loggato: true,
        nome: utenteParametro.displayName,
        email: utenteParametro.email,
        foto: utenteParametro.photoURL,
        uid: utenteParametro.uid,
      });
    } else {
      utenteLoggatoCallBack({
        loggato: false,
      });
    }
  });
}

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

const loggatiConGoogle = () => {
  auth.signInWithPopup(provider);
};

const logout = () => {
  firebase.auth().signOut();
};

export const nodoContext = createContext();
export const tabellaContext = createContext();
export const primoaccContext = createContext();

function App() {
  const [accesso, setAccesso] = useState(false);

  const [nodo, setNodo] = useState([]); // qui definisco l'array che conterrà tutti i nodi principali trasformati in array
  const [tabella, setTabella] = useState({}); // qui creo un oggetto che si riempirà con tutti i valori della tabella del db

  useEffect(() => {
    const riferimentoTabella = firebase.database().ref("/corsi");
    riferimentoTabella.on("value", (tabellaDb) => {
      const tabFirebase = tabellaDb.val();
      const chiavi = Object.keys(tabFirebase); // creo una var "chiavi" e la riempio grazie all'Object.key con le chiavi, i nodi, principali della tabella del db definendola come se fosse un array ogni chiave

      if (tabFirebase) {
        // è un if che controlla se ci sono dati nella tabella
        setTabella(tabFirebase); // assegno all'oggetto "tabella" tutti i valori della tabella del db
        setNodo(chiavi); // assegno all'array "nodo" solo i valori dei nodi principali sotto forma di array
       console.log(nodo);
      }
    });
  }, []);

  // stato che utilizzeremo per aprire e chiudere il nostro menu laterale. Il menu può solo essere aperto o chiudo, perciò utilizzo un booleano (true/aperto, false/chiuso)
  const [menuVisibile, setMenuVisibile] = useState(false);
  const [loading, setLoading] = useState(true);

  const [utente, setUtente] = useState({ loggato: false });
  const [allievo, setAllievo] = useState(false); // queste mi definisce se un utente è un ex allievo oppure no

  // grazie allo useEffetc rendiamo vero il nostro loading, lo useEffetc è composto da due elementi separati da virgola, il primo è una funzione il secondo è un array vuoto che indica che dovrà far scatenare la funzione quando l'app sarà pronta (il didMount) e allora gli diremo alla funzione di impostare il loading a false
  useEffect(() => {
    function utenteLoggatoCallBack(utenteObj) {
      // una CallBack è una chiamata ad una funzione, che dovrà avvenire soltanto ad un certo momento e non seguirà il normale flusso degli eventi, in questo caso si avvierà soltanto dopo che firebase ci avrà restituito il "loggato:true" al nostro parametro "utenteObj" e ci permetterà di invocare i cambi di stato anche al di fuori del nostro componente!
      setUtente(utenteObj);
      setLoading(false); // questa è quella che determina la fine del loading e la spostiamo qui dentro perchè io voglio assicurarmi che il loading scompaia solo dopo che Firebase mi avrà restituito i dati dell'utente, altrimenti potrebbe scomparire il login, comparire l'app, ma ancora non ho i dati dell'utente
    }
    onUtenteLoggato(utenteLoggatoCallBack); // funzione che intercetta l'avvenuto cambio di stato della login
  }, []);

  useEffect(() => {
    // questo useEffect eseguirà il codice al suo interno, tutte le volte che lo stato di utente muterà, perchè abbiamo messo "utente" nelle quadre finali
    if (utente.uid) {
      // se esiste lo user ID, per cui l'utente è loggato
      const utenteReferenza = firebase.database().ref("/utenti/" + utente.uid);
      utenteReferenza.once("value", (utenteDb) => {
        // once è tipo "on" con la differenza che viene eseguita una volta sola
        const cloneUtenteDb = utenteDb.val(); // come prima cosa andiamo a leggere e prenderci tutti i valori, i nodi principali del DB per verificare se nel db c'è già un nodo con lo stesso uid
        //console.log(cloneUtenteDb);
        // console.log(cloneUtenteDb.allievo);

        if (cloneUtenteDb) {
          // così verifico se l'utente già esiste

          setAllievo(cloneUtenteDb.allievo);
          setAccesso(false); // imposto allievo con il valore del nodo allievo preso dal db
          return null; // ok allora non fare nulla
        } else {
          setAccesso(true);
          // se invece non esiste
          utenteReferenza.set({
            email: utente.email,
            nome: utente.nome,
            foto: utente.foto,
            allievo: false, // di default lo setto su false
          });
        }
      });
    }
  }, [utente]);

  const apriChiudiMenu = () => {
    // con il punto esclamativo prima di una variabile andiamo a selezionare il valore opposto di un booleano
    // (se il valore di menuVisibile è true, noi lo mettiamo a false)
    // questo ci permette di non dover verificare prima di invocare questa funzione se dobbiamo aprire o chiudere il menu: lui lo capirà da solo!
    setMenuVisibile(!menuVisibile);
  };
  const chiudiPrimoAcc = () =>{
    setAccesso(false);
  }
  if (loading) {
    return (
      <ContenitoreLoading>
        <CircularProgress />
      </ContenitoreLoading>
    );
  }
  // questo return verrà letto SOLAMENTE se il loading sarà a false
  return (
    
    <nodoContext.Provider value={nodo}>
      <tabellaContext.Provider value={tabella}>
        <Router>
          <Contenitore className="App">
            <header className="app-header">
              {/* questo bottone determina l'apertura o la chiusura del menu*/}
              <MenuIcon onClick={() => apriChiudiMenu()} />
              <Menu
                menuVisibile={menuVisibile}
                apriChiudiMenu={apriChiudiMenu}
                logout={logout}
                loggatiConGoogle={loggatiConGoogle}
                utente={utente}
                allievo={allievo}
              />
               <Link to={ROTTE.HOME} className="linkHome"> 
               <img src={Logo} className="logo"/>
               </Link>
             
            </header>
            {accesso && (
              <div className="contPrimoAccesso">
                <h1 className="titoloHome">Grazie per esserti registrato</h1>
                <p className="introAccademia">
                  Ti ricordiamo che se sei un nostro ex allievo, ci puoi contattare alla
                  mail info@anja.it per comunicarci della tua iscrizione all'app,e dopo un
                  eventuale verifica, ti verrà attivata l'opzione per visualizzare tutte
                  le <strong>offerte di lavoro dedicate ai nostri ex allievi</strong>.
                </p>
                <Button variant="contained" onClick={()=>chiudiPrimoAcc()}>CHIUDI</Button>
            </div>
            )}
            {!accesso && (
            <div className="app-corpo">
              <Switch>
                <Route exact path={ROTTE.CONTATTI}>
                  <Contatti />
                </Route>
                <Route exact path={ROTTE.MASTER}>
                  <Master />
                </Route>
                <Route exact path={ROTTE.CORSI}>
                  <Corsi />
                </Route>
                <Route exact path={ROTTE.CORSO}>
                  <Corso />
                </Route>
                <Route exact path={ROTTE.PRIMOACCESSO}>
                  <PrimoAccesso />
                </Route>
                <Route path={ROTTE.HOME}>
                  <Home />
                </Route>
              </Switch>
            </div>
            )}
            <footer>
              <Footer/>
            </footer>
          </Contenitore>
        </Router>
      </tabellaContext.Provider>
    </nodoContext.Provider>
  );
}
const Contenitore = styled.div`
  .app-header {
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 20px;
    font-size: 20px;
    color: white;
    text-align: right;
  }
  .linkHome{
    display: flex;
  }
  .contPrimoAccesso {
    position: absolute;
    background: white;
    height: 100%;
    padding: 20px;
}
`;

const ContenitoreLoading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;

  .MuiCircularProgress-colorPrimary {
    color: #e0902c;
  }
`;

export default App;
