import React, { useEffect, useState } from 'react';
import Wrapper from '../assets/wrappers/EditProfile';
import { Form, Link, useNavigation } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import customFetch from '../utils/customFetch';
import { redirect } from 'react-router-dom';

export const action = async ({ request }) => {
  const formData = await request.formData();

  try {
    await customFetch.patch('/users/update-user', formData);
    return redirect('/profile');
  } catch (error) {
    console.log(error);
    return null;
  }
};

const EditProfile = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await customFetch.get('/users/current-user');
        setUser(res.data.user);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  if (loading) return <div className="body"><p>Loading...</p></div>;
  if (!user) return <div className="body"><p>Error loading user data.</p></div>;

  return (
    <Wrapper>
      <div className="body">
        <Form method="post" className="container" encType="multipart/form-data">
          <h4 className="title-login">Edit Profile</h4>
          <Link to="/profile" className="logout-link">← Back to Profile</Link>

          <div className="user-container">
            {user.avatar ? (
              <img src={user.avatar} alt="avatar" className="img" />
            ) : (
              <FaUserCircle className="img" />
            )}
          </div>

          <div className="form-row">
            <label htmlFor="avatar" className="form-label">
              Select an image file less than 0.5MB
            </label>
            <input
              type="file"
              id="avatar"
              name="avatar"
              className="form-input avatar-input"
              accept="image/*"
            />
          </div>

          <div className="form-row">
            <label htmlFor="bio" className="form-label">Bio</label>
            <input
              type="text"
              id="bio"
              name="bio"
              className="form-input"
              defaultValue={user.bio || ''}
            />
          </div>

          <button className="btn-submit" type="submit" disabled={navigation.state === 'submitting'}>
            {navigation.state === 'submitting' ? 'Updating...' : 'Submit'}
          </button>
        </Form>
      </div>
    </Wrapper>
  );
};

export default EditProfile;
