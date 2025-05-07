import { Outlet, redirect, useLoaderData, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import customFetch from '../utils/customFetch';
import Wrapper from '../assets/wrappers/Dashboard';
import LogoutContainer from '../components/LogoutContainer';
import { createContext, useContext } from 'react';


export const loader = async() => {
  try {
    const {data} = await customFetch.get('/users/current-user')
    return data
  } catch (error) {
    return redirect('/')
  }
};

const DashboardContext = createContext();
export const useDashboardContext = () => useContext(DashboardContext);

const DashboardLayout = () => {
  
  const navigate = useNavigate();
  const { user } = useLoaderData();
  const logoutUser = async () => {
    navigate('/');
    await customFetch.get('/auth/logout');
    toast.success("Logging out...");
  };

  return (
    <DashboardContext.Provider value={{ user, logoutUser }}>
      <Wrapper>
        <section className="dashboard-home">
          <div className="header">
          <Link to="/dashboard"><h1>ImgStash</h1></Link>
            <span className="userOptions">
              <p>Welcome back, </p><LogoutContainer className="logoutContainer"/>
            </span>
          </div>
          <div className="actions">
          </div>
          <div className="imglayout actions">
            <Outlet/>
          </div>
        </section>
      </Wrapper>
    </DashboardContext.Provider>
  );
};

export default DashboardLayout