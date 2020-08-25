const emp = require("../models/empModel");


async function updateprofile(req, res, next) {
    try{
      const Employee=await emp.findById(req.params.id);
      if(!Employee){
        return res.json({
          success:false,
          message:"Employee id doesnot exist",
        }); 
      }else{
        let updateEmp=await emp.findByIdAndUpdate(req.params.id,req.body,{
          new:true,
          runValdator:true
        });
        res.json({
          success:true,
          message:"emp updated successfully",
          employee:updateEmp
        });
      }
      }catch(err){
        return(error);
      }
    }
  


    module.exports = {updateprofile}