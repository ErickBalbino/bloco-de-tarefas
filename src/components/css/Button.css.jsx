import styled from "styled-components";

export const Container = styled.button`
  background-color: #7fff00;
  color: #444;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  border: transparent;
  border-radius: 5px;
  outline: transparent;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s ease-in-out background-color;

  &:hover {
    background-color: #69d101;
  }
`;
