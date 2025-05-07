import styled from 'styled-components';

const Wrapper = styled.main`
* {
    color: #1DCD9F;
}

 p {
    color: #777777;
    margin-top: 10px;
 }

 .page-container {
    display: flex;
    justify-content: center;
    margin-top: 10px;
}


.image-wrapper {
  display: flex;
  flex-direction: column;
  padding: 1rem;
}

.image-item {
  max-width: 700px;
  width: 100%;
}

.image-item img {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
}

.image-item p {
  word-wrap: break-word;
  margin-top: 0.5rem;
  color: #666;
}

 h4 {
    margin-top: 10px;
 }

  img {
    display: flex;
    width: 50vh;
    margin-top: 5px;
  }

  .link {
    color: #777777;

  }

  .options {
    display: flex;
    gap: 10px;
  }

  .link:hover {
    color: #1DCD9F;
  }
  .btn {
    margin-top: 1rem;
    background-color: #1dcd9f;
    color: #222;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s ease;
  }

`;

export default Wrapper;
