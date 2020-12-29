import styled from "styled-components";

const Contatti = () => {
  return (
    <Contenitore>
      <h2>Accademia Anja</h2>
      <div>
          Via Abert Einstein, 13<br />
          Roma - 00146
      </div>
    </Contenitore>
  );
};

const Contenitore = styled.div`
display: flex;
    flex-wrap: wrap;
    padding: 50px;
    justify-content: center;
    
`

export default Contatti;
