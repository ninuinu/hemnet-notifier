import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";
import img from "../../public/listing.jpg";
import Link from "next/link";
import formatNumberWithSpaces from "@/lib/formatNumberWithSpaces";

interface Listing {
  listing: any;
}

export default function ({ listing }: Listing) {
  const price = formatNumberWithSpaces(listing.price);
  const monthlyFee = formatNumberWithSpaces(listing.monthlyFee);

  return (
    <>
      <Link href={`/listing/${listing.id}`}>
        <Card sx={{ maxWidth: 800, height: 182 }}>
          <CardActionArea>
            <Grid container direction="row">
              <img
                src={listing.imageUrl}
                alt="Logo"
                width={400}
                height={"auto"}
              />
              <Grid item xs={6}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {listing.address}
                  </Typography>

                  <br />

                  <div>
                    <Typography>{price} kr</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {monthlyFee} kr/mån
                    </Typography>
                  </div>
                </CardContent>
              </Grid>
            </Grid>
          </CardActionArea>
        </Card>
      </Link>
    </>
  );
}
