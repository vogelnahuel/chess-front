import React from "react";
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
  id: string;
  name: string;
  description: string;
  address: string;
  city: string;
  province: string;
  phone: string;
  email: string;
  website: string;
  map_location: string;
  opening_hours: string;
  is_federated: boolean;
  created_at: string; // Puedes usar Date en vez de string si prefieres manipular fechas
  updated_at: string; // Puedes usar Date en vez de string si prefieres manipular fechas
  logo: string; // en base 64
  reviews: Review[];
  tournaments: string[];
}

interface Review {
  stars: number;
  comment: string;
}

interface Props {
  clubs: Club[];
  setSelectedClub: React.Dispatch<React.SetStateAction<Club | null>>;
  selectedClub: Club | null;
  setStars: React.Dispatch<React.SetStateAction<number>>;
  stars: number;
  comment: string;
  setComment: React.Dispatch<React.SetStateAction<string>>;
  handleAddReview: (clubId: string) => void;
}


const ClubGrid: React.FC<Props> = (
  {
   clubs,
   setSelectedClub,
   selectedClub,
   setStars,
   stars,
   comment,
   setComment,
   handleAddReview
  }: Props 
) => {


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
        {clubs && clubs.length > 0 && clubs?.map((club) => (
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
              src={`data:image/jpeg;base64,${club.logo}`}
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
              📍 {club.address || clublogo}
            </Typography>
            <Typography variant="body2" className="mt-1 text-gray-600">
              📞 {club.phone}
            </Typography>
            <Rating value={5} readOnly className="mt-2" />

            <Button
              variant="text"
              color="primary"
              className="mt-2"
              onClick={() =>
                window.open(
                  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    club.address
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
