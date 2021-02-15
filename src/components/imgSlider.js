import React, { useState } from "react";
import {
  Flex,
  Image,
  IconButton,
  Center,
  Text,
  VStack,
  ButtonGroup,
  Spacer,
} from "@chakra-ui/react"
import {
  ChevronLeftIcon,
  ChevronRightIcon
} from "@chakra-ui/icons"

const ImageSlider = ({ images }) => { // takes in images as props
  const [index, setIndex] = useState(0) // create state to keep track of images index, set the default index to 0
  const slideRight = () => {
    setIndex((index + 1) % images.length); // increases index by 1
  }

  const slideLeft = () => {
    const nextIndex = index - 1
    if (nextIndex < 0) {
      setIndex(images.length - 1) // returns last index of images array if index is less than 0
    } else {
      setIndex(nextIndex);
    }
  }

  if (images.length > 0) {
    return (
      <>
      <VStack >
        <Image height={300} fit="cover" src={images[index]} alt="gambar ilustrasi" fallbackSrc="https://via.placeholder.com/500?text=No+Image"/>
        <ButtonGroup zIndex={90}>
          <IconButton width={100} aria-label="Slide Image Left" colorScheme="teal" icon={<ChevronLeftIcon/>} onClick={slideLeft}/>
          <Spacer width={8}/>
          <IconButton width={100} aria-label="Slide Image Right" colorScheme="teal" icon={<ChevronRightIcon/>} onClick={slideRight}/>
        </ButtonGroup>
      </VStack>
      </>
    )  
  } else {
    return (
      <>
      <Flex>
        <Center background="gray.200">
          <Text fontSize="2xl">Gambar Ilustrasi tidak ada</Text>
        </Center>
      </Flex>
      </>
    )
  }

  
}

export default ImageSlider;