const express=require('express');
const router=express.Router();
const empModel=require('../model/empModel');


router.get('/delete',(req,res)=>{
    let id=req.body.id;
    empModel.findByIdAndDelete(id,function(error){
        if(error){
            return res.status(404).send("not found");
        }
        return res.status(200).send(`user deleted on ${id}`);
    })

});



module.exports=router;