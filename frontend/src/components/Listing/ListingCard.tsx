import formatNumberWithSpaces from "@/lib/formatNumberWithSpaces";
import { Listing } from "@/shared/types";
import { CardActionArea, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import ListingAttributeTag from "./ListingAttributeTag";
import "./ListingCard.css";

type ListingCardProps = {
  listing: Listing;
};

export const translateBalconyAttribute = (
  balconyAttributeInSwedish: string
) => {
  const translator: any = {
    Ja: "Yes",
    Nej: "No",
    "": "No",
  };
  return translator[balconyAttributeInSwedish];
};

export default function ({ listing }: ListingCardProps) {
  const price = formatNumberWithSpaces(listing.price);
  const monthlyFee = formatNumberWithSpaces(listing.monthlyFee);
  const sqmPrice = formatNumberWithSpaces(listing.sqmPrice);
  const tags: string[] = [];

  if (listing.balcony === "Ja") {
    tags.push("Balcony");
  }
  if (listing.elevator === "hiss finns") {
    tags.push("Elevator");
  }
  if (listing.patio === "Ja") {
    tags.push("Patio");
  }
  console.log(listing.elevator);

  return (
    <>
      <Link href={`/listing/${listing.id}`}>
        <Card
          sx={{ maxWidth: 800, height: 182, boxShadow: 0 }}
          className="listing-card rounded-lg"
        >
          <CardActionArea>
            <Grid container direction="row">
              <img
                src={listing.imageUrl}
                alt="Logo"
                width={400}
                height={"auto"}
              />
              <Grid item xs={6} className="px-2">
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
                      <Typography>{listing.sqmSize} m²</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {sqmPrice} kr/m²
                      </Typography>
                    </div>

                    <div>
                      <Typography>{listing.roomCount} rooms</Typography>
                    </div>
                  </Grid>
                  <Grid container className="mt-2">
                    {tags.map((tag, index) => {
                      return (
                        <ListingAttributeTag
                          key={index}
                          tag={tag}
                          index={index}
                        ></ListingAttributeTag>
                      );
                    })}
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
