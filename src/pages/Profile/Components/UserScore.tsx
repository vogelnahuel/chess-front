import { Card, CardContent, Typography, Box } from '@mui/material';
import SpeedIcon from '@mui/icons-material/Speed';
import BoltIcon from '@mui/icons-material/Bolt';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { User } from '../ProfileContainer';

interface UserScoresProps {
  profileData: User;
}

export const UserScores = ({profileData}: UserScoresProps) => {
  const scores = [
    { title: 'Puntuación Rápida', value: profileData.scoreRapid || 1400, icon: <SpeedIcon color="primary" fontSize="large" /> },
    { title: 'Puntuación Blitz', value: profileData.scoreBlitz || 1400, icon: <BoltIcon color="secondary" fontSize="large" /> },
    { title: 'Puntuación Bala', value: profileData.scoreBullet || 1400, icon: <FlashOnIcon color="warning" fontSize="large" /> },
  ];

  return (
    <Box display="flex" gap={2} p={2}>
      {scores.map((score, index) => (
        <Card key={index} sx={{ minWidth: 200, boxShadow: 3, borderRadius: 2 }}>
          <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {score.icon}
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                {score.title}
              </Typography>
              <Typography variant="h4" color="text.secondary">
                {score.value}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};
