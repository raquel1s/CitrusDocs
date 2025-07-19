import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md flex justify-between items-center py-4 px-8">
            <Link href={"../"}>
            <div className="flex flex-row items-center pl-18">
                
                    <Image
                        src="/citrus-docs.png"
                        alt="limão siciliano"
                        width={60}
                        height={70}
                    />
                    <h1 className="text-[color:var(--title)] font-bold text-xl">CITRUSDOCS</h1>
                
            </div>
            </Link>
            <nav className="pr-18 text-[color:var(--subtitle)]">
                <ul className="flex flex-row gap-6 text-lg">
                    <li className="hover:text-[color:var(--primary-color)]"><Link href="../">Home</Link></li>
                    <li className="hover:text-[color:var(--primary-color)]"><Link href="../">Sobre nós</Link></li>
                    <li className="hover:text-[color:var(--primary-color)]"><Link href="../docs/introducao">Documentação</Link></li>
                </ul>
            </nav>
        </header>
    );
}