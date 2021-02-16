import React from "react"
import Footer from "../components/footer"
import ImageSlider from "../components/imgSlider"
import { graphql, Link } from "gatsby"
import {
  Box,
  Text, Heading,
  Image,
  IconButton,
  Flex, Spacer,
  VStack, Center,
  Button,
  LinkBox,
  Grid, GridItem,
} from "@chakra-ui/react"
import {
  ChevronLeftIcon,
} from "@chakra-ui/icons"

export default function GamePage({data}) {
  const gameNow = data.allGoogleContentSheet.nodes[0]
  const slideGambar = [gameNow.gambar1, gameNow.gambar2, gameNow.gambar3, gameNow.gambar4].filter(e => e !== undefined)
  return (
  <>
    <Flex 
      pos="fixed"
      top="0"
      px={4}
      minH={20}
      w="100%"
      bgGradient="linear(to-br, blue.600, blue.400)"
      alignItems="center"
      zIndex={100}
    >
      <Link to="/">
        <IconButton aria-label="Back Button" size="lg" icon={<ChevronLeftIcon/>} display={{base:"initial", lg:"none"}}/>
        <Button size="lg" leftIcon={<ChevronLeftIcon/>} display={{base:"none", lg:"initial"}}>Kembali</Button>
      </Link>
      <Spacer/>
      <Heading fontSize={{base:"2xl", lg:"4xl"}} color="white" textAlign="right" isTruncated>{gameNow.judul}</Heading>
    </Flex>

    <Box 
      mt={20} 
      maxW="720px" 
      mx="auto" 
      pb={4} 
      borderX={{base:"0", lg:"2px"}} 
      px={{base:"0", lg:"2em"}}
    >
      {/* Mobile Layout */}
      <VStack>
        <Box mb={4}>
          <Image src={gameNow.cover} alt="cover image" fallbackSrc="https://via.placeholder.com/500?text=No+Image"/>
        </Box>
        <Center mb={2}>
          <Box
            borderRadius="md"
            alignItems="center"
            background="green.100"
            p={8}
            boxShadow="base"
          >
            <Text
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="md"
              textTransform="uppercase"
            >{gameNow.usia} tahun &bull; {gameNow.pemain} &bull; {gameNow.durasi}</Text>
          </Box>
        </Center>
        <Box>
          <Text mx={4} color="gray.700" textAlign="justify">{gameNow.deskripsi}</Text>
        </Box>
        <Box mb={2}>
          <ImageSlider images={slideGambar}/>
        </Box>
        <LinkBox as={Button}
          minWidth="75%"
          colorScheme="red"
          height={70}
          zIndex={90}
          href={gameNow.linkVideo} isExternal
          px={4} mb={2}
          boxShadow="md"
        >
          Liat Cara Bermain via Youtube
        </LinkBox>
        <Center bgGradient="linear(to-b, green.500, green.400)" minWidth="full" h={16}>
          <Text
            color="white"
            fontWeight="bold"
            letterSpacing="wide"
            fontSize="md"
            textTransform="uppercase"
          >Harga: {gameNow.harga}</Text>
        </Center>
        <VStack bgGradient="linear(to-b, green.400, green.200)" py={8} minW="full">
          <Text fontSize="2xl" fontWeight="semibold" textColor="white">Beli sekarang:</Text>
          <Grid templateColumns="repeat(3, 1fr)" gap={2} maxW="full" minW="full" px={4}>
            <GridItem w="100%">
              <LinkBox as={Button} colorScheme="teal" w="100%" boxShadow="md" h={20} zIndex={90} href={"https://wa.me/6283144342031/?Saya%20Mau%20Order%20"+gameNow.slug} isExternal>
                Order Via <br/> Whatsapp
              </LinkBox>
            </GridItem>
            <GridItem w="100%">
              <LinkBox as={Button} colorScheme="teal" w="100%" boxShadow="md" h={20} zIndex={90} href={gameNow.linkTokopedia} isExternal>
                Order Via <br/> Tokopedia
              </LinkBox>
            </GridItem>
            <GridItem w="100%">
              <LinkBox as={Button} colorScheme="teal" w="100%" boxShadow="md" h={20} zIndex={90} href={gameNow.linkShopee} isExternal>
                Order Via <br/> Shopee
              </LinkBox>
            </GridItem>
          </Grid> 
        </VStack>
      </VStack>
    </Box>
    <Footer />
  </>
  )
}

export const query = graphql`
  query ($slug: String!) {
    allGoogleContentSheet(filter: {listAktif: {eq: 1}, slug: {eq:$slug}}) {
      nodes {
        cover
        durasi
        deskripsi
        gambar1
        gambar2
        gambar3
        harga
        id
        judul
        kategori
        linkShopee
        linkTokopedia
        linkVideo
        mekanik
        nomor
        pemain
        slug
        usia
      }
    }
  }
`