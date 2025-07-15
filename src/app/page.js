import Link from 'next/link';

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="fixed bottom-[-100px] right-[-450px] w-[900px] h-[900px] bg-no-repeat bg-contain bg-right z-0 pointer-events-none"
  style={{ backgroundImage: "url('/lemon.png')" }}>
      </div>
      <div className="relative z-10 p-20">
        <header className="text-center">
          <h1 className="text-5xl font-bold w-5xl m-auto text-[color:var(--title)]">
            PLATAFORMA DE DOCUMENTAÇÕES PARA INSTITUIÇÕES
          </h1>
          <p className="mt-7 text-2xl text-[color:var(--subtitle)]">Organização com um toque cítrico de agilidade.</p>
          <Link href="/docs/introducao"
          className="mt-16 px-6 py-2 bg-[var(--primary-color)] text-white rounded text-lg">
              Confira nossa última documentação
          </Link>
        </header>
      </div>
    </main>
  );
}
