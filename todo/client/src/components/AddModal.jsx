import {useSelector,useDispatch} from "react-redux"
import {closeAddModal } from "../stores/modal";
import { addData } from "../stores/data";
import { useState } from "react";
import axios from "axios"



const AddModal = () => {
  const [textArea,setTextArea] = useState("")
  const {addModal} = useSelector(state=>state.modal);
  const dispatch = useDispatch()

  const addTodo =async()=>{
    const formData = {text:textArea}
           let response= await axios.post("http://localhost:5000/add",formData)
           response = response.data
           if(response.type){                   // response.data.type
            setTextArea("")
            dispatch(addData(response.message)) // response.data.message
            dispatch(closeAddModal())
           }else{
            console.log("işlem başarısız!!!")
           }
  }

  return (
    <div className={addModal ? "modal active" : "modal"}>
      <div className="wrapper">
        <div className="topbar">
            <h3 className="mark">Todo App</h3>
            <button onClick={()=>dispatch(closeAddModal())}>X</button>
        </div>
        <form onSubmit={(e)=>{
          e.preventDefault()
          addTodo()
        }}>
            <div className='content'>
                <div className="area">
                    <textarea 
                    style={{color:"white",fontSize:"20px"}}
                    required="required"
                    value={textArea}
                    onChange={(e)=>setTextArea(e.target.value)}
                    />
                    <span>Add New List</span>
                </div>
                <div className="buttons">
                    <button onClick={()=>dispatch(closeAddModal())} type='button'>Cancel</button>
                    <button type='submit'>ADD</button>
                </div>
            </div>
        </form>
        
      </div>
    </div>
  )
}

export default AddModal
