import { Link, useRouteError } from 'react-router-dom'
import Wrapper from '../assets/wrappers/ErrorPage';
import img from '../assets/images/notfound.svg';

const Error = () => {
    const error = useRouteError();

    if(error.status === 404) {
    return <Wrapper>
      <div className="body">
      <div>
        <img src={img} alt="Not found" />
        <h3>Page Not Found</h3>
        <p>We can't seem to find the page you are looking for</p>
        <Link to="/dashboard" className="link">Back Home</Link>
      </div>
      </div>
    </Wrapper>
    }
    return (
      <Wrapper>
        <div>
          <h3>Something went wrong</h3>
        </div>
      </Wrapper>
  );
};
export default Error