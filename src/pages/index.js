import React, { useState, useRef } from "react"
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Center,
  Flex,
  Box,
} from "@chakra-ui/react"
import { ChevronDownIcon } from '@chakra-ui/icons'
import Footer from "../components/footer"
import Layout from "../components/layout"
import Card from "../components/card"
import { graphql } from "gatsby"

const Home = ({data}) => {
  console.log(data)
  const btnRef = useRef()
  const listKategori = data.allGoogleContentSheet.distinct
  const listBarang = data.allGoogleContentSheet.edges
  const [selectedItems, setSelected] = useState("Semua Kategori")

  const items = listKategori.map((list, index) =>
    <MenuItem key={index} onClick={() => listClick(list)}>{list}</MenuItem>
  )


  const [gameData, setGameData] = useState(
    listBarang.map(({node}, index) =>
      <Card 
        key = {index}
        imgSrc = {node.cover}
        usia = {node.usia}
        pemain = {node.pemain}
        waktu = {node.durasi}
        judul = {node.judul}
        harga = {node.harga}
        kategori = {node.kategori}
        cardRef = {btnRef}
        slug = {node.slug}
      />
    ) 
  )

  function listClick(input){
    setSelected(input)
    setGameData(
      listBarang.filter(list => {
        if (input === "Semua Kategori") {
          return list
        } else {
          return list.node.kategori === input
        }
      }).map(({node}, index) =>
        <Card 
          key = {index}
          imgSrc = {node.cover}
          usia = {node.usia}
          pemain = {node.pemain}
          waktu = {node.durasi}
          judul = {node.judul}
          harga = {node.harga}
          kategori = {node.kategori}
          cardRef = {btnRef}
          slug = {node.slug}
        />
      )
    )
  }

  return(
    <>
    <Center pos="fixed" top="0" minH={20} w="100%" bgGradient="linear(to-br, blue.600, blue.400)">
      <Menu>
        <MenuButton as={Button} mx={[4,12,20,20]} w="100%" rightIcon={<ChevronDownIcon/>}>
          {selectedItems}
        </MenuButton>
        <MenuList minW="full">
          <MenuItem onClick={() => listClick("Semua Kategori")}>Semua Kategori</MenuItem>
          {items}
        </MenuList>
      </Menu>
    </Center>

    <Layout>
      <Flex flexFlow="row wrap" justify="center" alignItems="baseline" >
        {gameData}
      </Flex>
    </Layout>

    <Footer />
    </>
  )
}

export const query = graphql`
  query kategori {
    allGoogleContentSheet(sort: {fields: nomor, order: DESC}, filter: {listAktif: {eq: 1}}) {
      distinct(field: kategori)
      edges {
        node {
          deskripsi
          id
          kategori
          durasi
          harga
          judul
          mekanik
          pemain
          slug
          usia
          cover
        }
      }
    }
  }
`

export default Home
