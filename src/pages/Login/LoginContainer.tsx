/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { useDispatch } from 'react-redux';
import { Login } from './Login';
import { useLoginMutation } from '../../services/login/loginApi';
import { saveLocalStorage } from '../../utils/localStorage';
import { setLoginData } from '../../redux/slice/loginSlice';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

export const LoginContainer: React.FC = () => {
  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();
  const navigate =  useNavigate();
  const { enqueueSnackbar } = useSnackbar(); 

  const handleLogin = async (values: { email: string; password: string }) => {
    try {
      const response: any = await login(values);


      if (response.error.status !== 200){
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

  return <Login onSubmit={handleLogin} isSubmitting={isLoading} />;
};
