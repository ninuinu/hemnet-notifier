import { Button, Grid } from "@mui/material";
import Link from "next/link";
import "./Header.css";

export default function () {
  const links = ["/", "/dashboard", "/track", "/search", "/notify"];
  const pages = ["Home", "Dashboard", "Track", "Search", "Notify"];

  return (
    <nav>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        direction="row"
        spacing={5}
        className="p-6 nav-bar"
      >
        {links.map((link) => {
          return (
            <Grid item>
              <Link href={link} className="nav-bar--link text-xl px-4 py-2">
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
    </nav>
  );
}
