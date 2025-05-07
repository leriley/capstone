import React from 'react'
import Wrapper from '../assets/wrappers/Profile'
import { useLoaderData, Form, Link } from 'react-router-dom'
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify'
import { FaUserCircle } from 'react-icons/fa'

export const action = async ({ request }) => {
  const formData = await request.formData()
  const file = formData.get('avatar')

  if (file && file.size > 500000) {
    toast.error('Image size too large')
    return null
  }

  try {
    await customFetch.patch('/users/update-user', formData)
    toast.success('Update successful')
  } catch (error) {
    toast.error(error?.response?.data?.msg || 'Something went wrong')
  }

  return null
}

const Profile = () => {
  const { user } = useLoaderData()
  const { email, username } = user

  return (
    <Wrapper>
      
      <div className="body">
        <div className="left-section">

          <div className="container">
            <div className="card">
              <div className="title-login caveat">Profile</div>
            </div>
            <div className="user-container">
              {user.avatar ? (
                <img src={user.avatar} alt="avatar" className="img" />
              ) : (
                <FaUserCircle className="icon" />
              )}
              <span>{username}</span>
            </div>
            <Link to="../edit-profile" className="edit-btn">
            Edit
          </Link>
          </div>
        </div>

        <div className="right-section">
          <div className="container right">
            <div className="card">
              <div className="title-login caveat">Bio</div>
            </div>
            <p className="bio">{user?.bio || 'No bio available.'}</p>
          </div>
        </div>
        <Link to="/dashboard" className="dashboard">
            Back Home
          </Link>
      </div>
      
    </Wrapper>
  )
}

export default Profile
