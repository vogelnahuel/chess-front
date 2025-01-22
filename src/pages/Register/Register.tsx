/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { GoogleLogin } from 'react-google-login';
import { TextField, Button, Box, Typography } from '@mui/material';
import { useLoginMutation } from '../../services/login/loginApi';

const RegisterPage: React.FC = () => {
  const [login] = useLoginMutation();

  // Manejar inicio de sesión con Google
  const handleGoogleSuccess = (response: any) => {
    const profile = response.profileObj;
    login(profile as any);
    console.log('Google Login Successful:', profile);
  };

  const handleGoogleFailure = (error: any) => {
    console.error('Google Login Failed:', error);
  };

  // Configuración de Formik
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Email inválido').required('Email es requerido'),
      password: Yup.string().min(6, 'Mínimo 6 caracteres').required('Contraseña es requerida'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Las contraseñas deben coincidir')
        .required('Confirmar contraseña es requerido'),
    }),
    onSubmit: (values) => {
      console.log('Form Submitted:', values);
      login(values); // Simular registro
    },
  });

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <Box
        className="w-full max-w-md rounded-lg bg-white p-6 shadow-md"
        component="form"
        onSubmit={formik.handleSubmit}
      >
        <Typography variant="h4" className="mb-4 text-center">
          Registro
        </Typography>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          {...formik.getFieldProps('email')}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          label="Contraseña"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          {...formik.getFieldProps('password')}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <TextField
          label="Confirmar Contraseña"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          {...formik.getFieldProps('confirmPassword')}
          error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
          helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
        />
        <Button
          type="submit"
          variant="contained"
          fullWidth
          color="primary"
          className="mt-4"
        >
          Registrarse
        </Button>
        <Typography variant="body2" className="my-4 text-center">
          o regístrate con Google
        </Typography>
        <GoogleLogin
          clientId="TU_CLIENT_ID_DE_GOOGLE"
          buttonText="Registrarse con Google"
          onSuccess={handleGoogleSuccess}
          onFailure={handleGoogleFailure}
          cookiePolicy={'single_host_origin'}
          className="w-full"
        />
      </Box>
    </div>
  );
};

export default RegisterPage;
