import styled from "styled-components";

const PrimoAccesso = () => {
 
  return (
    <Contenitore>
      <h1 className="titoloHome">Grazie per esserti registrato</h1>
      <p className="introAccademia">
        Ti ricordiamo che se sei un nostro ex allievo, ci puoi contattare alla
        mail info@anja.it per comunicarci della tua iscrizione all'app,e dopo un
        eventuale verifica, ti verrà attivata l'opzione per visualizzare tutte
        le <strong>offerte di lavoro dedicate ai nostri ex allievi</strong>.
      </p>
    </Contenitore>
  );
};

const Contenitore = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 50px;
  justify-content: center;
  .titoloHome {
    color: #5294ce;
    margin-bottom: 0px;
  }
  .sottotitoloHome {
    color: grey;
    text-align: center;
    font-size: 21px;
    margin-top: 3px;
  }
  .introAccademia {
    font-size: 16px;
    text-align: justify;
    color: #757575;
  }
`;

export default PrimoAccesso;
