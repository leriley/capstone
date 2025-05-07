import { Form, redirect, useNavigation, Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import FormRow from '../components/FormRow';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';


export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.post('/auth/register', data);
    toast.success('Registration successful!');
    return redirect('/login');
  } catch (error) {
    const msg = error?.response?.data?.msg || 'Registration failed';
    toast.error(msg);

    // Return the message so you can display it if needed
    return { error: msg };
  }
};




const Register = () => {
  const navigation = useNavigation()
  console.log(navigation);
  const isSubmitting = navigation.state === 'submitting';
  return (
  <Wrapper>
    <div className="page">
    <div className="container">
        <div className="card">
            <div className="title">
                <div className="title-register caveat">Register</div>
            </div>
        </div>
        <Form method="post" className="login-form" autoComplete="off">
        <div className="input-box">
          <FormRow type="email" name="email" labelText="Email" />
          <span className="material-icons-outlined icon">mail</span>
        </div>

        <div className="input-box">
          <FormRow type="text" name="username" labelText="Username" />
          <span className="material-icons-outlined icon">person</span>
        </div>

        <div className="input-box">
          <FormRow type="password" name="password" labelText="Password" />
          <span className="material-icons-outlined icon">lock</span>
        </div>

        <div className="form-cols">
          <div className="col-1"></div>
          <div className="col-2">
            <Link to="/login">Already have an account?</Link>
          </div>
        </div>

        <div className="input-box">
          <button className="btn-submit" id="SignInBtn" disabled={isSubmitting}> 
            {isSubmitting ? 'Submitting...':'Sign Up'} <span className="material-icons-outlined">login</span>
          </button>
        </div>
        <div className="col-2">
            <Link to="/" >Back Home</Link>
          </div>
      </Form>
      </div>
    </div>
  </Wrapper>
)}

export default Register