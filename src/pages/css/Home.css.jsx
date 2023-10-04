import styled from "styled-components";

export const Container = styled.div`
  background-color: #222;
  min-height: 100vh;
  min-width: 100vw;
  padding: 0;
  margin: 0;
`;

export const NotationBlock = styled.div`
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 100px;
  border: 2px solid #7fff00;
  padding: 30px;
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 95%;
    padding: 50px 15px;
  }
`;
