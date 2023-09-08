import { Grid, TextField } from "@mui/material";
export default function Page() {
  return (
    <>
      <div className="text-2xl pb-5">Search</div>
      <Grid container spacing={12}>
        <Grid item xs={4}>
          <TextField fullWidth label="Address" id="fullWidth" />
        </Grid>
        <Grid item xs={8}></Grid>
      </Grid>
    </>
  );
}
