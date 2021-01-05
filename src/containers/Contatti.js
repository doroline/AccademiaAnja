import styled from "styled-components";
import mappa from "../img/mappa-anja.jpg";

const Contatti = () => {
  return (
    <Contenitore>
      <h2>Accademia Anja</h2>
      <div>
        Via Alberto Einstein 13
        <br />
        scala E, interno 1<br />
        00146, Roma
        <br /><br />
        Adiacenze »<br />
        V.le Marconi/Staz. Trastevere
        <br />
        Email : info@anja.it
        <br />
        Pec: accademia-anja@pec.it
        <br />
        TEL. <strong>06.393.700.73</strong>
        <br />
        MOBILE & WHATSAPP. <strong>391.40.98.575</strong>
        <br />
        <img src={mappa} className="mappa" />
        <p>
        La nostra segreteria è aperta dal lunedì al venerdì con i seguenti
        orari:
        <br />
        <strong>mattina:</strong> dalle 10.00 alle 13.00.
        <br />
        <strong>pomeriggio:</strong> dalle 16.00 alle 19.00.
        <br />
        <span className="sottoTitolo">(Non è necessario prendere un appuntamento, ma è sempre gradito.)</span>
        <br />
        </p>
     
      </div>
    </Contenitore>
  );
};

const Contenitore = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 50px;
  justify-content: center;
  .mappa {
    width: 100%;
    border: 2px solid black;
    margin-top: 30px;
  }
  h2{
    margin-top:-20px;
  }
  p{
    font-size:0.8em;
  }
  .sottoTitolo{
    color:grey;
    text-align:center;
    width:100%;
    display:inline-block;
    margin-top:10px;
  }
`;

export default Contatti;
