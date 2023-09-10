import getAllListings from "@/lib/api/getAllListings";
import Link from "next/link";

export default async function Page() {
  const listingsData: Promise<any[]> = getAllListings();
  const listings = await listingsData;

  const content = (
    <section>
      <h1>
        <Link href="/">Back to Home</Link>
      </h1>
      {listings.map((listing) => {
        return (
          <>
            <p key={listing.id}>
              <Link href={`/listing/${listing.id}`}> {listing.address} </Link>
            </p>
          </>
        );
      })}
    </section>
  );
  ``;
  return (
    <>
      <div>{content}</div>
    </>
  );
}
