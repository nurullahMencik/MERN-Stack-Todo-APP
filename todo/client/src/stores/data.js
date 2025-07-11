import { createSlice } from "@reduxjs/toolkit"; 
import axios from "axios"


const response = await axios.get("http://localhost:5000/")
const responseData = response.data.message

const initialState = {
    data : responseData
}

const allDataProcess = createSlice({
    name:"allDataProcess",
    initialState,
    reducers :{
        addData:(state,action)=>{
            state.data = [...state.data,action.payload]
        },
        deleteData:(state,action)=>{
            let newData = state.data.filter(item=>item._id !==action.payload._id)
             state.data=newData
        },
        editData:(state,action)=>{
            let updatedData = state.data.map(item=>item._id === action.payload._id ? 
            action.payload : item )
            state.data = updatedData
        },
        searchData:(state,action)=>{
            let newData = responseData.filter(item=>item.text.
            toLowerCase().startsWith(action.payload.toLowerCase()))
            state.data = newData
        }
    }
})

export const {addData,deleteData,editData,searchData} = allDataProcess.actions
export default allDataProcess.reducer