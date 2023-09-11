export default async function getAllListings(page?: number, limit?: number) {
  let params = "";
  if (page && limit) {
    params = `/?page=${page}&limit=${limit}`;
  }

  const res = await fetch(`http://localhost:3001/listing${params}`);

  if (!res.ok) throw new Error("Failed to fetch listings");

  return res.json();
}
