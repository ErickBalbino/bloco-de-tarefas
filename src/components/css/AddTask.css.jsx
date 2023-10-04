import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 8px;

  .add-task-input {
    box-sizing: border-box;
    height: 40px;
    width: 75%;
    padding: 0px 10px;
    margin-right: 8px;
    border: transparent;
    border-radius: 5px;
    outline: transparent;
    background-color: #444;
    color: #eee;
    font-size: 1.05rem;
  }
`;
