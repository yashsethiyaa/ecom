const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../models/User')



//register
const registerUser = async(req , res)=>{
    const {userName, email, password} = req.body;

    try{
        const hashPassword = await bcrypt.hash(password,12);
        const newUser = new User({
            userName,
            email,
            password : hashPassword,
        })


        await newUser.save()
        res.status(200).json({
            success : true,
            message : 'User registered successfully'
        })


    }catch(e){
        console.log(e);
        res.status(500).json({
            success : false,
            message : 'some error occured'
        });
    }
};



//login

const login = async(req , res)=>{
    const {email, password} = req.body;

   
   
    try{
        const checkUser = await User.findOne({email}); 

    }catch(e){
        console.log(e);
        res.status(500).json({
            success : false,
            message : 'some error occured'
        });
    }
}


//logout



//auth middleware


module.exports = { registerUser};
