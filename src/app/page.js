export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="fixed bottom-[-100px] right-[-450px] w-[900px] h-[900px] bg-no-repeat bg-contain bg-right z-0 pointer-events-none"
  style={{ backgroundImage: "url('/lemon.png')" }}>
      </div>
      <div className="relative z-10 p-8">
        <header className="text-center">
          <h1 className="text-2xl font-bold">
            PLATAFORMA DE DOCUMENTAÇÕES PARA INSTITUIÇÕES
          </h1>
          <p className="mt-2">Organização com um toque cítrico de agilidade.</p>
          <button className="mt-4 px-4 py-2 bg-yellow-400 text-white rounded">
            Confira nossa última documentação
          </button>
        </header>
      </div>
    </main>
  );
}
