import React from 'react';
import { Box, Button, Typography, Avatar, Grid, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Chessboard from 'chessboardjsx'; // Paquete para tablero de ajedrez

const DashboardPage: React.FC = () => {
  const navigate = useNavigate();

  const isLoggedIn = true; // Aquí puedes gestionar el estado de autenticación
  const user = { name: 'John Doe', avatarUrl: '', email: 'john.doe@example.com' }; // Datos de usuario

  return (
    <div className="flex min-h-screen">
      {/* Menú Lateral */}
      <aside className="w-64 bg-gray-800 p-4 text-white">
        <nav>
          <ul>
            <li className="mb-4">
              <Button fullWidth variant="text" color="inherit" onClick={() => navigate('/club')}>
                Club (Noticias)
              </Button>
            </li>
            <li className="mb-4">
              <Button fullWidth variant="text" color="inherit" onClick={() => navigate('/game')}>
                Game
              </Button>
            </li>
            <li className="mb-4">
              <Button fullWidth variant="text" color="inherit" onClick={() => navigate('/dashboard')}>
                Dashboard
              </Button>
            </li>
            <li className="mb-4">
              <Button fullWidth variant="text" color="inherit" onClick={() => navigate('/profile')}>
                Profile
              </Button>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Contenido del Dashboard */}
      <main className="flex-grow bg-gray-100 p-6">
        <Grid container spacing={3}>
          {/* Perfil del Usuario */}
          <Grid item xs={12} md={4}>
            <Paper className="p-4">
              {isLoggedIn ? (
                <>
                  <Avatar
                    alt={user.name}
                    src={user.avatarUrl || '/default-avatar.png'}
                    className="mx-auto mb-4"
                    style={{ width: 100, height: 100 }}
                  />
                  <Typography variant="h5" align="center">{user.name}</Typography>
                  <Typography variant="body2" align="center">{user.email}</Typography>
                </>
              ) : (
                <Typography variant="h6" align="center">
                  Por favor, inicia sesión para ver tu perfil.
                </Typography>
              )}
            </Paper>
          </Grid>

          {/* Botones de Juego */}
          <Grid item xs={12} md={8}>
            <Paper className="p-6 text-center">
              <Typography variant="h4" className="mb-4">¡Listo para jugar!</Typography>
              <Button
                variant="contained"
                color="primary"
                size="large"
                className="mb-4 mr-4"
                onClick={() => navigate('/game')}
              >
                Jugar
              </Button>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                onClick={() => navigate('/bots')}
              >
                Jugar contra Bots
              </Button>

              {/* Tablero de Ajedrez */}
              <Box className="mt-6 flex justify-center">
                <Chessboard width={400} position="start" />
              </Box>
            </Paper>
          </Grid>

          {/* Noticias */}
          <Grid item xs={12}>
            <Paper className="p-6">
              <Typography variant="h5" className="mb-4">
                Últimas Noticias
              </Typography>
              <ul className="list-disc pl-6">
                <li className="mb-2">
                  <Typography variant="body1">
                    Nuevo torneo de ajedrez en línea comenzará el próximo mes.
                  </Typography>
                </li>
                <li className="mb-2">
                  <Typography variant="body1">
                    Las nuevas actualizaciones del sistema de bots ya están disponibles.
                  </Typography>
                </li>
                <li className="mb-2">
                  <Typography variant="body1">
                    Análisis del campeonato mundial de ajedrez 2025.
                  </Typography>
                </li>
              </ul>
            </Paper>
          </Grid>
        </Grid>
      </main>
    </div>
  );
};

export default DashboardPage;
