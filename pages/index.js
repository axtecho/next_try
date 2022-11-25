import Anchor from "../components/anchor";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>Frontpage</title>
      </Head>
      <Anchor href="/dogs/henry">Henry</Anchor>
    </>
  );
}
