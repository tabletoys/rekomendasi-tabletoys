import React from "react"
import Footer from "../components/footer"
import { 
  Center,
  Heading,
  Text,
  VStack,
  Button
} from "@chakra-ui/react"
import {
  Link
} from "gatsby"

const NotFoundPage = () => (
  <>
  <Center h={{base:"80vh", lg:"85vh"}}>
    <VStack>
      <Heading fontSize="10em" bgGradient="linear(to-br,blue.600,green.300)" bgClip="text" fontWeight="extrabold">404</Heading>
      <Heading fontSize="xl" maxW="75%" textAlign="center" color="gray.500">Halaman yang anda akses tidak ditemukan</Heading>
      <Link to="/">
        <Button
          colorScheme="green"
          size="lg"
        >Kembali ke HOME</Button>
      </Link>
      <Text fontSize="sm" maxW="75%" textAlign="center" color="gray.500">Atau silahkan chat Whatsapp kami</Text>
    </VStack>   
  </Center>
  <Footer />
  </>
)

export default NotFoundPage
