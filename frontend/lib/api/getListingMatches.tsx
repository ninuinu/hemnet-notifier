export default async function getListingMatches(id: string) {
  const params = `?id=${id}`;
  const res = await fetch(`http://localhost:3001/listing/matches/${params}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) throw new Error("Failed to fetch listings");

  return res.json();
}
