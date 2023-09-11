import getListing from "@/lib/api/getListing";
import Listing from "./components/Listing";
import "./page.css";
import { Grid } from "@mui/material";

type Params = {
  params: {
    id: string;
  };
};

export default async function Page({ params: { id } }: Params) {
  const listing = await getListing(id);

  return (
    <>
      <Grid container>
        <Grid item xs={5}>
          <Listing listing={listing}></Listing>
        </Grid>
      </Grid>
    </>
  );
}
