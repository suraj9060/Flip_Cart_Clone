import React from 'react'
import { AppBar, Toolbar, Box, styled } from '@mui/material'

const StyledHeader = styled(AppBar)`
background-color:#2874f0 ;
height: 55px ;
`


const Header = () => {
  return (
    <StyledHeader>
          <Toolbar>
              <Box>
                  
              </Box>
      </Toolbar>
    </StyledHeader>
  )
}

export default Header