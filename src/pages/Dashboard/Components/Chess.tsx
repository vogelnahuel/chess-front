import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import Chessboard from 'chessboardjsx'; // Paquete para tablero de ajedrez
import { useNavigate } from 'react-router-dom';


export const Chess = () => {
 const navigate = useNavigate();

  return (
    <>
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
    </>
  )
}