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
  
.material-icons-outlined {
  font-family: 'Material Icons Outlined', sans-serif;
}

 a {
    text-decoration: none;
 } 

 body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-color: #222222;
 }
 

 .container {
    position: relative;
    width: 430px;
    height: 500px;
    background-color: #333333;
    border-radius: 25px;
    padding: 120px 3px 64px;
    box-shadow: 0 4px 18px;
 }

 .card {
    content: "";
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 140px;
    height: 70px;
 }

 .login-form {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 85%
 }

 .page {
   display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
 }

 .title-login {
   letter-spacing: 5px;
    font-size: 70px;
    font-weight: 300; 
    color: #1DCD9F;
    font-size: 40px;
    margin-top: 75px;
    margin-left: 65px;
    font-optical-sizing: auto;
    font-style: normal;
 }

 .title-register {
   letter-spacing: 5px;
    font-size: 70px;
    font-weight: 300; 
   color: #1DCD9F;
    font-size: 40px;
    margin-top: 75px;
    margin-left: 110px;
    font-optical-sizing: auto;
    font-style: normal;
 }

 .input-box {
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 20px 0;

 }

 .input-field {
    width: 100%;
    height: 55px;
    font-size: 16px;
    background: transparent;
    padding: 0 20px;
    border: 1px solid black;
    border-radius: 30px;
    outline: none;   
    background-color: #222222;

}


.icon {
  position: absolute;
    top: 50%;
    right: 25px;
    font-size: 20px;
    transform: translateY(-50%);
    color: rgb(119, 119, 119);
}


.btn-submit {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    width: 100%;
    height: 50px;
    font-size: 16px;
    gap: 10px;
    background-color: #1DCD9F;
    border-radius: 25px;
    border: 0;
    color: #222222;
    cursor: pointer;
}

a {
    color: #000000;
    text-decoration: none;
}

a:hover {
    color:#1DCD9F; 
    text-decoration:none; 
    cursor:pointer;  

}

.col-2 {
    text-align: center;
}

.title-login {

  }

  label {
  position: absolute;
  width: 0;
  height: 0;
  padding: 0;
  margin: 0;
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  white-space: nowrap;
  overflow: hidden;
}


/* Style the placeholder text */
.input-field::placeholder {
   color: rgb(119, 119, 119);
}

/* Ensure placeholder disappears when typing or focus */
.input-field:focus::placeholder {
  color: transparent; /* Make the placeholder text disappear when focused */
}

/* Ensure the text color in the input field is set */
.input-field {
   color: rgb(119, 119, 119);
}

`;
export default Wrapper;
