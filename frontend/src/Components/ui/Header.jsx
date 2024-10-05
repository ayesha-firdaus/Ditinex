import Button from "../ui/Button"
import {useState} from "react"
import {useSearchParams} from "react-router-dom"
export default function Header(){
const [limit,setLimit]=useState(1)
const [page,setPage]=useState(1)
const [searchParams, setSearchParams] = useSearchParams();
function HandleClick()
{
 

    setSearchParams({
        limit: limit.toString(),  // Ensure these are strings
        page: page.toString(),
      });


}
    return (
        <>
        <div>
        <input type="text" onChange={(e)=>setLimit(e.target.value)} value={limit}/>
        <Button text="Limit" onClick={HandleClick}/> 
        
        </div>
        </>
  
    )
}