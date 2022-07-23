import React from 'react'
import SearchIcon from "@mui/icons-material/Search";
import { InputBase, Box, styled } from "@mui/material";

const InputBaseCSS = styled(Box)`
  background-color:#fff ;
  width:38% ;
  margin-left: 10px;
  border-radius:5px ;
  display:flex ;
`
const InputSearchBase = styled(InputBase)`
padding-left:20px;
width:100% ;
`
const SearchIconWrapper = styled(Box)`color:blue;
padding:5px ;
`

const Search = () => {
    return (
      <InputBaseCSS>
        <InputSearchBase placeholder="search for Product Brand and more" />
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
      </InputBaseCSS>
    );
}

export default Search