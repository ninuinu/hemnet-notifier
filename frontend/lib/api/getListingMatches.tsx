export default async function getListing(id: string) {
  const params = `?id=${id}`;
  const res = await fetch(`http://localhost:3001/listing/matches/${params}`);
  if (!res.ok) throw new Error("Failed to fetch listings");

  return res.json();
}
