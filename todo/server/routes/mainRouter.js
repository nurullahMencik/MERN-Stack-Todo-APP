const express = require("express")
const router = express.Router();
const {sendMessage} = require("../help/help")
const textModel = require("../models/textModel")
router.get("/",async(req,res)=>{
    try{
        const text = await textModel.find().exec();
        return sendMessage(res,true,text);
    } catch(e){
        return sendMessage(res,false,`hata ${e}`)
    }
})

module.exports = router