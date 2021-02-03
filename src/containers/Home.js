import { useContext, useState, useEffect} from "react";
import styled from "styled-components";
import NuoviCorsi from "../components/NuoviCorsi";
import corsiContext from "./App";
import { colors, breakpoints } from "../global-styles";

import Slider from "react-slick";

import firebase from 'firebase';
import firebaseConfig from "../firebase-config";



const Home = () => {
  const [nodo, setNodo] = useState([]);
   
  useEffect(() => {
        const riferimentoTabella = firebase.database().ref('/slide');
        riferimentoTabella.on("value", (idTabella) => {
            const idTabFirebase = idTabella.val();
 
            if (idTabFirebase) {
                setNodo(idTabFirebase);
            }
        });
    }, []);
 

  const corsi = useContext(corsiContext);
  const baseUrl = "https://www.accademia-anja.com/img/gallery-grafica/";


  const settings = {
    dots: false,
    fade:false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Contenitore>
    <h1 className="titoloHome">Accademia Anja</h1>
    <h2 className="sottotitoloHome">Corsi di formazione: Master Web, Master Grafica e Corsi Web a Roma dal 1999</h2>
    <p className="introAccademia">
    Ci occupiamo di formazione professionale nell'ambito dell'informatica <strong>da oltre 20 anni</strong>.
Cosa intendiamo per: Corsi Informatica? Che eroghiamo Corsi professionalizzanti, indirizzati, quindi, ha chi già possiede una buona conoscenza di base sull'utilizzo del Computer.
Nei nostri Master di Grafica e nei Master Web, ci sono 1, 2, o anche 3 Certificazioni valevoli a livello internazionale in omaggio!
Scopri per quali Master e' attiva questa promozione.
    </p>
        <NuoviCorsi />
        <div className="home-slider-container">
            <div className="home-slider-title">
                <span>Alcuni lavori dei nostri allievi</span>
            </div>
            <Slider {...settings} className="slider-wrapper">
                  {nodo.map((slide, indice) => (
                      <div>
                                <img src={slide.foto}/>
                                </div>
                              )
                            )}
              </Slider>
  	 </div>

    </Contenitore>
  );
};

const Contenitore = styled.div`
display: flex;
    flex-wrap: wrap;
    padding: 40px;
    padding-top:70px;
    justify-content: center;
    .titoloHome{
      color: ${colors.titolo};
    margin-bottom: 0px;
    padding-bottom:60px;
    width:100%!important;
    text-align:center;
    }
    .sottotitoloHome{
      color: grey;
    text-align: center;
    font-size: 21px;
    margin-top: 3px;
    }
    .introAccademia{
      font-size: 16px;
    text-align: justify;
    color: #757575;
    }
    .home-slider-container {
    padding: 15px 15px;
    max-width: 1400px;
    @media only screen and (max-width: ${breakpoints.screenDeskMid}) {
      max-width: 1300px;
    }
    @media only screen and (max-width: ${breakpoints.screenDeskSmall}) {
      max-width: 960px;
    }
    @media only screen and (max-width: ${breakpoints.screenMobBig}) {
      max-width: 768px;
    }
    @media only screen and (max-width: ${breakpoints.screenMobMedium}) {
      max-width: 600px;
    }
    @media only screen and (max-width: ${breakpoints.screenMobMid}) {
      max-width: 411px;
    }
    .home-slider-title {
      color: ${colors.titolo};
      text-transform: uppercase;
      font-size: 18px;
      font-weight: bold;
      letter-spacing: 1px;
      margin-top: 10px;
      text-align:center;
      @media only screen and (min-width: ${breakpoints.screenMobBig}) {
        text-align: center;
        font-size: 19px;
        letter-spacing: 6px;
        font-weight: 500;
        margin-top: 10px;
        margin-bottom: 10px;
      }
    }
    .home-slider-wrapper {
      margin: 30px;
      .slider-img{
        width:80%;
        height:500px;
      }
    }
  }
    
    
`

export default Home;
