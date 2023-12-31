import React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Textfield from "@mui/material/TextField";
import FormHelperText from "@mui/material/FormHelperText";
import { Link } from "react-router-dom";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControlLabel";
import { Container, FormControlLabel, FormLabel } from "@mui/material";
import ListingCard from "./ListingCard";

export default function Search(props: any) {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      direction="column"
      spacing={1}
    >
      <Grid item textAlign="center" xs={2}>
        <Typography>Search for a listing</Typography>
      </Grid>
      <Grid item textAlign="center" xs={2}>
        <FormLabel component="legend">Display purchasing price</FormLabel>
        <RadioGroup row defaultValue="yes">
          <FormControl value="yes" control={<Radio />} label="Yes" />
          <FormControl value="no" control={<Radio />} label="No" />
        </RadioGroup>
      </Grid>
      <Grid item textAlign="center" xs={2}>
        <ListingCard />
      </Grid>
    </Grid>
  );
}
