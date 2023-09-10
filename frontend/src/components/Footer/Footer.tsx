import Link from "next/link";
import "./Footer.css";

export default function () {
  return (
    <>
      <footer className="footer">
        <section className="text-[#ffffff] link-group">
          <h1 className="text-2xl">Company</h1>
          <ul>
            <Link href="/">About Us</Link>
            <Link href="/">Careers</Link>
          </ul>
        </section>
        <section className="text-[#ffffff] link-group">
          <h1 className="text-2xl">Social</h1>
          <ul>
            <Link href="/">Instagram</Link>
            <Link href="/">LinkedIn</Link>
            <Link href="/">Facebook</Link>
          </ul>
        </section>
        <section className="text-[#ffffff] link-group">
          <h1 className="text-2xl">Support</h1>
          <ul>
            <Link href="/">Account</Link>
            <Link href="/">Product</Link>
          </ul>
        </section>
      </footer>
    </>
  );
}
