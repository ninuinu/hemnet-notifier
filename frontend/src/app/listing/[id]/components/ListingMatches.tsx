import formatNumberWithSpaces from "@/lib/formatNumberWithSpaces";
import { Listing } from "@/shared/types";

type ListingMatchesProps = {
  id: string;
  matches: Listing[];
  currentPrice: number;
};

export default async function ListingMatches({
  id,
  matches,
  currentPrice,
}: ListingMatchesProps) {
  const matchesExcludingListing: Listing[] = matches.filter(
    (match) => match.id !== Number(id)
  );

  return (
    <>
      <div className="py-5 text-2xl">Historical data</div>
      {matchesExcludingListing.map((match) => {
        return (
          <>
            <div className="flex space-x-5">
              <span key={match.id}>{match.datePublished}</span>
              <span key={match.id}>
                {formatNumberWithSpaces(match.price)} kr
              </span>
              <span>
                {match.price - currentPrice < 0 ? "+ " : "-"}
                {formatNumberWithSpaces(match.price - currentPrice)} kr
              </span>
            </div>
          </>
        );
      })}
    </>
  );
}
