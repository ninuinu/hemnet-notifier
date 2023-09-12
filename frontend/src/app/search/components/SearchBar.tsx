"use client";
import { Listing } from "@/shared/types";
import { TextField } from "@mui/material";
import { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  const searchFilter = (listings: Listing[]) => {
    return listings.filter((listing: Listing) =>
      listing.address.toLowerCase().includes(query)
    );
  };

  return <TextField fullWidth label="Address" id="fullWidth" />;
}
