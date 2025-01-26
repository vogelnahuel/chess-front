import { MatchHistory } from "./Components/MatchHistory";
import { UserProfile } from "./Components/UserProfile";
import { UserScores } from "./Components/UserScore";

const ProfilePage = () => {
    return (
      <div className="min-h-screen bg-gray-50" style={{  marginLeft: "20vw", marginRight: "20vw", width: "100vw", height: "97vh" }}>
        <UserProfile />
        <UserScores />
        <MatchHistory />
      </div>
    );
  };

  export default ProfilePage;