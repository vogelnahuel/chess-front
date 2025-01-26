import React, { useState } from 'react';
import { Chess } from 'chess.js';
import { Grid } from '@mui/material';
import { ChessBoardWithInfo } from './Components/ChessBoard';
import { GameSidebar } from './Components/GameSidebar';





const ChessGame: React.FC = () => {
  const [game, setGame] = useState(new Chess());
  const [moves, setMoves] = useState<string[]>([]);
  const [chatMessages, setChatMessages] = useState<string[]>([]);

  // Manejar movimientos
  const onDrop = (sourceSquare: string, targetSquare: string) => {
    const gameCopy = new Chess();
    gameCopy.load(game.fen());

    const move = gameCopy.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: 'q', // Promoción automática a reina
    });

    if (move === null) return false;

    setGame(gameCopy);
    setMoves([...moves, `${move.from}-${move.to}`]);
    return true;
  };

  // Agregar mensajes al chat
  const handleSendMessage = (message: string) => {
    setChatMessages([...chatMessages, message]);
  };

  return (
    <Grid container spacing={2} style={{ height: '100vh', padding: 10,marginLeft:'5vw',marginRight:'5vw' }}>
      {/* Columna izquierda: Tablero e información */}
      <Grid item xs={10}>
        <ChessBoardWithInfo game={game} />
      </Grid>

      {/* Columna derecha: Historial, chat y botones */}
      <Grid item xs={2}>
        <GameSidebar moves={moves} chatMessages={chatMessages} onSendMessage={handleSendMessage} />
      </Grid>
    </Grid>
  );
};

export default ChessGame;
