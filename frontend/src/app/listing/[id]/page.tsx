import getListing from "@/lib/api/getListing";
import Listing from "./components/Listing";
import "./page.css";

type Params = {
  params: {
    id: string;
  };
};

export default async function Page({ params: { id } }: Params) {
  const listing = getListing(id);
  await listing;

  return (
    <>
      <section className="container">
        <Listing promise={listing}></Listing>
      </section>
    </>
  );
}
