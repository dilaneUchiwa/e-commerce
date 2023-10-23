const {z}=require('zod');

function addUserSchema(){
    return z.object({
        name:z.string('name is required'),
        sexe:z.string('sexe is required'),
        birthDate:z.date('birhDate is required'),
        password:z.string('password is required')
    });
}

function addAdminSchema(){
    return z.object({
        user_id:z.string('user_id is required')
    });
}

function editUserSchema(){
    // return z.object({
    //     user_id:z.string('user_id is required'),
    //     name:z.string('name is required'),
    //     sexe:z.string('sexe is required'),
    //     birthDate:z.date('birhDate is required'),
    //     password:z.string('password is required')
    // });
}
function getUserSchema(){
    return z.object({
        user_id:z.string('user_id is required')
    });
}
function loginUserSchema(){
    return z.object({
        email:z.string('email is required').email('invalid email'),
        password:z.string('password is required')
    })
}

module.exports = {
    addUserSchema,
    addAdminSchema,
    editUserSchema,
    getUserSchema,
    loginUserSchema
};