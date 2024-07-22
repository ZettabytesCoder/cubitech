import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import styles from "@/styles/cubifood.module.scss";

const CubiFoodTopTreasures: React.FC<any> = () => {
  const cardLength = Array.from({ length: 6 });

  const defaultTreasure = (
    <Card variant={"outlined"} sx={{ borderRadius: 2, height: "100%" }}>
      <CardActionArea>
        <Box
          sx={{ position: "relative", width: "100%", paddingBottom: "100%" }}
        >
          <CardMedia
            component="img"
            image="./cubifood_light.svg"
            alt="CubiFood Default Treasure"
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              maxWidth: "100%",
              maxHeight: "100%",
              width: "auto",
              height: "auto",
            }}
          />
        </Box>
        <CardContent sx={{ borderTop: 1, borderColor: "divider" }}>
          <Typography gutterBottom variant="h6" component="div">
            Treasure Name
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Treasure Description
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button color="primary">Learn More</Button>
      </CardActions>
    </Card>
  );

  const treasure = (
    <Card variant={"outlined"} sx={{ borderRadius: 2 }}>
      <CardActionArea>
        <Box
          sx={{ position: "relative", width: "100%", paddingBottom: "100%" }}
        >
          <CardMedia
            component="img"
            image="./cubifood_light.svg"
            alt="CubiFood Treasure"
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              maxWidth: "100%",
              maxHeight: "100%",
              width: "auto",
              height: "auto",
            }}
          />
        </Box>
        <CardContent sx={{ borderTop: 1, borderColor: "divider" }}>
          <Typography gutterBottom variant="h6" component="div">
            Treasure Name
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button color="primary">View</Button>
        <Button color="primary">Learn More</Button>
      </CardActions>
    </Card>
  );

  return (
    <Box
      paddingX={"10%"}
      paddingY={"2.5%"}
      bgcolor={"#e6fff9"}
      color={"#008573"}
    >
      <Typography
        variant={"h4"}
        fontWeight={700}
        fontSize={36}
        className={styles.merriWeather}
        fontStyle={"italic"}
        textAlign={"center"}
      >
        Top Treasures
      </Typography>
      <Grid container paddingY={"2%"} spacing={2}>
        <Grid item xs={4}>
          {defaultTreasure}
        </Grid>
        <Grid item xs={8} container spacing={2}>
          {cardLength.map((_, index) => (
            <Grid item xs={4} key={index}>
              {treasure}
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default CubiFoodTopTreasures;
