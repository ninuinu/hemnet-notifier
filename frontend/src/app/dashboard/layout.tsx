export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {<div>Shared Component</div>}
      <nav></nav>

      {children}
    </section>
  );
}
