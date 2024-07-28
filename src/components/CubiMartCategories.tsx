import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const CubiMartCategories: React.FC<any> = () => {
  const categories = [
    { name: "Beverage", imageSrc: "./cubifood/beverage.svg" },
    { name: "Indian", imageSrc: "./cubifood/indian.svg" },
    { name: "Chinese", imageSrc: "./cubifood/chinese.svg" },
    { name: "Japanese", imageSrc: "./cubifood/japanese.svg" },
    { name: "Korean", imageSrc: "./cubifood/korean.svg" },
    { name: "Malay", imageSrc: "./cubifood/malay.svg" },
    { name: "Thai", imageSrc: "./cubifood/thai.svg" },
    { name: "Western", imageSrc: "./cubifood/western.svg" },
  ];

  return (
    <Box paddingX={"10%"} paddingY={"2.5%"}>
      <Typography
        variant={"h4"}
        fontWeight={500}
        fontSize={26}
        color={"#008573"}
      >
        Categories
      </Typography>
      <Grid container paddingY={"2%"}>
        {categories.map((category, index) => (
          <Grid item xs={1.5} key={index} textAlign={"left"}>
            <Card variant={"outlined"} sx={{ borderRadius: 0 }}>
              <CardActionArea>
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    paddingBottom: "100%",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={category.imageSrc}
                    alt={category.name}
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
                  <Typography textAlign={"center"} color={"#008573"}>{category.name}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CubiMartCategories;
