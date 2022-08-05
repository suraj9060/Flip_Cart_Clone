import React, { Fragment } from 'react'
import { Box , styled } from '@mui/material';
import NavBar from './NavBar'
import Banner from './Banner';


const Component = styled(Box)` 
   padding:10px 20px;
   background:#f2f2f2 ;

`

const Home = () => {
  return (
    <Fragment>
      <NavBar />
      <Component>
        <Banner />
      </Component>
    </Fragment>
  );
}

export default Home