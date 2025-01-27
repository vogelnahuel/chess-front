import { useEffect, useState } from "react";
import { useClubsQuery } from "../../services/club/clubApi";
import Club from "./Club";

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
  reviews: Review[];
  tournaments: string[];
}

interface Review {
  stars: number;
  comment: string;
}

export const ClubContainer = () => {
    const { data: clubsData, isLoading } = useClubsQuery(); // Usar el hook para obtener los clubs
    const [clubs, setClubs] = useState<Club[]>([]); // Inicializar con un array vacío

    useEffect(() => {
        setClubs(clubsData?.clubs);
    }, [clubsData])





    const [selectedClub, setSelectedClub] = useState<Club | null>(null); // Club seleccionado
    const [comment, setComment] = useState<string>(""); // Comentario
    const [stars, setStars] = useState<number>(0); // Calificación
  
    const handleAddReview = (clubId: string) => {
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
        isLoading ? (
            <div>Loading...</div>
        ) : (
            <Club 
            clubs={clubs}
            setSelectedClub={setSelectedClub}
            selectedClub={selectedClub}
            setStars={setStars}
            stars={stars}
            comment={comment}
            setComment={setComment}
            handleAddReview={handleAddReview}
        >
            
        </Club>
        )
    )
        
    
};