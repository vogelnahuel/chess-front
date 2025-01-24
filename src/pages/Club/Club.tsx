import React, { useState } from 'react';
import { Typography, Paper, TextField, Button, Box, List, ListItem, ListItemText } from '@mui/material';

interface Club {
  id: number;
  name: string;
  description: string;
  location: string; // Dirección para Google Maps
  reviews: string[]; // Comentarios de usuarios
}

const clubsData: Club[] = [
  {
    id: 1,
    name: 'Club de Ajedrez Central',
    description: 'Un lugar para aprender y competir en torneos de ajedrez.',
    location: 'Av. Siempreviva 742, Springfield',
    reviews: ['Gran lugar para jugar ajedrez.', 'Excelente ambiente.'],
  },
  {
    id: 2,
    name: 'Ajedrez del Sur',
    description: 'Ideal para principiantes y avanzados.',
    location: 'Calle Falsa 123, Gotham',
    reviews: ['Muy buena atención.', 'Clases muy útiles para principiantes.'],
  },
];

const ClubPage: React.FC = () => {
  const [clubs, setClubs] = useState<Club[]>(clubsData); // Datos de clubs
  const [selectedClub, setSelectedClub] = useState<number | null>(null); // Club seleccionado
  const [comment, setComment] = useState<string>(''); // Comentario nuevo

  const handleAddComment = (clubId: number) => {
    if (comment.trim() === '') return;
    setClubs((prevClubs) =>
      prevClubs.map((club) =>
        club.id === clubId
          ? { ...club, reviews: [...club.reviews, comment] }
          : club
      )
    );
    setComment('');
  };

  return (
    <div style={{ width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Typography variant="h4" className="mb-4">
        Lista de Clubs de Ajedrez
      </Typography>
      <List>
        {clubs.map((club) => (
          <Paper key={club.id} className="mb-4 p-4">
            <ListItem
              onClick={() => setSelectedClub(selectedClub === club.id ? null : club.id)}
            >
              <ListItemText
                primary={club.name}
                secondary={club.description}
              />
            </ListItem>
            {selectedClub === club.id && (
              <Box className="mt-4">
                <Typography variant="body1" className="mb-2">
                  Dirección: {club.location}{' '}
                  <Button
                    variant="text"
                    color="primary"
                    onClick={() =>
                      window.open(
                        `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                          club.location
                        )}`,
                        '_blank'
                      )
                    }
                  >
                    Ver en Google Maps
                  </Button>
                </Typography>

                {/* Comentarios */}
                <Typography variant="h6" className="mb-2">
                  Reseñas
                </Typography>
                <List>
                  {club.reviews.map((review, index) => (
                    <ListItem key={index}>
                      <ListItemText primary={review} />
                    </ListItem>
                  ))}
                </List>

                {/* Agregar Comentario */}
                <Box className="mt-4">
                  <TextField
                    label="Agregar un comentario"
                    variant="outlined"
                    fullWidth
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="mb-2"
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleAddComment(club.id)}
                  >
                    Agregar
                  </Button>
                </Box>
              </Box>
            )}
          </Paper>
        ))}
      </List>
    </div>
  );
};

export default ClubPage;
