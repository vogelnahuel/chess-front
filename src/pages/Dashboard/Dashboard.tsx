import React from 'react';
import {  Grid } from '@mui/material';
import { NavBar } from '../../components/NavBar';
import { News } from '../../components/News';
import { Profile, ProfileUser } from '../../components/Profile';
import { Chess } from './Components/Chess';

const DashboardPage: React.FC = () => {

  const isLoggedIn = true; // Aquí puedes gestionar el estado de autenticación
  const user: ProfileUser = { name: 'John Doe', avatarUrl: '', email: 'john.doe@example.com' }; // Datos de usuario

  return (
    <div style={{ width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {/* Menú Lateral */}
      <NavBar />

      {/* Contenido del Dashboard */}
      <main className="flex-grow bg-gray-100 p-6">
        <Grid container spacing={3}>
            {/* Perfil del Usuario */}
            <Profile user={user} isLoggedIn={isLoggedIn} />
            {/* Botones de Juego */}
            <Chess />
            {/* Noticias */}
            <News />
        </Grid>
      </main>
    </div>
  );
};

export default DashboardPage;
