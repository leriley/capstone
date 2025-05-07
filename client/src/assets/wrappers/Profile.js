import styled from 'styled-components'

const Wrapper = styled.div`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Josefin Sans', sans-serif;
  }

  .body {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    min-height: 100vh;
    gap: 2rem;
    background-color: #222;
    padding: 2rem;
  }

  .container {
    background-color: #333;
    border-radius: 20px;
    padding: 2rem;
    width: 350px;
    min-height: 500px;
    color: #ccc;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 1.5rem;
    position: relative;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }

  .right {
    width: 350px;
  }

  .dashboard {
    color: #1dcd9f;
    font-size: 0.9rem;
    margin-bottom: 1rem;
    align-self: flex-start;
    padding: 0.5rem 1rem;
    background-color: #111;
    border-radius: 8px;
    display: inline-block;
  }

  .edit-btn {
    margin-top: 1rem;
    padding: 0.5rem 1.25rem;
    border: none;
    border-radius: 8px;
    background-color: #1dcd9f;
    color: #222;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;
    text-align: center;
  }

  .edit-btn:hover {
    background-color: #17b38b;
  }

  .user-container {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    gap: 20px;
  }

  .img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  .avatar-input {
    background-color: white;
    padding: 0.5rem;
    border-radius: 6px;
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

  .btn:hover {
    background-color: #17b38b;
  }

  .title-login {
    color: #1dcd9f;
    font-size: 1.8rem;
    font-weight: 600;
    font-family: 'League Spartan', sans-serif;
    margin-top: 0.5rem;
  }

  .bio {
    color: #aaa;
    text-align: center;
    line-height: 1.6;
  }

  .card {
    text-align: center;
  }

  .form-label {
    color: #aaa;
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
    display: block;
  }
`

export default Wrapper
