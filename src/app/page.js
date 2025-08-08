import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="relative z-10 overflow-x-hidden">
      
      <div
        className="
          absolute 
          top-[20px] left-1/2 -translate-x-1/2   /* desce no mobile */
          max-w-[calc(100vw-32px)] w-[200px] h-[200px] 
          sm:top-4 sm:left-auto sm:translate-x-0 sm:right-[-150px] /* mantém desktop igual */
          sm:max-w-none sm:w-[400px] sm:h-[400px]
          md:w-[600px] md:h-[600px] md:right-[-250px]
          lg:w-[900px] lg:h-[900px] lg:right-[-350px]
          bg-[url('/lemon.png')] bg-no-repeat bg-contain z-0 pointer-events-none
        "
        style={{ maxWidth: 'calc(100vw - 32px)' }}
      ></div>

    
      <div className="relative z-10 px-4 pt-[220px] pb-24 sm:px-10 sm:pt-24">
        <header className="text-center">
          <h1 className="text-2xl sm:text-4xl font-bold text-[color:var(--title)] leading-snug">
            PLATAFORMA DE DOCUMENTAÇÕES PARA <br /> INSTITUIÇÕES
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[color:var(--subtitle)]">
            Organização com um toque cítrico de agilidade.
          </p>
          <Link
            href="/docs/introducao"
            className="inline-block mt-6 px-5 py-2 bg-[var(--primary-color)] text-white rounded-md text-sm sm:text-base hover:bg-[var(--secondary-color)] transition-colors duration-300"
          >
            Confira nossa última documentação
          </Link>
        </header>
      </div>
      
      <section id="sobre-nos" className="relative z-10 px-4 py-10 sm:px-10">
        <h2 className="text-lg sm:text-xl font-semibold text-[color:var(--title)] mb-6 text-left sm:text-left">
          SOBRE NÓS
        </h2>

        <div className="flex flex-col sm:flex-row gap-8 justify-start pl-2 sm:pl-10">
          {[
            { name: 'Julia Garcia', image: '/julia.png', role: 'Programadora' },
            { name: 'Raquel da Silva', image: '/raquel.png', role: 'Programadora' },
          ].map(({ name, image, role }) => (
            <div
              key={name}
              className="
          group flex items-center gap-4
          sm:block sm:max-w-[250px] sm:w-full sm:relative
        "
            >
              <Image
                src={image}
                width={160} 
                height={160}
                alt={`Foto da desenvolvedora ${name}`}
                className="
            border-4 border-[var(--primary-color)] rounded-lg object-cover
            sm:w-full sm:h-auto
          "
              />

              <div className="sm:hidden flex flex-col">
                <h3 className="text-sm font-semibold text-[color:var(--title)]">
                  {name}
                </h3>
                <p className="text-xs mt-1 text-[color:var(--subtitle)]">
                  {role}
                </p>
              </div>

              <div className="
          hidden sm:flex sm:absolute sm:inset-0 sm:bg-[var(--bg-images)]
          sm:rounded-lg sm:opacity-0 sm:group-hover:opacity-100 sm:transition
          sm:duration-300 sm:items-center sm:justify-center sm:flex-col sm:text-white
        ">
                <h3 className="text-sm font-semibold">{name}</h3>
                <p className="text-xs mt-1">{role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>



      <section className="relative z-10 px-4 py-10 sm:px-10">
        <h2 className="text-lg sm:text-xl font-semibold text-[color:var(--title)] mb-6 text-left sm:text-left">
          ÚLTIMAS DOCUMENTAÇÕES
        </h2>
        <div className="flex flex-col sm:flex-row gap-6 items-start">
          <div className="w-full sm:w-[40%] max-w-[400px]">
            <Image
              src="/formulario.png"
              width={400}
              height={350}
              alt="Imagem demonstrativa do formulário documentado"
              className="border-4 border-[var(--primary-color)] rounded-lg w-full h-auto object-cover"
            />
          </div>
          <div className="w-full sm:w-[60%] mt-6 sm:mt-0">
            <h3 className="text-lg sm:text-xl font-semibold text-[color:var(--title)]">
              DIÁRIO DE BORDO CENTROWEG
            </h3>
            <p className="text-sm sm:text-base pt-2 font-medium text-[color:var(--subtitle)] pb-6 max-w-md">
              Diário de bordo escolar voltado ao controle diário das aulas aplicadas.
            </p>
            <Link
              href="/docs/introducao"
              className="inline-block px-4 py-2 bg-[var(--primary-color)] text-white rounded-md text-sm hover:bg-[var(--secondary-color)] transition-colors duration-300"
            >
              Confira a documentação
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
