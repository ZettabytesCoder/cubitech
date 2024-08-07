import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Add from "@mui/icons-material/Add";
import styles from "@/styles/cubitech.module.scss";

const CubiFoodPeekView: React.FC<any> = () => {
  const cardLength = Array.from({ length: 6 });

  const card = (
    <>
      <Box width={"100%"} paddingBottom={"100%"} position={"relative"}>
        <CardMedia
          component="img"
          image="./cubifood_light.svg"
          alt="CubiFood"
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
        <Typography gutterBottom variant={"h6"} component={"div"} fontSize={18}>
          Menu Item Name
        </Typography>
        <Typography variant={"body2"} color={"text.secondary"} fontSize={16}>
          $9.99
        </Typography>
        <Rating defaultValue={5} precision={0.5} sx={{ marginTop: "10%" }} />
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingTop: 0,
          paddingBottom: 3,
        }}
      >
        <Button startIcon={<Add />} variant={"contained"}>
          Add To Cart
        </Button>
      </CardActions>
    </>
  );

  return (
    <Box paddingX={"10%"} paddingY={"2%"}>
      <div style={{ display: "flex" }}>
        <Typography
          variant={"h4"}
          fontWeight={700}
          fontSize={30}
          textAlign={"left"}
          color={"primary.main"}
          marginRight={0.25}
          className={styles.codecPro}
        >
          CUBI
        </Typography>
        <Typography
          variant={"h4"}
          fontWeight={700}
          fontSize={30}
          textAlign={"left"}
          color={"#008c3a"}
          className={styles.codecPro}
        >
          Food
        </Typography>
      </div>

      <Grid container paddingY={"2%"} spacing={1}>
        {cardLength.map((_, index) => (
          <Grid item xs={cardLength.length - 4} key={index}>
            <Card variant={"outlined"} sx={{ borderRadius: 2 }}>
              {card}
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CubiFoodPeekView;
