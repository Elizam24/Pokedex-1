import { IoSearch } from "react-icons/io5";
import {useRef} from 'react'

function Search (handleSearch) {
  const inputRef =useRef ()

  const onSearch = () => {
    handleSearch(inputRef.current.value);
  };
  
    return (
   <div className='search'>
    <div className='search_input'>
    <IoSearch />
   <input type="text" placeholder='Buscar un pokemon'
  ref= {inputRef}/>
  </div>
    <button onClick={onSearch}>Buscar</button>
 </div>
  )
}
export default Search
