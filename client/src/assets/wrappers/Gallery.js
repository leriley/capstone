import styled from 'styled-components';

const Wrapper = styled.main`
.galleryWrap {
    display: block;
    justify-content: center;
}
.gallery {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
    flex-grow: 0;
    margin-top: 20px;
}

  img {
    display: flex;
    width: 200px;
    max-width: 600px;
  }
 
  h2 {
    color: #777777;
  }

  .image-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .loading {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #777777;
  }

  .load {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #777777;
  }

`;

export default Wrapper;
