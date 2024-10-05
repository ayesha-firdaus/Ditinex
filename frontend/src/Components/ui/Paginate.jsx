import React from 'react';
import { useSearchParams } from 'react-router-dom';
import Button from '../ui/Button';
export default function Paginate({count})
{    const [searchParams,setSearchParams]=useSearchParams();
const limit=searchParams.get('limit')&& Number(searchParams.get('limit'));
if(!limit)
{
    return null;
}
const currentPage=searchParams.get('page')?Number(searchParams.get('page')):1;
const PageCount=Math.ceil(count/limit);
if( PageCount<=1)
{
    return null;
}
function nextPage()
{
    const next=currentPage=== PageCount? currentPage:currentPage+1;
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('page', next);
    setSearchParams(newSearchParams);


}
function previousPage() {
    const previous = currentPage === 1 ? currentPage : currentPage - 1;
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('page', previous);
    setSearchParams(newSearchParams);
  }
    return (
        <>
            <Button text="previous" onClick={previousPage} disabled={currentPage===1} />
            <Button text="next" onClick={nextPage} disabled={currentPage === PageCount} />
        </>   


    )
}