import React, { useState } from 'react';
import { Chessboard } from 'react-chessboard';
import { Chess } from 'chess.js';
import { Box, Typography } from '@mui/material';

const ChessGame: React.FC = () => {
  const [game, setGame] = useState(new Chess());
  const [status, setStatus] = useState('Juega el blanco'); // Estado para mostrar información del turno actual

  // Función para manejar los movimientos
  const onDrop = (sourceSquare: string, targetSquare: string) => {
    const gameCopy = new Chess();
    gameCopy.load(game.fen());

    const move = gameCopy.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: 'q', // Promoción automática a reina
    });

    if (move === null) {
      return false; // Movimiento inválido
    }

    setGame(gameCopy);
    setStatus(getGameStatus(gameCopy));
    return true; // Movimiento válido
  };

  // Función para obtener el estado del juego
  const getGameStatus = (game: Chess) => {
    if (game.isCheckmate()) return '¡Jaque mate!';
    if (game.isDraw()) return 'Empate';
    return game.turn() === 'w' ? 'Juega el blanco' : 'Juega el negro';
  };

  return (
    <Box className="flex flex-col items-center rounded-lg bg-gray-100 p-4 shadow-md">
      <Typography variant="h4" className="mb-4">
        Juego de Ajedrez
      </Typography>
      <Chessboard
        position={game.fen()} // Estado del tablero
        onPieceDrop={onDrop} // Manejar movimientos
        boardWidth={500} // Tamaño del tablero
      />
      <Typography variant="h6" className="mt-4">
        {status}
      </Typography>
    </Box>
  );
};

export default ChessGame;
