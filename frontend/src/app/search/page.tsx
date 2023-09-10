import ListingCard from "@/components/ListingCard";
import { Grid, TextField } from "@mui/material";
export default function Page() {
  const listings = ["Drottninggatan 32", "Hornsgatan 12", "Björkvägen 9"];
  return (
    <>
      <div className="text-2xl pb-5">Search</div>
      <Grid container spacing={12}>
        <Grid item xs={4}>
          <TextField fullWidth label="Address" id="fullWidth" />
        </Grid>
        <Grid item xs={8}>
          <Grid container direction="column" item xs={12} spacing={4}>
            {listings.map((address) => {
              return (
                <Grid item xs={8}>
                  <ListingCard address={address}></ListingCard>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
