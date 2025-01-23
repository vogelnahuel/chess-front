/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { useDispatch } from 'react-redux';
import { Login } from './Login';
import { useLoginMutation } from '../../services/login/loginApi';
import { saveLocalStorage } from '../../utils/localStorage';
import { setLoginData } from '../../redux/slice/loginSlice';
import { useNavigate } from 'react-router-dom';

export const LoginContainer: React.FC = () => {
  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();
  const navigate =  useNavigate();

  const handleLogin = async (values: { email: string; password: string }) => {
    try {
      const response: any = await login(values);

      saveLocalStorage("token", response.data.accessToken);
      dispatch(setLoginData(response.data.accessToken));
      navigate("/dashboard")

    } catch (error) {
      alert('Error al iniciar sesión: ' + (error as Error).message);
    }
  };

  return <Login onSubmit={handleLogin} isSubmitting={isLoading} />;
};
