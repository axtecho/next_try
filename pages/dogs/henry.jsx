import Image from "next/image";

export default function Henry() {
  return (
    <>
      <h1>Henry</h1>
      <Image
        src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e"
        alt="Cute dog"
        width="4240"
        height="2832"
        //Disables lazy load - do that if img is above the page fold

        priority
        sizes="100vw"
      />
    </>
  );
}
