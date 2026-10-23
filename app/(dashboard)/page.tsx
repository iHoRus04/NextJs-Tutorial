import Link from "next/link";

export const metadata = {
  title: "Dashboard",
};

function Dashboard() {
  return (
    <>
      <h1>Hello World</h1>
      <Link href={'/products'}>Products</Link>
    </>
  );
}

export default Dashboard;
