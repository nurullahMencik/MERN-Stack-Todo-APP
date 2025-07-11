import {configureStore} from "@reduxjs/toolkit"
import modal from "./modal"
import dataAllProcess from "./data"
const store = configureStore ({
    reducer:{
        modal,
        dataAllProcess
    }
})

export default store

