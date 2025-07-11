//gerekli  olan paketler
const express = require("express")
const {join} = require("path")
const dbs = require("./db")


//db connect
dbs();



//başlangıç ayarları 
const app = express();




//değişkenler ve diziler

const PORT = 5000;
const BACKEND_URL="http://127.0.0.1:5000"

//middleware
app.use(express.json())


//cors ayarları 
const cors = require("cors");
app.use(cors());

// yönlendirme doyslarının dahil edildildiği alan
const mainRouter = require("./routes/mainRouter")
const editRouter = require("./routes/editRouter")
const deleteRouter =require("./routes/deleteRouter")
const addRouter =require("./routes/addRouter")


// yönlendirme dosyalarının kullanıldıgı alan
app.use("/",mainRouter)
app.use("/edit",editRouter)
app.use("/delete",deleteRouter)
app.use("/add",addRouter)




//portu dinleme 

app.listen(PORT,()=>{
    console.log(`Sunucu çalışıyor : ${BACKEND_URL}`)
})