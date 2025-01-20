import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

interface LoginFormProps {
  onSubmit: (values: { email: string; password: string }) => void;
  isSubmitting: boolean;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, isSubmitting }) => {
  const initialValues = { email: '', password: '' };

  const validate = (values: typeof initialValues) => {
    const errors: Partial<typeof initialValues> = {};
    if (!values.email) errors.email = 'El email es obligatorio';
    else if (!/\S+@\S+\.\S+/.test(values.email)) errors.email = 'Email inválido';
    if (!values.password) errors.password = 'La contraseña es obligatoria';
    return errors;
  };

  return (
    <Formik initialValues={initialValues} validate={validate} onSubmit={onSubmit}>
      <Form className="login-form">
        <div>
          <label>Email:</label>
          <Field type="email" name="email" placeholder="ejemplo@correo.com" />
          <ErrorMessage name="email" component="div" className="error" />
        </div>
        <div>
          <label>Contraseña:</label>
          <Field type="password" name="password" placeholder="********" />
          <ErrorMessage name="password" component="div" className="error" />
        </div>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Cargando...' : 'Iniciar Sesión'}
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
