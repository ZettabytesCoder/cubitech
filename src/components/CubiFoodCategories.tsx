import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const CubiFoodCategories: React.FC<any> = () => {
  const categories = [
    { name: "Beverage", imageSrc: "./nophoto.png" },
    { name: "Indian", imageSrc: "./nophoto.png" },
    { name: "Chinese", imageSrc: "./nophoto.png" },
    { name: "Japanese", imageSrc: "./nophoto.png" },
    { name: "Korean", imageSrc: "./nophoto.png" },
    { name: "Malay", imageSrc: "./nophoto.png" },
    { name: "Thai", imageSrc: "./nophoto.png" },
    { name: "Western", imageSrc: "./nophoto.png" },
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
                  <Typography textAlign={"center"}>{category.name}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CubiFoodCategories;
