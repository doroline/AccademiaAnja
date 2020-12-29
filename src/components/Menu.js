import { useState } from "react";

import {
  useHistory,
  useLocation,
} from "react-router-dom";
import {ROTTE} from '../costanti';

import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Switch from "@material-ui/core/Switch";
import Button from '@material-ui/core/Button';


const Menu = (props) => {
  // costanti per gli Hook di Routing
 const listaRottePrecedenti = useHistory();
 const rottaCorrente = useLocation();

  const cambiaRotta = (nuovaRotta) => {
    listaRottePrecedenti.push(nuovaRotta);
    props.apriChiudiMenu();
  };

  return (
    <>
      {/* 
        qui inizia il menu, con l'elemento SwipeableDrawer che contiene tutti i bottoni con i nomi delle sezione della mia APP 
        anchor indica la posizione da cui il menu si aprirà
        open indica se il menu è aperto o chiuso
        onClose e onOpen sono eventi legati allo swipe dell'utente (in generale per noi è importante invocare una sola funzione: apriChiudiMenu)
      */}
      <SwipeableDrawer
        anchor="left"
        open={props.menuVisibile}
        onClose={() => props.apriChiudiMenu()}
        onOpen={() => props.apriChiudiMenu()} 
      >
        {/* List svolge il ruolo di <ul> e ListItem quello di <li>: in questo caso potrei utilizzare una costante ed eseguire un .map per ciclarmi tutte le pagine della mia app che voglio elencare */}
        <List>
        <ListItem button key="ciao">
            {props.utente.loggato && (
                <div>
                  Ciao <br />{props.utente.nome}{" "}
                  <img src={props.utente.foto} className="fotoUtente" />
                </div>
            )}
          </ListItem>
  
          <ListItem button key="Home" onClick={()=> cambiaRotta(ROTTE.HOME)}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button key="I Corsi" onClick={()=> cambiaRotta(ROTTE.MASTER)}>
            <ListItemText primary="I Master" />
          </ListItem>
          <ListItem button key="I Corsi" onClick={()=> cambiaRotta(ROTTE.CORSI)}>
            <ListItemText primary="Tutti i Corsi" />
          </ListItem>
          <ListItem button key="Contatti" onClick={() => cambiaRotta(ROTTE.CONTATTI)}>
            <ListItemText primary="Contatti" />
          </ListItem>
          {props.allievo && ( <ListItem button key="Offerte di lavoro" onClick={() => cambiaRotta(ROTTE.LISTA_DELLA_SPESA)} className="btnOfferte">
            <ListItemText primary="Offerte di lavoro" />
          </ListItem>)}

         
        </List>
        {!props.utente.loggato && (
          <Button onClick={() => props.loggatiConGoogle()}>Accedi con Google</Button>
        )}
        {props.utente.loggato && (
          <div>
            <Button onClick={() => props.logout()}>ESCI</Button>
          </div>
        )}
      </SwipeableDrawer>
    </>
  );
};

export default Menu;
