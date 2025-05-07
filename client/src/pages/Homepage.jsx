import styled from "styled-components";
import { Form, redirect, useNavigation, Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/LandingPage';
import image from '../assets/images/image.png';
//<a href="https://www.flaticon.com/free-icons/picture" title="picture icons">Picture icons created by Graphics Plazza - Flaticon</a>
const Homepage = () => {
  return (
    <Wrapper>
      <div className="page">
      <div className="home">
          <h1>ImgStash</h1>
        <p>Easy image hosting. No fees, no subscriptions, no hassle.</p>
        <Link to='/register' className="btn">Register</Link>
        <Link to="/login" className="btn">Sign In</Link>
        <div className="imgContainer">
          <img src={image} alt="background image of upload image icon" />   
        </div>
    </div>
      </div>
    </Wrapper>
  )
}

export default Homepage