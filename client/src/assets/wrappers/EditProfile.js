import styled from 'styled-components';

const Wrapper = styled.div`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Josefin Sans', sans-serif;
  }

  .body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #222;
    padding: 1rem;
  }

  .container {
    background-color: #333;
    border-radius: 20px;
    padding: 2rem;
    width: 100%;
    max-width: 500px;
    color: #eee;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .title-login {
    color: #1DCD9F;
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 1rem;
  }

  .logout-link {
    color: #aaa;
    text-align: center;
    display: block;
    margin-bottom: 1rem;
    font-size: 0.9rem;
  }

  .logout-link:hover {
    color: #1DCD9F;
    text-decoration: underline;
  }

  .user-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid #1DCD9F;
  }

  .form-row {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .form-label {
    font-size: 0.9rem;
    color: #ccc;
  }

  .form-input {
    padding: 0.5rem;
    border-radius: 8px;
    border: none;
    font-size: 1rem;
  }

  .avatar-input {
    background-color: #fff;
    color: #000;
  }

  .btn-submit {
    width: 100%;
    padding: 0.75rem;
    font-size: 1rem;
    background-color: #1DCD9F;
    color: #222;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    font-weight: bold;
    transition: background 0.3s ease;
  }

  .btn-submit:hover {
    background-color: #17b08a;
  }
`;

export default Wrapper;
