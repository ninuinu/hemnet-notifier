import ListingCard from "@/components/Listing/ListingCard";
import getAllUniqueListings from "@/lib/api/getUniqueListings";
import { Listing } from "@/lib/types";
import { Grid } from "@mui/material";
import Link from "next/link";
import SearchBar from "./components/SearchBar";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { Badge } from "@/components/ui/badge";

type SearchParams = {
  searchParams: { [key: string]: string };
};

export default async function SearchPage({ searchParams }: SearchParams) {
  const searchQuery = searchParams.search ?? "";

  const page = searchParams.page ? Number(searchParams.page) : 1;
  const limit = searchParams.limit ? Number(searchParams.limit) : 10;

  let listings: Listing[] = [];

  const allListings: Listing[] = await getAllUniqueListings();
  const initialListings: Listing[] = await getAllUniqueListings(page, limit);

  const filteredListings = allListings.filter((listing: Listing) => {
    return listing.address.toLowerCase().includes(searchQuery.toLowerCase());
  });

  if (searchQuery.length > 0) {
    if (filteredListings) {
      listings = filteredListings;
    } else {
      listings = [];
    }
  } else {
    listings = initialListings ?? [];
  }

  return (
    <>
      <div className="text-2xl pb-5">Search</div>
      <Grid container spacing={12}>
        <Grid item xs={4}>
          <SearchBar />
          <Button variant={"default"} size={"sm"}>
            <Mail className="mr-2 h-4 w-4" /> Login with Email
          </Button>
        </Grid>
        <Grid item xs={8}>
          <Grid container direction="column" item xs={12} spacing={2}>
            {listings.map((listing: Listing) => {
              return (
                <Grid item key={listing.hemnetListingId} xs={8}>
                  <ListingCard listing={listing}></ListingCard>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
      <div className="flex space-x-6 text-2xl pt-20">
        <Link
          href={`/search?page=${page > 1 ? page - 1 : 1}`}
          className={
            page > 1
              ? "rounded border bg-gray-100 px-3 py-1 text-m text-gray-8"
              : "rounded border bg-gray-100 px-3 py-1 text-m text-gray-8 opacity-40 pointer-events-none"
          }
        >
          Previous
        </Link>
        <Link
          href={`/search?page=${page + 1}`}
          className={"rounded border bg-gray-100 px-3 py-1 text-m text-gray-8"}
        >
          Next
        </Link>
      </div>
    </>
  );
}
