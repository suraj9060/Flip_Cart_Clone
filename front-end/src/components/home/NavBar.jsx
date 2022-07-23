import React from 'react'
import { navData } from '../../ConstentData/data'
import { Box,styled , Typography} from '@mui/material';


const Component = styled(Box)` 
 display:flex ;
 align-items:center ;
 justify-content:space-between ;
 width: 80% ;
 margin:55px 130px 0 130px ;
`

const Container = styled(Box)` 
  padding:12px 8px ;
  text-align:center ;
`
const Text = styled(Typography)` 
font-size:14px ;
font-weight:600 ;
font-family: inherit;
`

const NavBar = () => {
  return (
    <Component style={{ display: "flex"}}>
      {navData.map((ele) => (
        <Container>
          <img src={ele.url} alt={"nav"} style={{width:64}} />
          <Text>{ele.text} </Text>
        </Container>
      ))}
    </Component>
  );
}

export default NavBar