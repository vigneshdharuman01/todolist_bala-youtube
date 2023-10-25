import React from 'react'
import SearchItem from './SearchItem/SearchItem'
import ShowList from './SearchItem/ShowList/ShowList'

const Content = (props) => {
  const items=props.items;
  const setItems=props.setItems;
  const searchitems=props.searchitems;
  const setSearchitems=props.setSearchitems;
  return (
    <div className='content'>
      <SearchItem searchitems={searchitems} setSearchitems={setSearchitems}/>
      <ShowList items={items.filter(item=>(item.work).includes(searchitems))} setItems={setItems}  />
    </div>
  )
}

export default Content