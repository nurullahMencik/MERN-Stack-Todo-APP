const express = require("express")
const router = express.Router();
const {sendMessage} = require("../help/help")
const textModel = require("../models/textModel")
router.post("/",(req,res)=>{
    try{
      if(!req.body){
        return sendMessage(res,false,"req.body yok");
      }

      const {text} = req.body

      if(!text){
        return sendMessage(res,false,"veri iletilemedi");
      }

      const addText = new textModel({
        text
      })

      addText.save()
      .then((e)=> {
        return sendMessage(res,true,e)
    }).catch((err)=>{
        console.log(err)
        return sendMessage(res,false,`veri kaydeilmedi !!! ${err}`)
    })



    } catch(err){
        console.log(err)
        return sendMessage(res,false,`veri kaydedilemedi ${err}`)
    }
})

module.exports = router