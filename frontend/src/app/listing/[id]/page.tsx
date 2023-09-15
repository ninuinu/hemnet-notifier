import getListing from "@/lib/api/getListing";
import ListingInformation from "./components/ListingInformation";
import { Grid } from "@mui/material";
import getListingMatches from "@/lib/api/getListingMatches";
import formatNumberWithSpaces from "@/lib/formatNumberWithSpaces";
import ListingMatches from "./components/ListingMatches";
import { Listing } from "@/shared/types";
import { match } from "assert";

type Params = {
  params: {
    id: string;
  };
};

export default async function ListingPage({ params: { id } }: Params) {
  const listing = await getListing(id);
  const matches: Listing[] = await getListingMatches(id);

  const hasMatches = matches.length > 1;

  return (
    <>
      <Grid container justifyContent="center">
        <Grid item xs={5}>
          <ListingInformation listing={listing}></ListingInformation>
          {hasMatches && <ListingMatches id={id} matches={matches} />}
        </Grid>
      </Grid>
    </>
  );
}
