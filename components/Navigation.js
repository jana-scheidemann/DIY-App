import Link from "next/link";
export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/create">New Project</Link>
        </li>
        <li>
          <Link href="/favorites">Favorite Projects</Link>
        </li>
      </ul>
    </nav>
  );
}
