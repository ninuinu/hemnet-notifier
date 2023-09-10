import getListing from "@/lib/api/getListing";
import Listing from "./components/Listing";

type Params = {
  params: {
    hemnetListingId: string;
  };
};

export default async function Page({ params: { hemnetListingId } }: Params) {
  const listing = getListing(hemnetListingId);
  await listing;

  return <>{<Listing promise={listing}></Listing>}</>;
}
