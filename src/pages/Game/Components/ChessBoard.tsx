import { Box, Typography } from "@mui/material";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";

export const ChessBoardWithInfo: React.FC<{ game: Chess }> = ({ game }) => {
    return (
      <Box>
        <Typography variant="h5" gutterBottom>
          Información de la partida
        </Typography>
        {/* Aquí puedes añadir lógica para calcular la ventaja de material */}
        <Box mb={2}>
          <Typography variant="subtitle1"> Juega el {game.turn() === 'w' ? 'Blanco' : 'Negro'}</Typography>
        </Box>
        {/* Aquí irían los perfiles de los usuarios */}
        <Box mb={2}>
          <Typography variant="subtitle2">Jugador Negro: Usuario1</Typography>
        </Box>
        <Chessboard position={game.fen()} boardWidth={700} />
        <Box mb={2}>
          <Typography variant="subtitle2">Jugador Blanco: Usuario1</Typography>
        </Box>
      </Box>
    );
  };