import React from "react"
import { readRemoteFile } from "react-papaparse"

const hasil = () => {
  readRemoteFile('https://docs.google.com/spreadsheets/d/e/2PACX-1vTlsBCr1UVrqUQ0lU3w_kE-rMvwIE_WNQw4irxeiOUgIgsgf-amyC5S6t6DKq1bZw/pub?gid=1890194504&single=true&output=csv', {
    download: true,
    header: true,
    delimiter: ',',
    dynamicTyping: true,
    step:(row) => {
      return (
        console.log(row.data.kategori),
        <h1> Hasil :</h1>
      )
    },
    complete: () => {
      return (
        <h1>Finish</h1>
      )
    }
  })
  return <h1>Finish2</h1>
}

// function WebData(){
  
//   return null
// }

export default hasil