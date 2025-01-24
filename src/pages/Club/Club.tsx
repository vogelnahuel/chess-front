import React, { useState } from "react";
import {
  Typography,
  Paper,
  Box,
  Button,
  TextField,
  Modal,
  Rating,
} from "@mui/material";
import clublogo from "../../assets/clublogo.jpg";


interface Club {
  id: number;
  name: string;
  description: string;
  image: string;
  rating: number; // Promedio de calificaciones
  location: string; // Dirección para Google Maps
  phone: string; // Teléfono del club
  reviews: { stars: number; comment: string }[]; // Calificaciones y comentarios
}

const clubsData: Club[] = [
  {
    id: 1,
    name: "Club de Ajedrez Central",
    description: "Un lugar para aprender y competir en torneos de ajedrez.",
    image: clublogo, // Cambiar por tu imagen real
    rating: 4.5,
    location: "Av. Siempreviva 742, Springfield",
    phone: "123-456-789",
    reviews: [{ stars: 5, comment: "Excelente lugar para jugar." }],
  },
  {
    id: 2,
    name: "Ajedrez del Sur",
    description: "Ideal para principiantes y avanzados.",
    image: clublogo, // Cambiar por tu imagen real
    rating: 4.0,
    location: "Calle Falsa 123, Gotham",
    phone: "987-654-321",
    reviews: [{ stars: 4, comment: "Muy buen ambiente." }],
  },
  {
    id: 3,
    name: "Club Rey y Dama",
    description: "Perfecto para torneos rápidos.",
    image: clublogo, // Cambiar por tu imagen real
    rating: 3.8,
    location: "Boulevard Chess 10, Metropolis",
    phone: "111-222-333",
    reviews: [{ stars: 3, comment: "Necesita más espacio." }],
  },
  {
    id: 4,
    name: "Club Rey y Dama",
    description: "Perfecto para torneos rápidos.",
    image: clublogo, // Cambiar por tu imagen real
    rating: 3.8,
    location: "Boulevard Chess 10, Metropolis",
    phone: "111-222-333",
    reviews: [{ stars: 3, comment: "Necesita más espacio." }],
  },
  {
    id: 5,
    name: "Club Rey y Dama",
    description: "Perfecto para torneos rápidos.",
    image: clublogo, // Cambiar por tu imagen real
    rating: 3.8,
    location: "Boulevard Chess 10, Metropolis",
    phone: "111-222-333",
    reviews: [{ stars: 3, comment: "Necesita más espacio." }],
  },
  {
    id: 6,
    name: "Club Rey y Dama",
    description: "Perfecto para torneos rápidos.",
    image: clublogo, // Cambiar por tu imagen real
    rating: 3.8,
    location: "Boulevard Chess 10, Metropolis",
    phone: "111-222-333",
    reviews: [{ stars: 3, comment: "Necesita más espacio." }],
  },
  {
    id: 7,
    name: "Club Rey y Dama",
    description: "Perfecto para torneos rápidos.",
    image: clublogo, // Cambiar por tu imagen real
    rating: 3.8,
    location: "Boulevard Chess 10, Metropolis",
    phone: "111-222-333",
    reviews: [{ stars: 3, comment: "Necesita más espacio." }],
  },
  // Agrega más clubs aquí
];

const ClubGrid: React.FC = () => {
  const [clubs, setClubs] = useState<Club[]>(clubsData);
  const [selectedClub, setSelectedClub] = useState<Club | null>(null); // Club seleccionado
  const [comment, setComment] = useState<string>(""); // Comentario
  const [stars, setStars] = useState<number>(0); // Calificación

  const handleAddReview = (clubId: number) => {
    if (!comment || stars === 0) return;
    setClubs((prev) =>
      prev.map((club) =>
        club.id === clubId
          ? {
              ...club,
              reviews: [...club.reviews, { stars, comment }],
              rating:
                [...club.reviews, { stars, comment }].reduce(
                  (acc, r) => acc + r.stars,
                  0
                ) / [...club.reviews, { stars, comment }].length,
            }
          : club
      )
    );
    setComment("");
    setStars(0);
    setSelectedClub(null);
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" align="center" sx={{ marginBottom: 4 }}>
        Lista de Clubs de Ajedrez
      </Typography>

      {/* Grid */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)", // 3 columnas fijas
          gap: 4, // Espaciado entre cards
        }}
      >
        {clubs.map((club) => (
          <Paper
            key={club.id}
            sx={{
              padding: 2,
              flexDirection: "column",
              alignItems: "center",
              display: "flex",
            }}
          >
            <img
              src={club.image}
              alt={club.name}
              style={{
                width: "100%",
                height: "170px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
            <Typography variant="h6" className="mt-4">
              {club.name}
            </Typography>
            <Typography variant="body2" className="mt-2 text-gray-500">
              {club.description}
            </Typography>
            <Typography variant="body2" className="mt-1 text-gray-600">
              📍 {club.location}
            </Typography>
            <Typography variant="body2" className="mt-1 text-gray-600">
              📞 {club.phone}
            </Typography>
            <Rating value={club.rating} readOnly className="mt-2" />

            <Button
              variant="text"
              color="primary"
              className="mt-2"
              onClick={() =>
                window.open(
                  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    club.location
                  )}`,
                  "_blank"
                )
              }
            >
              Ver en Google Maps
            </Button>

            <Button
              variant="contained"
              color="secondary"
              className="mt-2"
              onClick={() => setSelectedClub(club)}
            >
              Calificar
            </Button>
          </Paper>
        ))}
      </Box>

      {/* Modal */}
      {selectedClub && (
        <Modal
          open={Boolean(selectedClub)}
          onClose={() => setSelectedClub(null)}
          aria-labelledby="modal-title"
        >
          <Box
            sx={{
              backgroundColor: "white",
              padding: 4,
              borderRadius: 2,
              width: 400,
              margin: "auto",
              marginTop: "10vh",
              boxShadow: 24,
            }}
          >
            <Typography id="modal-title" variant="h6">
              Calificar a {selectedClub.name}
            </Typography>
            <Rating
              value={stars}
              onChange={(e, value) => setStars(value || 0)}
              className="mt-4"
            />
            <TextField
              label="Comentario"
              variant="outlined"
              fullWidth
              multiline
              rows={3}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="mt-4"
            />
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleAddReview(selectedClub.id)}
              className="mt-4"
            >
              Enviar Reseña
            </Button>
          </Box>
        </Modal>
      )}
    </Box>
  );
};

export default ClubGrid;
