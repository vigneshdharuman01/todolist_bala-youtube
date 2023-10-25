import React from 'react'
import './SearchItem.css'

const SearchItem = (props) => {
  console.log(props.searchitems)

  const handleSubmit=(e)=>{
    e.preventDefault()
    if(!props.searchitems) return;
    props.setSearchitems('')
    
  }
  return (
    <div className='search-item'>
        <div className="box">
          <form action="" onSubmit={handleSubmit}>
          <p>search your tasks</p>
            <div className="search-box">
                <input type="text" placeholder='Add Item' required value={props.searchitems} onChange={(e)=>props.setSearchitems(e.target.value)}/>
                <button type='submit'>search</button>
            </div>
          </form>
           
        </div>
    </div>
  )
}

export default SearchItem