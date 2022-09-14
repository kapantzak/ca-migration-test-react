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
        <Link href="/article">
          <a>Article index</a>
        </Link>
        <Link href="/article/show">
          <a>Article show</a>
        </Link>
      </nav>
      <main>{children}</main>
    </>
  );
};

export default Layout;
