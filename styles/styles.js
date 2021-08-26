import styled from "styled-components";

export const MoviesContainer = styled.div`
  background: #787a91;
  padding: 40px;
`;

export const Ul = styled.div`
  list-style: none;
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-row-gap: 20px;
  margin-top: 50px;
`;

export const Box = styled.div`
  width: 261px;
  padding: 10px;
  background: #141e61;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h4 {
    font-weight: 500;
    color: #ffffff;
  }
  p {
    color: #9a9a9a;
  }
`;

export const Image = styled.img`
  width: 100%;
`;
