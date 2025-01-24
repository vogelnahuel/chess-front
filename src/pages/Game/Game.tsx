import React, { useState } from 'react';
import { Chessboard } from 'react-chessboard';
import { Chess } from 'chess.js';
import { Box, Typography } from '@mui/material';

const ChessGame: React.FC = () => {
  const [game, setGame] = useState(new Chess());
  const [selectedSquare, setSelectedSquare] = useState<string | null>(null);
  const [highlightedSquares, setHighlightedSquares] = useState<Record<string, any>>({});
  const [status, setStatus] = useState('Juega el blanco');

  // Manejar clic en una casilla
  const handleSquareClick = (square: string) => {
    const gameCopy = new Chess();
    gameCopy.load(game.fen());

    if (gameCopy.get(square)) {
      const moves = gameCopy.moves({ square, verbose: true });

      const highlights: Record<string, any> = {};
      moves.forEach((move) => {
        highlights[move.to] = {
          backgroundColor: 'rgba(152, 161, 154, 0.5)',
          borderRadius: '50%',
        };
      });

      setSelectedSquare(square);
      setHighlightedSquares(highlights);
    } else {
      setSelectedSquare(null);
      setHighlightedSquares({});
    }
  };

  // Manejar movimientos
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
    setSelectedSquare(null);
    setHighlightedSquares({});
    return true; // Movimiento válido
  };

  // Obtener el estado del juego
  const getGameStatus = (game: Chess) => {
    if (game.isCheckmate()) return '¡Jaque mate!';
    if (game.isDraw()) return 'Empate';
    return game.turn() === 'w' ? 'Juega el blanco' : 'Juega el negro';
  };

  return (
    <div style={{ width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

    
    <Box className="width-full flex items-center justify-center rounded-lg bg-gray-100 p-4 shadow-md">
      <Typography variant="h4" className="mb-4">
        Juego de Ajedrez
      </Typography>
      <Chessboard
        position={game.fen()} // Estado del tablero
        onPieceDrop={onDrop} // Manejar movimientos
        onSquareClick={handleSquareClick} // Resaltar movimientos válidos
        customSquareStyles={highlightedSquares} // Estilos personalizados
        boardWidth={800} // Tamaño del tablero
      />
      <Typography variant="h6" className="mt-4">
        {status}
      </Typography>
    </Box>
    </div>
  );
};

export default ChessGame;
