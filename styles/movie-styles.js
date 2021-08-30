import styled from "styled-components";

export const MovieContainer = styled.section`
  background: #787a91;
  height: 100%;
  min-width: 100vh;

  footer {
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #eeeeee;

    h6 {
      font-weight: 200;
    }
    a {
      font-weight: 200;
      color: #eeeeee;
      text-decoration: none;
      transition: 0.2s;
    }

    a:hover {
      color: #c9c9c9;
    }
  }
`;

export const Top = styled.div`
  background: #141e61;
  width: 100%;
  height: 306px;
  color: #eeeeee;
  padding: 40px;
`;

export const Image = styled.img`
  height: 350px;
  margin-top: 10px;
`;

export const MovieContent = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const Links = styled.div`
  color: #eeeeee;
  margin-top: 100px;
  padding: 20px;

  p {
    font-size: 14px;
    margin-bottom: 10px;
  }
`;

export const ContainerLinks = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Link = styled.a`
  color: #eeeeee;
  text-decoration: none;
  font-size: 18px;
`;

export const MainContent = styled.div`
  margin-left: 160px;

  h2 {
    color: #eeeeee;
    font-weight: 400;
    font-size: 24px;
    margin-bottom: 10px;
  }

  p {
    color: #eeeeee;
    font-weight: 400;
    font-size: 16px;

    button {
      background: transparent;
      border: none;
      cursor: pointer;
      color: #00ffff;
      font-size: 12px;
      transition: 0.2s;
    }

    button:hover {
      color: #eeeeee;
    }
  }

  #plot {
    margin-bottom: 10px;
    max-width: 800px;
  }

  #awards {
    margin-top: 20px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  width: 600px;
  justify-content: space-between;
  margin-top: 10px;

  ul {
    color: #dcdcdc;
    margin-left: 20px;
  }
`;
