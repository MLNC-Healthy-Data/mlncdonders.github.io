import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import colors from "../../helpers/colors";

function CardComponent() {
  const imgUrl = "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/1200";

  return (
    <Card
      sx={{
        maxWidth: 440,
        marginBottom: 5,
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)"
        },
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image={imgUrl}
          alt="bird"
          sx={{ borderRadius: "4px" }}
        />
        <CardContent sx={{ backgroundColor: colors.primaryTransparent, color: colors.textLight }}>
          <Typography gutterBottom variant="h5" component="div" sx={{ color: colors.textLight }}>
            Project
          </Typography>
          <Typography variant="body2" color={colors.textLight}>
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CardComponent;