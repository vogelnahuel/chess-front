import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Box, Button, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

interface LoginFormProps {
  onSubmit: (values: { email: string; password: string }) => void;
  isSubmitting: boolean;
}

export const Login: React.FC<LoginFormProps> = ({ onSubmit, isSubmitting }) => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Email inválido').required('El email es obligatorio'),
    password: Yup.string().required('La contraseña es obligatoria'),
  });

  return (

    <div style={{ width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

    <Box
        className="w-full max-w-md rounded-lg bg-white p-6 shadow-md"
      >


    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit, handleChange, values, errors, touched }) => (
        <Form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
          <Typography variant="h4" className="text-gray-800">
            Iniciar Sesión
          </Typography>
          <Box className="w-80">
            <TextField
              label="Email"
              name="email"
              value={values.email}
              onChange={handleChange}
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
              fullWidth
              InputProps={{
                sx: {
                  color: 'black', // Color del texto
                },
              }}
              InputLabelProps={{
                sx: {
                  color: 'black', // Color del label
                },
              }}
              FormHelperTextProps={{
                sx: {
                  color: 'black', // Color del texto de ayuda
                },
              }}
            />
          </Box>
          <Box className="w-80">
            <TextField
              label="Contraseña"
              name="password"
              type="password"
              value={values.password}
              onChange={handleChange}
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password && errors.password}
              fullWidth
              InputProps={{
                sx: {
                  color: 'black', // Color del texto
                },
              }}
              InputLabelProps={{
                sx: {
                  color: 'black', // Color del label
                },
              }}
              FormHelperTextProps={{
                sx: {
                  color: 'black', // Color del texto de ayuda
                },
              }}
            />
          </Box>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="w-80"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Cargando...' : 'Iniciar Sesión'}
          </Button>
          <Link to="/recovery">
            Olivaste tu contraseña?
          </Link>
          <Link to="/register">
            Registrarse
          </Link>
        </Form>
      )}
    </Formik>
    </Box>


</div>
  );
};

