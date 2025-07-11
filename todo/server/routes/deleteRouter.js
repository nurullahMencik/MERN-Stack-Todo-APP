const express = require("express")
const router = express.Router()
const textModel = require("../models/textModel")
const {sendMessage} = require("../help/help")


router.delete("/",(req,res)=>{
    try{
        if(!req.body){
           return sendMessage(res,false,"req.body yok")
        }
        const {_id} = req.body

        if(!_id || _id.length !==24){
        return sendMessage(res,false,"veri iletilemedi")
        }

        textModel.findByIdAndDelete(_id)
        .then((e)=>{
            return sendMessage(res,true,"veri silindi")
        })
        .catch((err)=>{
            return sendMessage(res,true,"veri silinemedi")
        })
 

    } catch(e){
        return sendMessage(res,true,`delete hata : ${e}`)
    }
})

module.exports = router