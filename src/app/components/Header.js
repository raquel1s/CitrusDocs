import Image from "next/image";

export default function Home(){
    return (
        <header className="flex flex-row justify-between items-center py-3 shadow-md">
            <div className="flex flex-row items-center pl-18">
                <Image 
                    src="/citrus-docs.png"
                    alt="limão siciliano"
                    width={60}
                    height={70}
                />
                <h1 className="text-[color:var(--title)] font-bold text-xl">CITRUSDOCS</h1>
            </div>
            <nav className="pr-18 text-[color:var(--subtitle)]">
                <ul className="flex flex-row gap-6 text-lg">
                    <li>Home</li>
                    <li>Sobre nós</li>
                    <li>Documentação</li>
                </ul>
            </nav>
        </header>
    );
}