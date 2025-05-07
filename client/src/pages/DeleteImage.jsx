import { toast } from 'react-toastify';
import customFetch from '../utils/customFetch';
import { redirect } from "react-router-dom";

export const action = async ({ params }) => {
    try {
        const { imageId } = params;
        await customFetch.delete(`/images/${imageId}`);
        toast.success('Image deleted successfully');
    } catch (error) {
        toast.error(error?.response?.data?.msg || 'Failed to delete image');
    }
    return redirect('/dashboard/gallery');
};

