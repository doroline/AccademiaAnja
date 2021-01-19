import { useContext, useEffect, useState} from "react";
import { corsiContext } from "./App";
import { useParams, useHistory } from "react-router-dom";
import { colors, breakpoints } from "../global-styles";
import styled from "styled-components";
import Card from "@material-ui/core/Card";


import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';

import {
  WhatsappShareButton,
  EmailShareButton,
  FacebookShareButton,
  WhatsappIcon,
  EmailIcon,
  FacebookIcon
 } from "react-share";

 import { Menu, IconButton } from "@material-ui/core";
import { Share } from "@material-ui/icons";




const Corso = () => {

  const [apriChiudShareMenu, setApriChiudiShareMenu] = useState(null);

  // in questo modo mi parte la pagina dall'alto su y
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const contestoCorso = useContext(corsiContext);
  const { chiave } = useParams();
  const corso = contestoCorso.tabella[chiave];

  const history = useHistory();

  return (
    <Contenitore>
            <Card className="card">
            
              <CardMedia className="card-media" image={corso?.foto} />

              <IconButton
            className="share btn"
            aria-label="condivi"
            onClick={(e) => setApriChiudiShareMenu(e.currentTarget)}
          >
            <Share htmlColor={colors.mainOrange} />
          </IconButton>
          <Menu
            id="share-menu"
            className="share-menu"
            keepMounted
            anchorEl={apriChiudShareMenu}
            open={Boolean(apriChiudShareMenu)}
            onClose={() => setApriChiudiShareMenu(null)}
          >
            <WhatsappShareButton
              // title={ricetta?.name + ": "}
              title={`Ciao, dai un occhiata a questa ricetta, *${corso?.nome}* : `}
              url={window.location.href}
              children={
                <WhatsappIcon className="share-btn" size={32} round={true} />
              } // si occupa di mostrare l'elemento che gli andiamo ad inserire dentro
            />
            <FacebookShareButton
              quote={`Ciao, dai un occhiata a questa corso, ${corso?.nome} : `}
              url={window.location.href}
              children={
                <FacebookIcon className="share-btn" size={32} round={true} />
              } 
            />
            <EmailShareButton
              title={`Ciao, dai un occhiata a questa corso, ${corso?.nome} : `}
              url={window.location.href}
              children={
                <EmailIcon className="share-btn" size={32} round={true} />
              } 
            />
          </Menu>
               <div className="CardTitolo">{corso?.nome}</div>
               <div className="CardSottoTitolo">{corso?.durata}</div>
              <CardContent className="programma">
                <div
                  dangerouslySetInnerHTML={{ __html: corso?.programma }}
                ></div>
              </CardContent>
            <ArrowBackIosRoundedIcon onClick={() => {history.goBack();}} className="tornaIndietro"/>
            </Card>
          
    </Contenitore>
  );
};

const Contenitore = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0px;
  justify-content: center;
        @media only screen and (min-width: ${breakpoints.screenMobBig} ){
          padding: 30px;
                  }

 
 .CardTitolo {
    color: ${colors.titolo}!important;
    font-size: 23px!important;
    font-weight: bold;
    padding-left: 10px;
}
.CardSottoTitolo {
    color: ${colors.sottoTitolo}!important;
    font-size: 16px!important;
    font-weight: normal;
    padding-left: 10px;
    margin-top:8px;
}


  .card {
    width: 100%;
    margin-bottom: 30px;
    padding-bottom: 40px;
    margin-top: 70px;
    @media only screen and (min-width: ${breakpoints.screenMobBig} ){
      width: 80%;
      padding-bottom: 20px;

            }
  }
  .card-media {
    height: 0;
    padding-top: 56.25%;
  }
  .btn{
        position: relative;
        background-color: white;
        top: -29px;
        left: 10px;
        &.share {
          right:106;
        }

      }
      .btn:hover{
        background-color: white!important;
      }
  .programma{
    padding: 20px;
  }
  .programma p,span {
    text-align: justify!important;
    font-size: 15px!important;
    color: grey!important;
  }
  .tornaIndietro{
    font-size: 30px;
    color: ${colors.titolo};
    margin-left: 20px;
    border: 3px solid;
    border-radius: 50%;
    padding: 5px;
  }

  
`;
export default Corso;
