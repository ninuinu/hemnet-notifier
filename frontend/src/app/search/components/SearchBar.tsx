"use client";
import { Listing } from "@/shared/types";
import { TextField } from "@mui/material";
import { ChangeEvent, useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  const searchFilter = (listings: Listing[]) => {
    return listings.filter((listing: Listing) =>
      listing.address.toLowerCase().includes(query)
    );
  };

  const handleChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setQuery(e.target.value);
  };
  return (
    <>
      <TextField
        fullWidth
        label="Address"
        id="fullWidth"
        onChange={handleChange}
      />
    </>
  );
}
