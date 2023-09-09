import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";
import img from "../../public/listing.jpg";

interface Listing {
  address: string;
}

export default function (props: Listing) {
  return (
    <>
      <Card sx={{ maxWidth: 800 }}>
        <CardActionArea>
          <Grid container direction="row" xs={12}>
            <Grid item xs={6}>
              <img src={img.src} alt="Logo" width={500} height={250} />
            </Grid>
            <Grid item xs={6}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {props.address}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </Grid>
          </Grid>
        </CardActionArea>
      </Card>
    </>
  );
}
