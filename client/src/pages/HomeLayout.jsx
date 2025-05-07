import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom';

const HomeLayout = () => {
  return (
    <div>
    <header>
    </header>
      <Outlet /> {/* Child routes will be rendered here */}
    </div>
  );
};
export default HomeLayout