import styled from 'styled-components';

const Wrapper = styled.section`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    text-decoration: none;
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 400;
  }

  .page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .home {
    color: #1DCD9F; 
    text-align: left; 
    z-index: 1; 
  }

  h1 {
    letter-spacing: 10px;
    font-size: 70px;
    font-weight: 300;
  }

  p {
    line-height: 2;
    margin-bottom: 1rem;
    max-width: 35em;
    color: #3BE3B6; 
    font-size: 20px;
  }

  .btn {
    padding: 0.75rem 1rem;
    background-color: #1DCD9F;
    margin-right: 5%;
    font-size: 16px;
    color: #222222;
  }

  .imgContainer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: -1;
  }

  img {
    position: absolute;
    top: 40%;
    left: 40%;
    transform: translate(-50%, -50%) rotate(-20deg);
    width: 400px;
    z-index: -1;
  }

  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 400px;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
    }
  }
`;

export default Wrapper;
