import { Grid, Paper, Typography } from "@mui/material"

export const News = () => {
  return (

    <Grid item xs={12}>
    <Paper className="p-6">
      <Typography variant="h5" className="mb-4">
        Últimas Noticias
      </Typography>
      <ul className="list-disc pl-6">
        <li className="mb-2">
          <Typography variant="body1">
            Nuevo torneo de ajedrez en línea comenzará el próximo mes.
          </Typography>
        </li>
        <li className="mb-2">
          <Typography variant="body1">
            Las nuevas actualizaciones del sistema de bots ya están disponibles.
          </Typography>
        </li>
        <li className="mb-2">
          <Typography variant="body1">
            Análisis del campeonato mundial de ajedrez 2025.
          </Typography>
        </li>
      </ul>
    </Paper>
  </Grid>

  )}