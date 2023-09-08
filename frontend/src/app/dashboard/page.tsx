import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Link href="/dashboard/create">/Create</Link>
    </div>
  );
}
