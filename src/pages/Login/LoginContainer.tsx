import React from 'react';
import { useDispatch } from 'react-redux';
import { Login } from './Login';
import { useLoginMutation } from '../../services/login/loginApi';
import { saveLocalStorage } from '../../utils/localStorage';
import { setLoginData } from '../../redux/slice/loginSlice';

export const LoginContainer: React.FC = () => {
  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();

  const handleLogin = async (values: { email: string; password: string }) => {
    try {
      const response = await login(values).unwrap();
      saveLocalStorage("token", response.data.access_token);
      dispatch(setLoginData(response.data));
      alert('Inicio de sesión exitoso');
    } catch (error) {
      alert('Error al iniciar sesión: ' + (error as Error).message);
    }
  };

  return <Login onSubmit={handleLogin} isSubmitting={isLoading} />;
};
