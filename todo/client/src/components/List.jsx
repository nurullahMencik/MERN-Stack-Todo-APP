import React from 'react'
import ListItem from './ListItem'
import { useSelector } from 'react-redux'

const List = () => {
  const {data} = useSelector(state=>state.dataAllProcess)
  return (
         <div className="list">
            <h1 className='listMark'>Todo List</h1>
                {
                   data&& data.map((value)=>(
                     <ListItem key={`${value._id}-${value.text}`} value={value}/>
                  ))
                }
            </div>
  )
}

export default List
