import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <h1>Welcome to my Gallery</h1>
      <p>
        This is a simple gallery app built with Next.js and React.js. You can
        view images and their descriptions.
      </p>
      <Link href="/gallery">View Gallery</Link>
    </main>
  );
}
