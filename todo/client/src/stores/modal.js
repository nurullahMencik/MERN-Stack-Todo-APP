import { createSlice } from "@reduxjs/toolkit";

const initialState={
    addModal:false,
    editModal:false,
    singleData:{}
}

const modal = createSlice({
    name : "modal",
    initialState,
    reducers : {
        openAddModal:(store)=>{
            store.addModal=true
        },
        closeAddModal:(store)=>{
            store.addModal=false
        },
         openEditModal:(store,action)=>{
            store.singleData = action.payload
            store.editModal=true
        },
        closeEditModal:(store)=>{
            store.editModal=false
        }

    }
})

export const {openAddModal,closeAddModal,openEditModal,closeEditModal} = modal.actions
export default modal.reducer