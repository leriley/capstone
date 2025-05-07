import { Form, redirect, useNavigation, Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import FormRow from '../components/FormRow';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const errors = {msh:""};
  if(data.password.length < 3) {
    errors.msh = 'password too short';
    return errors;
  }
  console.log('Form data:', data);

  try {
    const response = await customFetch.post('/auth/login', data);
    console.log('Backend Response:', response);
    toast.success('Login Successful');
    return redirect('/dashboard');
  } catch (error) {
    console.error('Login error:', error); 
    toast.error(error?.response?.data?.msg || 'Login failed');
    return null;
  }
};


const Login = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <Wrapper>
      <div className="page">
      <div className="container">
        <div className="card">
          <div className="title">
            <div className="title-login caveat">Login</div>
          </div>
        </div>
        <Form method="post" action="#" className="login-form" autoComplete="off">
          <div className="input-box">
            <label htmlFor="log-email" className="label">
              Username or Email
            </label>
            <input
              type="text"
              className="input-field"
              id="log-email"
              placeholder="Username or Email"
              name="usernameOrEmail"  
            />
            <span className="material-icons-outlined icon">person</span>
          </div>
          <div className="input-box">
            <label className="label" htmlFor="log-pass">
              Password
            </label>
            <input
              type="password"
              className="input-field"
              id="log-pass"
              name="password" 
              placeholder="Password"
            />
            <span className="material-icons-outlined icon">lock</span>
          </div>
          <div className="form-cols">
            <div className="col-1"></div>
            <div className="col-2">
              <Link to="/register">Don't have an account?</Link>
            </div>
          </div>
          <div className="input-box">
            <button className="btn-submit" id="SignInBtn" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Sign In'}
              <span className="material-icons-outlined">login</span>
            </button>
          </div>
          <div className="col-2">
            <Link to="/">Back Home</Link>
          </div>
        </Form>
      </div>
      </div>
    </Wrapper>
  );
};

export default Login;
