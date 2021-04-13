import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <div>Home</div>
      <Link href="/spotify">
        <a href="/spotify">Spotify</a>
      </Link>
    </>
  );
}
