import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>New app</h1>
      <p>Start the rails app in port 3000</p>
      <p>There are 4 pages (One, Two, Three, Four) in the old (rails) app.</p>
      <p>
        This Nextjs app will redirect any not found path to the fallback url
        (Rails app)
      </p>
    </>
  );
}
