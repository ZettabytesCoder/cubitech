import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const WeeklyPromotions: React.FC<any> = () => {
  const cardLength = Array.from({ length: 4 });

  const card = (
    <>
      <Box width={"100%"} paddingBottom={"100%"} position={"relative"}>
        <CardMedia
          component="img"
          image="./cubitech_light.svg"
          alt="Promotion"
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
          Promotion Name
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Description
        </Typography>
      </CardContent>
    </>
  );

  return (
    <Box
      paddingX={"10%"}
      paddingY={"2%"}
      borderTop={1}
      borderBottom={1}
      borderColor={"divider"}
    >
      <Typography
        variant={"h4"}
        fontWeight={500}
        fontSize={30}
        textAlign={"left"}
        color={"primary.main"}
      >
        Weekly Promotions
      </Typography>

      <Grid container paddingY={"2%"} spacing={2}>
        {cardLength.map((_, index) => (
          <Grid item xs={cardLength.length - 1} key={index}>
            <Card variant={"outlined"} sx={{ borderRadius: 2 }}>
              {card}
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WeeklyPromotions;
