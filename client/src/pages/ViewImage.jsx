import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'; 
import customFetch from '../utils/customFetch';
import Wrapper from '../assets/wrappers/ImagePage';
import { Link } from 'react-router-dom';
import { Form } from 'react-router-dom';
import { useDashboardContext } from './DashboardLayout';

const ViewImage = () => {
    const { imageId } = useParams();
    const [image, setImage] = useState(null);
    //to grab the user data you gotta get the dashboard context and put the variable name in curley braces
    const { user } = useDashboardContext()


    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await customFetch.get(`/images/${imageId}`);
                setImage(response.data.image); 
            } catch (error) {
                console.error('Error fetching image:', error);
            }
        };
  
        fetchImage();
    }, [imageId]);

    if (!image) {
        return <div>Loading...</div>;
    }
    
    return (
        <Wrapper>
            <div className="page-container">
                <div className="image-wrapper">
                <Link to="/dashboard" className="link">{'<'}{'<'}Back Home</Link>           
                    <div key={image._id} className="image-item">
                        <img src={image.filePath} alt={image.title} />
                        <h4>{image.title}</h4>
                        <Link to={`/user-profile/${image.createdBy._id}`}>
                            <p>Created by: {image.createdBy.username}</p>
                        </Link>
                        <p>{image.description}</p>
                    </div>
                </div>
            </div>
            {/* since the id has an underscore in the database data you gotta add that too to grab the actual id value*/}
            <div className="options">
                {user?._id === image.createdBy._id && (
                    <Form method='post' action={`../delete-images/${imageId}`}>
                        <button type='submit' className='btn delete-btn'>Delete</button>
                    </Form>       
                )}
                {user?._id === image.createdBy._id && (
                    <Link to={`../edit-images/${image._id}`} className='btn edit-btn'>Edit
                    </Link>
                )}
            </div>
        </Wrapper>
    );
};

export default ViewImage;
