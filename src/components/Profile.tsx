import { Avatar, Grid, Paper, Typography } from "@mui/material"

interface Profile {
    user: ProfileUser,
    isLoggedIn: boolean
}

export interface ProfileUser {
     name: string;
     avatarUrl: string;
     email: string;
}

export const Profile = ( { user, isLoggedIn }: Profile ) => {
  return (
    <Grid item xs={12} md={4}>
    <Paper className="p-4">
      {isLoggedIn ? (
        <>
          <Avatar
            alt={user.name}
            src={user.avatarUrl || '/default-avatar.png'}
            className="mx-auto mb-4"
            style={{ width: 100, height: 100 }}
          />
          <Typography variant="h5" align="center">{user.name}</Typography>
          <Typography variant="body2" align="center">{user.email}</Typography>
        </>
      ) : (
        <Typography variant="h6" align="center">
          Por favor, inicia sesión para ver tu perfil.
        </Typography>
      )}
    </Paper>
  </Grid>
  )
}