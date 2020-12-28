import { useState, useEffect } from "react";
import styled from "styled-components";
import NuoviCorsi from "../components/NuoviCorsi";

const Home = () => {
  return (
    <Contenitore>
      <NuoviCorsi />
    </Contenitore>
  );
};

const Contenitore = styled.div`
display: flex;
    flex-wrap: wrap;
    padding: 50px;
    justify-content: center;
    
`

export default Home;
