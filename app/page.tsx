import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Image src="/images/cybermate-logo.jpg" alt="Cybermate Logo" width={200} height={200} />
      <h1>Cybermate Consulting, Singapore</h1>
    </div>
  );
}
