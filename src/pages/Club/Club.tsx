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
import clubArgentino from "../../assets/club/clubArgentinoLogo.jpg";
import torreBlanca from "../../assets/club/torreBlanca.jpeg";
import najdorf from "../../assets/club/najdorf.jpeg";
import philidor from "../../assets/club/philidor.jpg";
import martelli from "../../assets/club/martelli.png";



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
    name: "Club Argentino de Ajedrez",
    description: "El Templo Máximo del Ajedrez",
    image: clubArgentino, // Cambiar por tu imagen real
    rating: 4.5,
    location: "Paraguay 1858, C1121 ABB, Cdad. Autónoma de Buenos Aires",
    phone: "011 4068-8236",
    reviews: [{ stars: 5, comment: "Excelente lugar para jugar." }],
  },
  {
    id: 2,
    name: "Círculo de Ajedrez Torre Blanca",
    description: "Asociación u organización",
    image: torreBlanca, // Cambiar por tu imagen real
    rating: 4.5,
    location: "Sánchez de Bustamante 587, C1173ABI Cdad. Autónoma de Buenos Aires",
    phone: "011 4862-3161",
    reviews: [{ stars: 5, comment: "Un lugar increíble para aprender ajedrez." }],
  },

  {
    id: 3,
    name: "Círculo de Ajedrez Miguel Najdorf",
    description: "Club en Los Polvorines",
    image: najdorf, // Cambiar por tu imagen real
    rating: 4.6,
    location: "Gral. Mosconi 2488 B1613FSK, B1613FSK Los Polvorines, Provincia de Buenos Aires",
    phone: "Información no disponible",
    reviews: [],
  },
  {
    id: 4,
    name: "Club de Ajedrez Philidor Clases y Torneos",
    description: "Club de ajedrez en Morón",
    image: philidor, // Cambiar por tu imagen real
    rating: 4.8,
    location: "JDM, 9 de Julio 613, B1708 Morón, Provincia de Buenos Aires",
    phone: "011 7708-5024",
    reviews: [],
  },
  {
    id: 5,
    name: "Ajedrez Martelli",
    description: "Club de ajedrez",
    image: martelli, // Cambiar por tu imagen real
    rating: 4.5, // No especificado, asignado un valor promedio por defecto
    location: "Francisco N. de Laprida 3837 Timbre 1, B1603 AAO, Provincia de Buenos Aires",
    phone: "011 4709-7288",
    reviews: [],
  },
  {
    id: 6,
    name: "Teran Chess Academy",
    description: "Club de ajedrez en Buenos Aires",
    image: clublogo, // Cambiar por tu imagen real
    rating: 4.8,
    location: "Av. Cabildo 1548, C1426 Cdad. Autónoma de Buenos Aires",
    phone: "011 2687-8198",
    reviews: [],
  },
  {
    id: 7,
    name: "Club de Ajedrez La Plata",
    description: "Club de ajedrez",
    image: clublogo, // Cambiar por tu imagen real
    rating: 4.5,
    location: "C. 6 1050, B1904 La Plata, Provincia de Buenos Aires",
    phone: "Información no disponible",
    reviews: [],
  },
  {
    id: 8,
    name: "CÍRCULO DE AJEDREZ DE VILLA BALLESTER",
    description: "Centro de eventos en Villa Ballester",
    image: clublogo, // Cambiar por tu imagen real
    rating: 4.7,
    location: "Jose Felix Campos Bolivia 4610, B1653HGX Villa Ballester, Provincia de Buenos Aires",
    phone: "011 4768-0462",
    reviews: [
      { stars: 5, comment: "Excelente club !" },
      { stars: 5, comment: "Muy respetuosos y de ambiente familiar/amigable. Sin lugar a dudas, el mejor." },
      { stars: 5, comment: "Muy buen ambiente, muy buenos profesores" },
    ],
  },

  {
    id: 9,
    name: "Club A.y D. Almafuerte Tablada",
    description: "Club en La Tablada",
    image: clublogo, // Cambiar por tu imagen real
    rating: 4.3,
    location: "Merlo 1280, B1766 La Tablada, Provincia de Buenos Aires",
    phone: "No tiene información",
    reviews: [],
  },
  {
    id: 10,
    name: "Ciudadela Chess Club",
    description: "Club en Ciudadela",
    image: clublogo, // Cambiar por tu imagen real
    rating: 5.0,
    location: "Cap. Claudio Rosales 4157, B1702 Ciudadela, Provincia de Buenos Aires",
    phone: "011 2404-9860",
    reviews: [],
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
