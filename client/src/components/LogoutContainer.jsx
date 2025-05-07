import { FaUserCircle, FaCaretDown } from 'react-icons/fa';
import Wrapper from "../assets/wrappers/LogoutContainer";
import { useState } from 'react';
import { useDashboardContext } from '../pages/DashboardLayout';
import { Link } from 'react-router-dom'; 

const LogoutContainer = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { user, logoutUser } = useDashboardContext();

  return (
    <Wrapper>
      <Link
        to="#"
        className="logout-link"
        onClick={(e) => {
          e.preventDefault(); 
          setShowLogout(!showLogout);
        }}
      >
        {user.avatar? (
           <img src={user.avatar} alt='avatar' className='img'/>
       ) : (
        <FaUserCircle className="icon" />
      )}
        {user?.username}
        <FaCaretDown className="icon" />
      </Link>
      <div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
        <Link to="/dashboard/upload" className="dropdown-btn">
            Upload
        </Link>
        <Link to="/dashboard/gallery" className="dropdown-btn">
            Gallery
        </Link>         
        <Link to="/profile" className="dropdown-btn">
            Profile
        </Link>
        <button className="dropdown-btn" onClick={logoutUser}>
          Logout
        </button>
      </div>
    </Wrapper>
  );
};

export default LogoutContainer;
