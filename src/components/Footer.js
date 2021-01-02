import { useState } from "react";
import {
    useHistory,
    useLocation,
  } from "react-router-dom";
  import {ROTTE} from '../costanti';

import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import SchoolIcon from '@material-ui/icons/School';
import HomeIcon from "@material-ui/icons/Home";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const Footer = () => {
// costanti per gli Hook di Routing
const listaRottePrecedenti = useHistory();
const rottaCorrente = useLocation();

 const cambiaRotta = (nuovaRotta) => {
   listaRottePrecedenti.push(nuovaRotta);
 };

  const [value, setValue] = useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange}>
      <BottomNavigationAction value="home" icon={<HomeIcon />} label="home" onClick={()=> cambiaRotta(ROTTE.HOME)}/>
      <BottomNavigationAction value="master" icon={<SchoolIcon />} label="master" onClick={()=> cambiaRotta(ROTTE.MASTER)}/>
      <BottomNavigationAction value="contatti" icon={<LocationOnIcon />} label="contatti" onClick={()=>cambiaRotta(ROTTE.CONTATTI)}/>
    </BottomNavigation>
  );
};

export default Footer;
