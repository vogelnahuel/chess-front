import { MatchHistory } from "./Components/MatchHistory";
import { UserProfile } from "./Components/UserProfile";
import { UserScores } from "./Components/UserScore";
import { User } from "./ProfileContainer";

interface ProfilePageProps {
  profileData: User;
}

const ProfilePage = ({profileData}: ProfilePageProps) => {
    return (
      <div className="min-h-screen bg-gray-50" style={{  marginLeft: "20vw", marginRight: "20vw", width: "100vw", height: "97vh" }}>
        <UserProfile profileData={profileData} />
        <UserScores  profileData={profileData} />
        <MatchHistory />
      </div>
    );
  };

  export default ProfilePage;