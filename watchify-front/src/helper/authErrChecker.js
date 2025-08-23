

export const authErrorchecker = (response) => {
  const typeObj = {
        type: "server",
        message: response?.data?.message,
        }

    if(response?.data?.emailErr){
      return {
        field: "email",
        typeObj
      }
    }
    else if(response?.data?.phoneErr){
      return {
        field: "phone",
        typeObj
      }
    }
    else if(response?.data?.propertyErr){
      return {
        field: "propertyName",
        typeObj
      }
    }
    else if(response?.data?.message == "User doesn't exist with this email"){
        return {
        field: "email",
        typeObj
      }
    }
     else if(response?.data?.message == "Incorrect password"){
        return {
        field: "password",
        typeObj
      }
    }
}