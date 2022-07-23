import React, { Component } from 'react'
import { AppBar, Toolbar, Box, styled, Typography } from '@mui/material'
import Search from './Search';
const logoURL = "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

const StyledHeader = styled(AppBar)`
background-color:#2874f0 ;
height: 55px ;
`
const ComponentBox = styled(Box)`
margin-left : 12%;
line-height: 0 ;
`

const SubHeading = styled(Typography)`
    font-size:10px ;
    font-style:italic ;
`

const Plus = styled("img")({
    width: 10,
    height: 10,
    marginLeft:4,
})


const Header = () => {
  return (
    <StyledHeader>
      <Toolbar style={{minHeight:55}}>
        <ComponentBox>
          <img style={{ width: "75px" }} src={logoURL} alt="Flip kart logo" />
          <Box style={{display:"flex"}}>
            <SubHeading>
              Explore &nbsp;
              <Box component="span" style={{ color: "#FFE500" }}>
                Plus
              </Box>
            </SubHeading>
            <Plus src={subURL} alt="sub-url" />
          </Box>
              </ComponentBox>
              <Search />
      </Toolbar>
    </StyledHeader>
  );
}

export default Header