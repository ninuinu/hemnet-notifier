export default async function getListing(id: string) {
  const res = await fetch(`http://localhost:3001/listing/${id}`);
  if (!res.ok) throw new Error("Failed to fetch listings");

  return res.json();
}
