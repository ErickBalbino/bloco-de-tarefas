import styled from "styled-components";

export const Container = styled.div`
  background-color: #444;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  margin: 10px 0;
  border-radius: 5px;

  .task-title {
    display: flex;
    align-items: center;
    color: #eee;
    font-size: 1.1rem;
    font-weight: 400;
    border-radius: 5px;
    box-sizing: border-box;
    cursor: pointer;
    padding: 0 10px;
  }

  .buttons-container {
    display: flex;
    align-items: center;
  }

  .icon {
    color: #7fff00;
    font-size: 1.3rem;
    margin: 0 3px;
    cursor: pointer;
    transition: 0.2s ease-in-out color;
  }

  .icon:hover {
    color: #69d101;
  }
`;
