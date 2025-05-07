import styled from 'styled-components';

const Wrapper = styled.main`
  min-height: 100vh;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #222222;
  img {
    width: 90vw;
    max-width: 600px;
    display: block;
    margin-bottom: 2rem;
    margin-top: -3rem;
  }
  h3 {
    margin-bottom: 0.5rem;
    color: rgb(105, 105, 105);
  }
  p {
    line-height: 1.5;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    color: var(--text-secondary-color);
    color: rgb(105, 105, 105);
  }
  a {
    color: var(--primary-500);
    text-transform: capitalize;
  }

  .link {
    color: #1DCD9F;    
  }

`;

export default Wrapper;
