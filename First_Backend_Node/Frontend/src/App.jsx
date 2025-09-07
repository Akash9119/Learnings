import { useState } from 'react'
import './App.css'
import axios from 'axios';
import { useEffect } from 'react';
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
   axios.get('/api/data').then(response => {
    setData(response.data);
  }).catch(
    console.log("Error while fatching the data api")
  )
  }, [])

  return (
    <>
      <h1>Getting Content from the First Backend App: {data.length}</h1>
      {
        data.map((detials) => {
          return (
            <div key={detials.id}>
            <h3>Data id is: {detials.id}</h3>
            <h4>Data Title is: {detials.title}</h4>
            <h4>Data Description is: {detials.desc}</h4>
          </div>
          )
        })
      }
    </>
  )
}

export default App
