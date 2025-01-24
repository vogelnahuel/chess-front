import { Box, Button, Paper, Typography } from '@mui/material';
import { Chessboard } from 'react-chessboard';
import { useNavigate } from 'react-router-dom';


export const Chess = () => {
 const navigate = useNavigate();

  return (
    <>
        <Box className="flex justify-center">
              <Box className="mt-6 flex justify-center">
                  <Chessboard 
                  boardWidth={400}
                   position="start"   
                   arePiecesDraggable={false} // Desactiva la interacción
                  />
              </Box>
            <Paper className="p-6 text-center">

              <Typography variant="h4" sx={{ marginBottom: '5rem' }}>¡Listo para jugar!</Typography>
              <Box className="flex flex-col justify-center gap-5">
                <Button
                  variant="contained"
                  color="success"
                  size="large"
                  className="mb-4 mr-4 mt-4"
                  onClick={() => navigate('/game')}
                >
                  Jugar Online
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  className="mb-4 mr-4 mt-4"
                  onClick={() => navigate('/bots')}
                >
                  Jugar contra Bots
                </Button>

                <Typography className="mb-4 mr-4 mt-4">
                  Jugadores 1342
                </Typography>
                <Typography className="mb-4 mr-4 mt-4">
                  Partidas en curso 52
                </Typography>   
              </Box>    
            </Paper>
        </Box>
    </>
  )
}