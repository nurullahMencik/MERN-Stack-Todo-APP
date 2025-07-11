const express = require("express")
const router = express.Router()
const {sendMessage} = require("../help/help")
const textModel = require("../models/textModel")
router.put("/",(req,res)=>{
    try{
         if(!req.body){
         return sendMessage(res,false,"req.body yok");
      }

      const {text, _id} = req.body

      if(!text || !_id){
        return sendMessage(res,false,"veri iletilemedi");
      }
    if(_id.length !== 24){
        return sendMessage(res,false,"id uzunlugu hatası");
    }
      textModel.findByIdAndUpdate(_id,{text},{new:true})
      .then((e)=>{
        return sendMessage(res,true,e);
      })
      .catch((err)=>{
        console.log(err)
        return sendMessage(res,false,"hata");
      })

    }catch(e){
        return sendMessage(res,false,`hata edit : ${e}`)
    }
})

module.exports = router