import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-around",
          padding: "25px 0",
          backgroundColor: "#ececec",
        }}
      >
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/test/one">
          <a>One</a>
        </Link>
        <Link href="/test/two">
          <a>Two</a>
        </Link>
        <Link href="/test/three">
          <a>Three</a>
        </Link>
        <Link href="/test/four">
          <a>Four</a>
        </Link>
      </nav>
      <main>{children}</main>
    </>
  );
};

export default Layout;
