import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className='relative z-10'>
      <div className="absolute top-[100px] -right-[450px] w-[900px] h-[900px] bg-[url('/lemon.png')] bg-no-repeat bg-contain z-0 pointer-events-none"></div>
      <div className="relative z-10 p-20">
        <header className="text-center">
          <h1 className="text-3xl font-bold w-5xl m-auto text-[color:var(--title)]">
            PLATAFORMA DE DOCUMENTAÇÕES PARA <br /> INSTITUIÇÕES
          </h1>
          <p className="mt-7 text-xl text-[color:var(--subtitle)] pb-10">Organização com um toque cítrico de agilidade.</p>
          <Link href="/docs/introducao"
            className="mt-16 px-6 py-2 bg-[var(--primary-color)] text-white rounded text-lg hover:bg-[var(--secondary-color)]">
            Confira nossa última documentação
          </Link>
        </header>
      </div>

      <section className='p-10'>
        <h2 className="text-xl font-semibold text-[color:var(--title)]">SOBRE NÓS</h2>
        <div className="pt-6 flex flex-row gap-15">
          <div className='relative w-[250px] h-[250px] group'>
            <Image
              src="/julia.png"
              width={250}
              height={250}
              alt= "Foto da desenvolvedora Julia Garcia"
              className="border-4 border-[var(--primary-color)] rounded-lg object-cover"
            />
            <div className='absolute inset-0 bg-[var(--bg-images)] group-hover: rounded-lg transition duration-300 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100'>
              <h3 className='text-lg font-semibold'>Julia Garcia</h3>
              <p className='text-sm mt-1 px-2 text-center'>Pro</p>
            </div>
          </div>

          <div className='relative w-[250px] h-[250px] group'>
            <Image
              src="/raquel.png"
              width={250}
              height={250}
              alt= "Foto da desenvolvedora Raquel da Silva"
              className="border-4 border-[var(--primary-color)] rounded-lg object-cover"
            />
            <div className='absolute inset-0 bg-[var(--bg-images)] group-hover: rounded-lg transition duration-300 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100'>
              <h3 className='text-lg font-semibold'>Raquel da Silva</h3>
              <p className='text-sm mt-1 px-2 text-center'>Pro</p>
            </div>
          </div>
        </div>
      </section>

      <section className='p-10 pt-30'>
        <h2 className="text-xl font-semibold text-[color:var(--title)]">ULTIMAS DOCUMENTAÇÕES</h2>
        <div className='flex flex-row gap-10'>
          <div className='pt-6'>
            <Image
              src="/formulario.png"
              width={450}
              height={400}
              alt= "Imagem demostrativa do formulário documentado"
              className="border-4 border-[var(--primary-color)] rounded-lg object-cover"
            />
          </div>

          <div className='pt-5'>
            <h3 className='text-xl font-semibold text-[color:var(--title)]'>DIÁRIO DE BORDO CENTROWEG</h3>
            <p className='text-lg pt-2 font-medium text-[color:var(--subtitle)] pb-10  max-w-xs'>Diário de bordo escolar voldada ao controle diário das aulas aplicadas.</p>
            <Link href="/docs/introducao"
            className=" p-2 bg-[var(--primary-color)] text-white rounded text-base hover:bg-[var(--secondary-color)]">
            Confira a documentação
          </Link>
          </div>
        </div>

      </section>
    </main>
  );
}
