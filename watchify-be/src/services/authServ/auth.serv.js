const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const UserCollection = require("../../models/user");

const SecretKey = process.env.SECRETKEY;

const loginServ = async (reqData) => {
  const { email, password } = req.body;
   const oldUser = await UserCollection.findOne({ email: email });
    
    if (!oldUser){
        const errMsg = { message: "User doesn't exist with this email" }
        return errMsg
    }


    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

    if (!isPasswordCorrect){
        const errMsg = { message:  "Incorrect password"}
        return errMsg
    }

    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, SecretKey,  {
      expiresIn: "24h",
    });

    return {user: oldUser, token}
};

// User Signup
const signUpServ = async (reqData) => {
  
    const { email, password , phone } = reqData;

    const oldUser = await UserCollection.findOne({
        $or: [{ email: email }, { phone: phone }]
      });

      if (oldUser?.email == email) {
        return { message: "User already exists with this email", emailErr: true }
      }
  
      if (oldUser?.phone == phone) {
    
        return { message: "An account with this phone no. has already been opened." , phoneErr: true};
      }

      const hashedPassword = await bcrypt.hash(password, 12);
  
      const result = await UserCollection.create({
        ...requestData,
        password: hashedPassword,
      });
  
    const token = jwt.sign({ email: result.email, id: result._id }, SecretKey ,{
      expiresIn: "24h",
    });

    return { result, token };

  };


module.exports = {
  signUpServ,
  loginServ,
};
  