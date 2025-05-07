import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { Link } from 'react-router-dom'
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify'
import Wrapper from '../assets/wrappers/Profile'
import { redirect } from 'react-router-dom';

export const loader = async ({ params }) => {
  const { userId } = params;
 

  try {
      const { data: currentUser } = await customFetch.get('/users/current-user');
      if (currentUser.user._id === userId) {
          return redirect('/profile'); 
      }
      const response = await customFetch.get(`/users/${userId}`);
      return response.data.user;
  } catch (error) {
      console.error('Error fetching user profile:', error);
      
      throw new Response('User not found', { status: 404 });
  }
};

const UserProfile = () => {
    const user = useLoaderData();
    const { username, avatar, bio } = user;
  
    return (
      <Wrapper>
        <div className="body">
          <Link to="/dashboard" className="dashboard">Back Home</Link>
          <div className="container">
            <div className="card">
              <div className="title">
                <div className="title-login caveat">Profile</div>
              </div>
            </div>
            <div className="user">
              <div className="user-container">
                {avatar ? (
                  <img src={avatar} alt="avatar" className="img" />
                ) : (
                  <FaUserCircle className="icon" />
                )}
                {username}
              </div>
            </div>
          </div>
          <div className="container right">
            <div className="card">
              <div className="title">
                <div className="title-login caveat">Bio</div>
              </div>
            </div>
            <p className="bio">{bio}</p>
          </div>
        </div>
      </Wrapper>
    );
  };

  export default UserProfile;