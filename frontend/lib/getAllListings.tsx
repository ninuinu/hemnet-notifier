export default async function getAllListings() {
  const res = await fetch("http://localhost:3001/listing/");

  if (!res.ok) throw new Error("Failed to fetch listings");

  return res.json();
}
