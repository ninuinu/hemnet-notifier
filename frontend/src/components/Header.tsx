import { Button, Grid } from "@mui/material";
import Link from "next/link";
import "./Header.css";

export default function () {
  const links = ["/", "/dashboard", "/track", "/search", "/notify"];
  const pages = ["Home", "Dashboard", "Track", "Search", "Notify"];

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      direction="row"
      spacing={12}
      className="p-10"
    >
      {links.map((link) => {
        return (
          <Grid item>
            <Link href={link} className="nav-bar--link text-2xl">
              {pages[links.indexOf(link)]}
            </Link>
          </Grid>
        );
      })}
      <Grid item>
        <Button className="button--sign-up" size="large">
          Sign Up
        </Button>
      </Grid>
    </Grid>
  );
}
