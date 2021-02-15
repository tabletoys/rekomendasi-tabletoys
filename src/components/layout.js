import React from "react"
import {
  Box,
} from "@chakra-ui/react"


const Layout = ({children}) => {
  return(
    <Box mt={20} mb={8}>
      {children}
    </Box>
  )
}

export default Layout
