import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from '@mui/material';

export const MatchHistory = () => {
  const matches = [
    { opponent: 'ElHilitoRojo', result: '1-0', moves: 17, date: '25 ene 2025' },
    { opponent: 'Sjoma', result: '0-1', moves: 50, date: '24 ene 2025' },
    // Agrega más partidas aquí...
  ];

  return (
    <div style={{ padding: '16px' }}>
      <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '16px' }}>
        Historial de partidas
      </Typography>
      <TableContainer component={Paper} sx={{ boxShadow: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold', color: 'black' }}>Jugador</TableCell>
              <TableCell sx={{ fontWeight: 'bold', color: 'black' }}>Resultado</TableCell>
              <TableCell sx={{ fontWeight: 'bold', color: 'black' }}>Movimientos</TableCell>
              <TableCell sx={{ fontWeight: 'bold', color: 'black' }}>Fecha</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {matches.map((match, index) => (
              <TableRow key={index}>
                <TableCell sx={{ color: 'black' }}>{match.opponent}</TableCell>
                <TableCell sx={{ color: 'black' }}>{match.result}</TableCell>
                <TableCell sx={{ color: 'black' }}>{match.moves}</TableCell>
                <TableCell sx={{ color: 'black' }}>{match.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
