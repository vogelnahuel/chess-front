import { Avatar, Box, Button, Typography } from '@mui/material';

export const UserProfile = () => {
  return (
    <Box p={4}>
      <Box display="flex" alignItems="center" gap={3}>
        <Avatar
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBs8vdZEplkGp2owqd8BpUmNLtktxJDbnwgg&s"
          alt="Avatar de usuario"
          sx={{ width: 96, height: 96 }}
        />
        <Box>
          <Typography variant="h5" fontWeight="bold" color='black'>
            i_am_stock_fish
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Argentina
          </Typography>
          <Button variant="text" color="primary" sx={{ mt: 1 }}>
            Editar perfil
          </Button>
        </Box>
      </Box>
      <Typography variant="body1" color="text.primary" sx={{ mt: 4 }}>
        Estado: Muestra tu distintivo
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Última actividad: 25 enero 2025
      </Typography>
    </Box>
  );
};
