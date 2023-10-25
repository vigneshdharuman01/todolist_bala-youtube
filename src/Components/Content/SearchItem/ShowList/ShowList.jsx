import React from 'react'
import './ShowList.css'
import {LuDelete} from 'react-icons/lu'

const ShowList = ({items,setItems}) => {

  const handleCheck=(id)=>{
    const listItems=items.map((item)=> item.id===id?{...item,checked:!item.checked}:item)
    setItems(listItems)
  }
  const handleDelete=(id)=>{
    const listItems=items.filter((item)=>item.id!==id )
    setItems(listItems)
  }
  
  return (
    <div className='showlist'>
     <div className="box"> 
     {(items.length)?(
       <ul>
       {items.map((item)=>(
        <li key={item.id}>
        <input type="checkbox"
         checked={item.checked }
          onChange={()=>{handleCheck(item.id)}}  />
        <p style={(item.checked)?{textDecoration:"line-through"}:null} 
        onDoubleClick={ ()=>{handleCheck(item.id)}}>
            {item.work}
            </p>
        <LuDelete role='button' tabIndex={0} className='button' onClick={()=>{handleDelete(item.id)}}/>
      </li>
       ))}
      </ul>
     ):(
      <h3>Your List Is Empty </h3>
     )}
     
     </div>
    </div>
  )
}

export default ShowList