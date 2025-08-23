const { loginServ, signUpServ } = require("../../services/authServ/auth.serv");

const loginCtrl = async (req, res) => {

    try{
        const result = await loginServ(req.body);

        res.send({result})
    }
    catch{
        res.send({status: 400, message: 'Login Failed'})
    }
}


const signUpCtrl = async (req, res) => {

    try{
        const result = await signUpServ(req.body);

        res.send({result})
    }
    catch{
        res.send({status: 400, message: 'User Creation Failed'})
    }
}

module.exports = {
    loginCtrl,
    signUpCtrl
};