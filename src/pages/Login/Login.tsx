import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Box, Button, TextField, Typography } from '@mui/material';

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
    <>
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
        </Form>
      )}
    </Formik>

</>
  );
};

