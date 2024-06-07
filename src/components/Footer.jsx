import Link from "./Link";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="copyright">
        <div>
          <Link href="/about" name="About us" />
          <Link href="/contact" name="Contact us" />
        </div>
        <p>© {year} The Emporium</p>
      </footer>
    </>
  );
}

export default Footer;
