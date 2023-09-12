import getListing from "@/lib/api/getListing";
import Listing from "./components/Listing";
import { Grid } from "@mui/material";

type Params = {
  params: {
    id: string;
  };
};

export default async function ListingPage({ params: { id } }: Params) {
  const listing = await getListing(id);

  return (
    <>
      <Grid container justifyContent="center">
        <Grid item xs={5}>
          <Listing listing={listing}></Listing>
        </Grid>
      </Grid>
    </>
  );
}
