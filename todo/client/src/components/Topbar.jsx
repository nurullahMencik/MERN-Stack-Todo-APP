import React, { useState } from 'react'
import { useDispatch} from 'react-redux'
import { openAddModal } from '../stores/modal'
import { searchData } from '../stores/data'
const Topbar = () => {
const dispatch = useDispatch()
const [inputvalue,setInputValue]=useState("");


  return (
    <div className='topbar'>
      <div className="mark">TodoApp</div>
            <div className="searchTerm">
                <input type="text"
                 placeholder='ara'
                 required="required"
                 value={inputvalue}
                 onChange={(e)=>{setInputValue(e.target.value);
                 dispatch(searchData(e.target.value))
                } }
      
                  />
            </div>
            <div className='addButton'>
              <button onClick={()=>dispatch(openAddModal())}>Ekle</button>
            </div>
    </div>
  )
}

export default Topbar
