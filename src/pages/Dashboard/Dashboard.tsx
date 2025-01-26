import React from 'react';
import {  Box } from '@mui/material';
import { NewsAndBooks } from '../../components/News';
import { Profile, ProfileUser } from '../../components/Profile';
import { Chess } from './Components/Chess';

const DashboardPage: React.FC = () => {

  const isLoggedIn = false; // Aquí puedes gestionar el estado de autenticación
  const user: ProfileUser = { name: 'John Doe', avatarUrl: '', email: 'john.doe@example.com' }; // Datos de usuario

  return (
    <div style={{ 
      display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    overflow: 'auto', 
    marginLeft: '10vw', 
    marginRight: '10vw',
    width: '100vw' }}>

      {/* Contenido del Dashboard */}
      <main className="flex-grow bg-gray-100">
        <Box className="flex flex-col justify-center">
            {/* Perfil del Usuario */}
            {
              isLoggedIn && <Profile user={user} isLoggedIn={isLoggedIn} />
            }
            {/* Botones de Juego */}
            <Chess />
            
            {/* Noticias */}
            <NewsAndBooks />


        </Box>
      </main>
    </div>
  );
};

export default DashboardPage;
