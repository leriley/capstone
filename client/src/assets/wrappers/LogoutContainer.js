import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;

  .logout-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 0.5rem;
  }

  .img {
    width: 25px;
    height: 25px;
    border-radius: 50%;
  }

  .logout-link:hover {
    color: #1DCD9F;
}


  .logout-link {
    color: inherit;         
    display: inline-flex;  
    align-items: center;    
    gap: 0 0.5rem;
    color: #777777;
    font-size: 20px;
    text-decoration: none;
    cursor: pointer;
  }

  .dropdown {
    position: absolute;
    top: 35px;
    left: 0;
    width: 100%;
    box-shadow: var(--shadow-2);
    text-align: center;
    visibility: hidden;
    border-radius: var(--border-radius);
    background: var(--primary-500);
  }

  .show-dropdown {

    visibility: visible;
    background: rgba(0,0,0,0.5);
    width: 100px;
  }

  .dropdown-btn {
    color: #222222 !important;
    all: unset;
    display: block;
    width: 100%;
    text-align: center;
    border-radius: var(--border-radius);
    padding: 0.5rem 1rem;
    color: var(--white);
    cursor: pointer;
    font-size: 1rem;
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing);
    background: transparent;
    text-decoration: none;
    background-color: #1DCD9F;
    margin: 2px;
  }

  .dropdown-btn:hover {
    color: #222222;
    text-decoration: underline;
  }
`;

export default Wrapper;
