import React from 'react'
import Wrapper from '../assets/wrappers/DashboardFormPage'
import { redirect, useOutletContext } from 'react-router-dom'
import { useNavigation, Form } from 'react-router-dom'
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify'
import { useLoaderData, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import FormRow from '../components/FormRow'

export const loader = async ({ params }) => {
    //assign image id from params to a variable
    const { imageId } = params;
    //use that variable to grab the image data
    const response = await customFetch.get(`/images/${imageId}`);
    return response.data.image;

};

//action that takes request and params, params is Id, request gets the form data
export const action = async ({ request, params }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    const { imageId } = params;
  
    try {
        //run patch with the form id on the image with this id
        await customFetch.patch(`/images/${imageId}`, data);
      toast.success('Image updated successfully!');
    } catch (error) {
      toast.error(error?.response?.data?.msg || 'Something went wrong');
    }
    return redirect('/dashboard/gallery');
  };
  

const EditImage = () => {
    const image = useLoaderData();
    return (
    <Form method="post" className='form'>
      <h4 className = 'form-title'>
        Edit Image
      </h4>
      <div className="input-box">
          <FormRow type="text" name="title" labelText="title" defaultValue={image.title} />
        </div>
        <div className="input-box">
          <FormRow type="text" name="description" labelText="description" defaultValue={image.description}/>
        </div>
        <button className="btn" type="submit">Submit</button>
    </Form>
  )
}

export default EditImage