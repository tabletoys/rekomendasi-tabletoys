import React from "react"
import {
  Text,
  Flex,
  VStack,
  Link,
} from "@chakra-ui/react"


const Footer = () => {
  return (
    <>
      <div>
        <Flex align="center" justify="center" bgGradient="linear(to-br, blue.600, blue.400)" py="10">
          <footer>
          <VStack>
            <Text color="white">© 2020 - {new Date().getFullYear()} by Tabletoys</Text>
            <Text as="em" color="white">Create by{" "}<Link color="red.200" href="https://instagram.com/david.sun2so" isExternal>David Santoso</Link></Text>
          </VStack>
          </footer>
        </Flex>
      </div>
    </>
  )
}

export default Footer
