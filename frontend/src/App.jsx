import {useEffect, useState} from 'react'
import { useSearchParams} from "react-router-dom";

import Header from "./Components/ui/Header"
import Paginate from "./Components/ui/Paginate"
import Container from "./Components/ui/Container"
import styled from "styled-components"
const StyledTable= styled.table`
border:1px solid #ddddc6;
font-size:1.4rem;

border-radius:7px;
overflow:hidden;
`
const StyledHeader= styled.tr`
width: 100%;
display: grid;
grid-template-columns: 33fr 33fr 33fr;
`
function App() {
  
  const [loading,setLoading]=useState(false);
  const [data,setData]=useState([]);
  const [error,setError]=useState("");
  const [searchParams]=useSearchParams()
  const limit=Number(searchParams.get('limit'))||1;
  const currentPage=Number(searchParams.get('page'))||1;
 
  const startindex = (currentPage - 1) * limit;
  const endindex = startindex + limit;
useEffect(()=>{
 async function getData(){
  try{
    setLoading(true);
    setError("")
    const res = await fetch(`https://swapi.dev/api/starships`);
  const data=await res.json();
    if(data.results)
    {
    
      setData(data.results);
   
    }
 
    setLoading(false);
  }

  catch(err)
  {
    setError(err.message);
  }
  }
  getData();
},[])

  return (
    
    <Container>
    <Header />
    {loading&&<p>Loading...</p>}
     {error&&<p>{error}</p>}
     <StyledTable>
     <StyledHeader>

      <td>Name</td>
      <td>Cost</td>
      <td>Manufacturer</td>
    
     </StyledHeader>

     {
      !loading&&!error&&data.slice(startindex, endindex).map(el=>{
        return (

          <StyledHeader>
            <td>{el.name}</td>
            <td>{el.cost_in_credits}</td>
            <td>{el.manufacturer}</td>
          </StyledHeader>
        )
       
      })

     }
 
     </StyledTable>
     <Paginate count={data.length} />
        </Container>
      
    
  )
}

export default App
