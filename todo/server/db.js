const mongoose =require("mongoose")

const DB_URL = "mongodb://127.0.0.1:27017"


const conn = ()=>{
    mongoose.connect(DB_URL,{dbName:"todo"})
    .then(()=>{
        console.log("Db Connected")
    })
    .catch((erorr)=>{
        console.log(`DB error ${erorr}`)
    })
 
}

module.exports = conn


