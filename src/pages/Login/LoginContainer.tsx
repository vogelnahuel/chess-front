/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { useDispatch } from 'react-redux';
import { Login } from './Login';
import { useLoginMutation } from '../../services/login/loginApi';
import { saveLocalStorage } from '../../utils/localStorage';
import { setLoginData } from '../../redux/slice/loginSlice';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import axios from 'axios';
import { useGoogleLogin } from '@react-oauth/google';
import { useRegisterMediaMutation } from '../../services/register/registerApi';


export const LoginContainer: React.FC = () => {
  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();
  const [registerMedia] = useRegisterMediaMutation();
  const navigate =  useNavigate();
  const { enqueueSnackbar } = useSnackbar(); 


  const handleLogin = async (values: { email: string; password: string }) => {
    try {
      const response: any = await login(values);


      if (response.error && response?.error?.status !== 200){
        throw new Error(response.error.data.details);
      }
      saveLocalStorage("token", response?.data?.accessToken);
      dispatch(setLoginData(response?.data?.accessToken));
      navigate("/dashboard")

    } catch (error) {
      console.log(error);
      
      const errorMessage = (error as Error)

      // Mostrar notificación de error
      enqueueSnackbar(`Error al iniciar sesión: ${errorMessage}`, {
        variant: 'error', // Variantes: 'default', 'error', 'success', 'warning', 'info'
      });    }
  };


  const handleLoginMedia = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        // Obtener información del usuario desde Google
        const { data } = await axios.get(
          'https://www.googleapis.com/oauth2/v3/userinfo',
          {
            headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
          }
        );
        const register = {
          email: data.email,
          family_name: data.family_name,
          given_name: data.given_name,
          picture: data.picture,
          sub: data.sub,

        }
        const response: any = await registerMedia(register);
        if (response.error && response?.error?.status !== 200){
          throw new Error(response.error.data.details);
        }
        saveLocalStorage("token", response?.data?.token);
        dispatch(setLoginData(response?.data?.token));
        navigate("/dashboard")


      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    },
    onError: () => {
      console.error('Login Failed');
    },
  });

  return <Login onSubmit={handleLogin} isSubmitting={isLoading}  handleLoginMedia={handleLoginMedia}/>;
};
