import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { authFormFields } from "../../constant/formConfigs/authFormConfigs";
import AllInputs from "../../components/Shared/Inputs/AllInputs";
import { Buttons } from "../../components/Shared/Buttons/Buttons";
import { COLORS } from "../../theme/colors";
import AuthLayout from "../../components/Layouts/AuthLayout/AuthLayout";
import { useNavigate } from 'react-router-dom';
import WText from "../../components/Shared/WText/WText";
import { useLogInMutation } from "../../redux/features/authApi";
import { authErrorchecker } from "../../helper/authErrChecker";
import { errorToast, successToast } from "../../utils/toaster/toaster";

export default function Login() {
  const [useLoginHandler, { }] = useLogInMutation();
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const {
    handleSubmit,
    control,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true)
    let response = await useLoginHandler(data);
    
    console.log('response ===>', response)
    if(response?.data?.token){
   
      localStorage.setItem('watchify_user', JSON.stringify(response.data))
      setLoading(false)
      successToast('Successfully LoggedIn!')
      navigate('/')
    }
    else if(response?.data?.message){
        setLoading(false)
        const checkedData = authErrorchecker(response);
  
        setError(checkedData?.field, {...checkedData?.typeObj});
    }
    else{
      setLoading(false)
      errorToast()
    }
  };

  return (
      <AuthLayout>
        <div className="w-full max-w-md">
          <WText
          type="title"
          text="Login"
          otherStyle='mb-4 text-maroon'
          />

          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)} noValidate>
              {
                authFormFields.slice(2, 4)?.map((fieldItem) => (
                  <Controller
                      key={fieldItem?.field_id}
                      name={fieldItem?.field_id}
                      control={control}
                      defaultValue=""
                      rules={{
                        ...fieldItem?.required
                      }}
                      render={({ field }) => (
                          <AllInputs
                          otherStyle={{marginTop: '14px'}}
                          label={fieldItem?.label} 
                          field={field}
                          field_id={fieldItem?.field_id}
                          errors={errors}
                          placeholder={fieldItem?.placeholder}
                          inputType={fieldItem?.inputType}
                          />
                      )}
                    />
                ))
              }

            <Buttons
            isLoading={loading}
            type='submit' title="Login" 
            bgColor={COLORS.maroon} textColor="white" 
            other_style={{fontWeight: '700', marginTop: '10px'}} />
        </form>

            <p className="text-p text-center mt-4">
              New to Watchify?{" "}
              <span onClick={() => navigate('/register')} className="font-bold text-basecolor cursor-pointer">Create Account</span>
            </p>
        </div>
      </AuthLayout>
  );
}
