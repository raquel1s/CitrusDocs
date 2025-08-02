import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-center py-4 px-4 sm:px-10 shadow-md bg-white">
      <Link href="/" className="flex flex-row items-center mb-2 sm:mb-0">
        <Image
          src="/citrus-docs.png"
          alt="limão siciliano"
          width={50}
          height={60}
        />
        <h1 className="ml-2 text-[color:var(--title)] font-bold text-xl">CITRUSDOCS</h1>
      </Link>
      <nav>
        <ul className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-[color:var(--subtitle)] text-base sm:text-lg text-center sm:text-left">
          <li className="hover:text-[color:var(--primary-color)]"><Link href="/">Home</Link></li>
          <li className="hover:text-[color:var(--primary-color)]"><Link href="/#sobre-nos">Sobre nós</Link></li>
          <li className="hover:text-[color:var(--primary-color)]"><Link href="/docs/introducao">Documentação</Link></li>
        </ul>
      </nav>
    </header>
  );
}
