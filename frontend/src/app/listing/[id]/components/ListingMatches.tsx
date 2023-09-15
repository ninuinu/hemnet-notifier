import formatNumberWithSpaces from "@/lib/formatNumberWithSpaces";
import { Listing } from "@/shared/types";

type ListingMatchesProps = {
  id: string;
  matches: Listing[];
};

export default async function ListingMatches({
  id,
  matches,
}: ListingMatchesProps) {
  const matchesExcludingListing: Listing[] = matches.filter(
    (match) => match.id !== Number(id)
  );

  console.log(matchesExcludingListing);

  return (
    <>
      <div className="py-10 text-2xl">Price reductions</div>
      {matchesExcludingListing.map((listing) => {
        return (
          <>
            <div className="flex space-x-5">
              <span key={listing.id}>{listing.datePublished}</span>
              <span key={listing.id}>
                {formatNumberWithSpaces(listing.price)} kr
              </span>
            </div>
          </>
        );
      })}
    </>
  );
}
