type Props = {
  promise: Promise<any>;
};

export default async function Listing({ promise }: Props) {
  const listing = await promise;

  console.log(listing);

  return (
    <section key={listing.id}>
      <h2>{listing.address}</h2>
      <img src={listing.imageUrl} alt={listing.address} />
    </section>
  );
}
