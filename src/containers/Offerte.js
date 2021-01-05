import styled from "styled-components";

const Offerte = () => {
  return (
    <Contenitore>
    <h1 className="titoloHome">Offerte di Lavoro</h1>
    <h2 className="sottotitoloHome">Attualmente non ci sono offerte</h2>

    </Contenitore>
  );
};

const Contenitore = styled.div`
display: flex;
    flex-wrap: wrap;
    padding: 50px;
    justify-content: center;
    .titoloHome{
      color: #5294ce;
    margin-bottom: 0px;
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
`

export default Offerte;
