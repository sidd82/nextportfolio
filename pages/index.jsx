import Link from "next/link";
import Layout from "../components/Layout";

const Index = () => {
  return (
    <Layout title="Home">
      <Link href="/about">
        <a>Go To About</a>
      </Link>
      <p>welcome to home page</p>
    </Layout>
  );
};

export default Index;
