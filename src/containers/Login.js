import React, { useContext } from "react";
import styled from "styled-components";
import Lottie from "react-lottie";
import * as cuoreBatte from '../assets/lottie/cuore-che-batteAnja.json';
import * as registrati from '../assets/lottie/registrati.json';


import { UtenteContext } from './App';

import {Button} from "@material-ui/core";
import { colors, brackpoints } from "../global-styles";


export default function Login(props){

    const configAnimazioneLoggato = {
        loop: false,
        autoplay: true,
        animationData: cuoreBatte.default,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
          }
      };

      const configAnimazioneRegistrati = {
        loop: false,
        autoplay: true,
        animationData: registrati.default,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
          }
      };
     
    const utenteContesto = useContext(UtenteContext);

    if (utenteContesto.utente?.loggato) {
        return (
          <Contenitore>
            <div className="loginHeader">
              <h1>Benvenuti nell'app dell'Accademia Anja!</h1>
                <div className="animazione">
                <Lottie options={configAnimazioneLoggato}/>
                </div>
              <div className="loginSubheader">
                Naviga e scopri tutti i corsi che fanno al caso tuo!
              </div>
            </div>
          </Contenitore>
        );
      }
     
      return (
        <Contenitore>
          <div className="loginHeader">
         <h1>Accademia Anja!</h1>
            Accedi per avere sempre a portata di click i tuoi corsi preferiti
            <div className="animazioneReg">
                <Lottie options={configAnimazioneRegistrati}/>
                </div>
          <Button className="sign-in" onClick={() => props.loggatiConGoogle()}>
            Accedi con Google
          </Button>
          </div>
        </Contenitore>
      );
     
};

const Contenitore = styled.div`
display: flex;
  flex-wrap: wrap;
  padding: 30px;
  padding-top: 80px;
  justify-content: center;
  margin-bottom: 30px;
  .loginHeader{
      display:flex;
      align-items:center;
      justify-content:center;
      flex-direction: column;
      height:50vh;
      text-align:center;
      h1{
      color: ${colors.titolo};
      
  }
  .animazione{
      display:flex;
      width:40%;
  }
  .animazioneReg{
      display:flex;
      width:20%;
      margin-top:50px;
  }
  .loginSubheader{
      font-size:17px;
      
  }
  .sign-in{
      margin-top:0px;
      font-size:16px;
      font-weight:bold;
  }
  }
 
`;

