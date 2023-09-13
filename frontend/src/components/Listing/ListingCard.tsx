import formatNumberWithSpaces from "@/lib/formatNumberWithSpaces";
import { Listing } from "@/shared/types";
import { CardActionArea, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Link from "next/link";

type ListingCardProps = {
  listing: Listing;
};

export default function ({ listing }: ListingCardProps) {
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
                  <Grid container justifyContent="space-between">
                    <div>
                      <Typography>{price} kr</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {monthlyFee} kr/mån
                      </Typography>
                    </div>

                    <div>
                      <Typography>{} kr</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {monthlyFee} kr/mån
                      </Typography>
                    </div>

                    <div>
                      <Typography>{price} kr</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {monthlyFee} kr/mån
                      </Typography>
                    </div>
                  </Grid>
                </CardContent>
              </Grid>
            </Grid>
          </CardActionArea>
        </Card>
      </Link>
    </>
  );
}
