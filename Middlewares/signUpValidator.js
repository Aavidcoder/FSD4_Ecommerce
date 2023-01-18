const {User} = require("../models");

const checkDuplicateEmailOrUserName = (req,res,next) => {

    const{userName,email} = req.body;

    const checkUserName =  User.finfOne({
        where:{
            userName:userName
        }
    });

    const checkEmail = User.finfOne({
        where:{
            email:email
        }
    });

    Promise.all([checkUserName,checkEmail])
    .then((users) => {
        if(users[0] || users[1]){
            res.status(400).send({message:"Failed! Username or email is already in use"});
            return;
        } 
        next();
    })
    .catch((err) => {
        res.status.send({message:err.message || "Something went wrong"})
    })
}


const verifySignUp = {
    checkDuplicateEmailOrUserName
}

module.exports = verifySignUp;