import { useParams } from "react-router-dom";
import Profile from "./Profile";
import { useProfileQuery } from "../../services/profile/profileApi";

export interface User {
  id: number;
  name: string;
  last_name: string;
  email: string;
  password: string;
  refresh_token: string;
  permissions: string[]; // Si los permisos tienen una estructura específica, puedes reemplazar `string` por la interfaz correspondiente.
  address: string;
  role: string | null;
  is_active: boolean;
  lastActivity: string; // Puedes usar `Date` si procesas esta fecha.
  location_s3: string;
  scoreBlitz: number;
  scoreBullet: number;
  scoreRapid: number;
  verification_code: string;
  expire_verification_code: string; // También puedes usar `Date` si es un timestamp.
}



export const ProfileContainer = () => {
    // const { data: clubsData, isLoading } = useClubsQuery(); // Usar el hook para obtener los clubs
    const { id } = useParams<{ id: string }>();

      // Usar el hook para obtener los datos del perfil
  const { data: profileData, isLoading, isError }  = useProfileQuery(id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !profileData) {
    return <div>Error loading profile.</div>;
  }

    return (
        <Profile profileData={profileData.user} />
    )
        
    
};