import { Grid, Card, CardContent, CardMedia, Typography } from "@mui/material";
import libro from "../assets/libro.jpeg";
import libro2 from "../assets/libro2.jpeg";
import libro3 from "../assets/libro3.jpeg";

export const ContentSection = ({ title, items }: { title: string; items: Array<{ title: string; description: string; image?: string }> }) => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Typography variant="h5" className="mb-4">
          {title}
        </Typography>
      </Grid>
      {items.map((item, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card className="shadow-lg">
            {item.image && (
              <CardMedia component="img" height="140" image={item.image} alt={item.title} />
            )}
            <CardContent>
              <Typography variant="h6" className="mb-2">
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

// Ejemplo de Uso
export const NewsAndBooks = () => {
  const news = [
    {
      title: "Nuevo Torneo en Línea",
      description: "Un nuevo torneo de ajedrez comenzará el próximo mes.",
      image: libro,
    },
    {
      title: "Actualizaciones del Sistema",
      description: "Las nuevas actualizaciones del sistema de bots ya están disponibles.",
      image: libro3,
    },
    {
      title: "Campeonato Mundial 2025",
      description: "Análisis completo del campeonato mundial de ajedrez 2025.",
      image: libro,

    },
  ];

  const books = [
    {
      title: "Mi Sistema - Aron Nimzowitsch",
      description: "Un libro esencial para entender los fundamentos del ajedrez posicional.",
      image: libro,
    },
    {
      title: "Aprende ajedrez con Magnus Carlsen",
      description: "El campeón mundial te enseña estrategias básicas y avanzadas.",
      image: libro2,
    },
    {
      title: "Estrategia Moderna en Ajedrez",
      description: "Cómo aplicar conceptos estratégicos modernos en tus partidas.",
      image: libro,
    },
  ];

  return (
    <div className="p-6">
      <ContentSection title="Últimas Noticias" items={news} />
      <div className="mt-8">
        <ContentSection title="Libros Recomendados" items={books} />
      </div>
    </div>
  );
};
