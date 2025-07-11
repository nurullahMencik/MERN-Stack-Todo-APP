import {useSelector,useDispatch} from "react-redux"
import {closeEditModal} from "../stores/modal";
import { editData } from "../stores/data";
import { useEffect, useState } from "react";
import axios from "axios"



const EditModal = () => {
  const [textArea,setTextArea] = useState("")
  const {editModal,singleData} = useSelector(state=>state.modal);
  const dispatch = useDispatch()

  useEffect(()=>{
    if(singleData.text){
      setTextArea(singleData.text)
    }
  },[singleData])

  const updateTodo =async()=>{
    const formData = {_id:singleData._id,text:textArea}
           let response= await axios.put("http://localhost:5000/edit",formData)
           response = response.data
           if(response.type){                   // response.data.type
            setTextArea("")
            dispatch(editData(formData)) 
            dispatch(closeEditModal())
           }else{
            console.log("işlem başarısız!!!")
           }
  }

  return (
    <div className={editModal ? "modal active" : "modal"}>
      <div className="wrapper">
        <div className="topbar">
            <h3 className="mark">Todo App</h3>
            <button onClick={()=>dispatch(closeEditModal())}>X</button>
        </div>
        <form onSubmit={(e)=>{
          e.preventDefault()
            updateTodo()
        }}>
            <div className='content'>
                <div className="area">
                    <textarea 
                    style={{color:"white",fontSize:"20px"}}
                    required="required"
                    value={textArea}
                    onChange={(e)=>setTextArea(e.target.value)}
                    />
                   
                </div>
                <div className="buttons">
                    <button onClick={()=>dispatch(closeEditModal())} type='button'>Cancel</button>
                    <button type='submit'>Update</button>
                </div>
            </div>
        </form>
        
      </div>
    </div>
  )
}

export default EditModal
