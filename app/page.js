import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="container">
        <h1>MMG ASI CANDIDATE PREVIEW</h1>
        <Link href='/about'>
        <button>
          About Page
        </button>
        </Link>
        <Link href='/quiz'>
        <button>
          Start Quiz!
        </button>
        </Link>
      </div>
    </main>
  );
}
