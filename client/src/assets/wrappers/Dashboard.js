import styled from 'styled-components';

const Wrapper = styled.section`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    text-decoration: none;
    font-weight: 400;
    font-family: 'Josefin Sans', sans-serif;
  }

  .userOptions {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .material-symbols-outlined {
    font-family: 'Material Symbols Outlined';
}

  a {
  text-decoration: none;
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 90px;
}


.btn .material-symbols-outlined {
  vertical-align: middle;
}

.logout-btn {
  background-color: #eee;
  border: 1px solid #ccc;
}


p {
  color: rgb(119, 119, 119);
  font-size: 20px;
}

.btn {
  background: rgba(119, 119, 119, .5);
  color: rgb(119, 119, 119);
  padding: 0.75rem 1.5rem;
  border: dashed;
  border-radius: 6px;
  text-decoration: none;
  font-size: 1rem;
  align-items: center;
}

.btn:hover {
  background: rgba(29, 205, 159, .5);
  color:#1dcd9f;
}

h1 {
    letter-spacing: 10px;
    font-size: 70px;
    font-weight: 300;
    display: flex;
    color: #1DCD9F;
}
`;
export default Wrapper;
