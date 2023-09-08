import { Grid } from "@mui/material";
import Link from "next/link";
import { Container } from "@mui/material";

export default function () {
  return (
    <div className=".m-8">
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        direction="column"
        spacing={1}
      >
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/track">Track</Link>
        <Link href="/search">Search</Link>
        <Link href="/notify">Notify</Link>
      </Grid>
    </div>
  );
}
