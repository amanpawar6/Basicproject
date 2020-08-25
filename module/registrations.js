const userRegister=require("../model/empModel");
const bcrypt = require('bcrypt');
const saltRounds = 10;


function validatingEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validatingPhone(phone) {
    var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    return re.test(phone);
};



const registerUser =  function (req, res, next) {
   
 
  var {name,email,password,phoneno}=req.body;
 
    bcrypt.hash(password, saltRounds, function (err, hash) {
        if (err) {
            res.status(422).json({message:'password required'});
        }
        var newUser = new userRegister({"name":name,"email":email,"password":hash,"phone_no":phoneno});
        newUser.save().then(doc => res.status(201).json({message:"registered succesfully"})).catch(err => res.status(404).json({message:"Data is not valid"}));
    });
}
const validatingDetails = function(req, res, next){
    if (validatingEmail(req.body.email) && validatingPhone(req.body.phoneno)) {
        next();
    } else {
        
            return res.status(422).json({
                msg: 'Please Provide correct email or phone number'
            })
        
    }
}
var userExists = async function (req, res, next){
    var email = req.body.email;
    var phoneno=req.body.phoneno;
    const checkUser=await userRegister.find({ $or: [ { "email": email }, { "phone_no":phoneno }] } )
        
        if (checkUser.length > 0) {
          
                return res.status(409).json( {message: "user Already Exists"});
            
        } 
        else {
            next()
        }
    
}

module.exports={
    registerUser,
    validatingDetails,
    userExists
}