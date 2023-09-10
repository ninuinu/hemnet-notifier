type Props = {
  promise: Promise<any>;
};

export default async function Listing({ promise }: Props) {
  const listing = await promise;

  return (
    <article key={listing.id}>
      <h2>{listing.address}</h2>
    </article>
  );
}
