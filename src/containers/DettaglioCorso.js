import { useContext } from "react";
import { corsiContext } from "./App";
import { useParams, useHistory } from "react-router-dom";
import { colors } from "../global-styles";
import styled from "styled-components";
import Card from "@material-ui/core/Card";


import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';

const Corso = () => {

  const contestoCorso = useContext(corsiContext);
  const { chiave } = useParams();
  const corso = contestoCorso.tabella[chiave];

  const history = useHistory();

  return (
    <Contenitore>
            <Card className="card">
              <CardHeader
                title={corso?.nome}
                subheader={"Durata: " + corso?.durata}
               className="CardHeader"/>
              
              <CardMedia className="card-media" image={corso?.foto} />
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
  padding: 30px;
  padding-top:80px;
  justify-content: center;

  .CardHeader {
color: ${colors.titolo};
  }
  .card {
    width: 80%;
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
  .tornaIndietro{
    font-size: 40px;
    color: ${colors.titolo};
    margin-left: 20px;
    border: 3px solid;
    border-radius: 50%;
    padding: 5px;
  }
`;
export default Corso;
