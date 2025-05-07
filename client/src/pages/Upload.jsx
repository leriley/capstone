import React from 'react'
import Wrapper from '../assets/wrappers/EditProfile'
import { Form } from 'react-router-dom'
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify'
import FormRow from '../components/FormRow'

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const file = formData.get('image');

  console.log(data);

  try {
    await customFetch.post('/images', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    toast.success('Image uploaded successfully!');
  } catch (error) {
    toast.error(error?.response?.data?.msg || 'Something went wrong');
  }

  return null;
};

const Upload = () => {
  return (
    <Wrapper>
      <div className="body">
          <Form method="post" className="container" encType="multipart/form-data">
            <h4 className="title-login">Image Upload</h4>
            {/* File input */}
            <div className="form-row">
              <label htmlFor="image" className="form-label">
                Select an image file
              </label>
              <input
                type="file"
                id="image"
                name="image"
                className="form-input"
                accept="image/*"
              />
            </div>
            <div className="input-box">
              <FormRow type="text" name="title" labelText="Title" />
            </div>
            <div className="input-box">
              <FormRow type="text" name="description" labelText="Description" />
            </div>
            <button className="btn-submit" type="submit">Submit</button>
          </Form>
        </div>
    </Wrapper>
  );
};

export default Upload;
