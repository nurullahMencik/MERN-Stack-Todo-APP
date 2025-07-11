import React from 'react'
import { TiDelete } from "react-icons/ti";
import {useDispatch} from "react-redux"
import { MdEdit } from "react-icons/md";
import axios from 'axios';
import { openEditModal } from '../stores/modal';
import { deleteData } from '../stores/data';

const ListItem = ({value}) => {
  const {_id,text}=value
  const dispatch = useDispatch()

  const deleteTodo = async(_id)=>{
    const formData = {_id:_id}
    let response = await axios.delete("http://localhost:5000/delete",{data:formData})
    response =response.data.type
    if(response){
      dispatch(deleteData(formData))
    }
  }
  const updateTodo = async()=>{
    dispatch(openEditModal(value))
  }

  return (
      <div className="listItem">
                    <section>{text}</section>

                    <button className="editButton" onClick={()=>updateTodo()}><MdEdit /></button>
                    <button className="deleteButton" onClick={()=>deleteTodo(_id)}><TiDelete /></button>
                </div>
  )
}

export default ListItem
