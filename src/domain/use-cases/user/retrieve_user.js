const User = require("../../entities/user");

exports.retrieve_user=(req,res)=>{

    User.find()
    .then((users)=>{
        res.status(200).send(users);
    })
    .catch(error=>res.status(500).json({error}));
}
