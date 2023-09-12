import ListingCard from "@/components/Listing/ListingCard";
import getAllListings from "@/lib/api/getAllListings";
import { Grid } from "@mui/material";
import Link from "next/link";
import SearchBar from "./components/SearchBar";

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page = searchParams.page ? Number(searchParams.page) : 1;
  const limit = searchParams.limit ? Number(searchParams.limit) : 10;

  const listings: any = await getAllListings(page, limit);

  const start = (Number(page) - 1) * Number(limit);

  return (
    <>
      <div className="text-2xl pb-5">Search</div>
      <Grid container spacing={12}>
        <Grid item xs={4}>
          <SearchBar />
        </Grid>
        <Grid item xs={8}>
          <Grid container direction="column" item xs={12} spacing={2}>
            {listings.map((listing: any) => {
              return (
                <Grid item xs={8}>
                  <ListingCard listing={listing}></ListingCard>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
      <div className="flex space-x-6 text-2xl">
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
