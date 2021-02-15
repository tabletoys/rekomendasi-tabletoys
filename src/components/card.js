import React from "react"
import {
  Box,
  Image,
  Badge,
  Text,
} from "@chakra-ui/react"
import {Link} from "gatsby"

const Card = (props) =>{
  return (
    <>
    <Link to={"/bg/"+props.slug}>
    <Box 
      as="button"
      ref={props.cardRef}
      maxW={["sm", "sm", "xs"]} 
      borderWidth="2px" 
      borderRadius="md" 
      overflow="hidden" 
      minW="xs" 
      m="2" 
      key={props.index}
      // onClick={props.klikEvent}
      _hover={{boxShadow:"xl"}}
    >
      <Image src={props.imgSrc} alt="cover image" fallbackSrc="https://via.placeholder.com/500?text=No+Image" />
      <Box p="6">
        <Box d="flex" alignItems="center" justifyContent="center">
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {props.usia} tahun &bull; {props.pemain} &bull; {props.waktu} 
          </Box>
        </Box>

        <Box
          mt="1"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          <Text fontSize="1.5em" fontWeight="semibold">{props.judul}</Text>
        </Box>

        <Box>
          {props.harga}
        </Box>

        <Badge colorScheme="blue" variant="solid">{props.kategori}</Badge>
      </Box>
    </Box>
    </Link>
    </>
  )
}

export default Card