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
  permissions: string[]; 
  address: string;
  role: string | null;
  is_active: boolean;
  lastActivity: string; 
  location_s3: string;
  scoreBlitz: number;
  scoreBullet: number;
  scoreRapid: number;
  verification_code: string;
  expire_verification_code: string; 
}



export const ProfileContainer = () => {
    const { id } = useParams<{ id: string }>();

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