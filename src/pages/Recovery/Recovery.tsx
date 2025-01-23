import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Box, Typography } from '@mui/material';

const ForgotPasswordPage: React.FC = () => {
  const [emailSent, setEmailSent] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Email inválido').required('Email es requerido'),
    }),
    onSubmit: async (values) => {
      // Simula el envío de la solicitud al backend
      console.log('Recuperación solicitada para el email:', values.email);
      setEmailSent(true); // Simular éxito en el envío
    },
  });

  return (
    <div style={{ width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Box
        className="w-full max-w-md rounded-lg bg-white p-6 shadow-md"
        component="form"
        onSubmit={formik.handleSubmit}
      >
        <Typography variant="h4" className="mb-4 text-center">
          Recuperar Contraseña
        </Typography>

        {emailSent ? (
          <Typography variant="body1" className="text-center">
            Se ha enviado un enlace de recuperación al email proporcionado. Por favor, revisa tu bandeja de entrada.
          </Typography>
        ) : (
          <>
            <Typography variant="body2" className="mb-4 text-center">
              Ingresa tu email registrado y te enviaremos un enlace para recuperar tu contraseña.
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
            <Button
              type="submit"
              variant="contained"
              fullWidth
              color="primary"
              className="mt-4"
            >
              Enviar enlace de recuperación
            </Button>
          </>
        )}
      </Box>
    </div>
  );
};

export default ForgotPasswordPage;
