export default function Footer() {
  return (
    <footer className="flex flex-col sm:flex-row justify-between items-center w-full bg-[var(--primary-color)]
     text-white font-bold text-center text-sm sm:text-base px-4 sm:px-10 py-6 gap-4 sm:gap-0 sm:mt-14">
      <p>© 2025 CitrusDocs. Todos os direitos reservados.</p>
      <div className="text-center sm:text-right">
        <p>30/05/2025 - 00/00/0000</p>
        <p>Disciplina: Documentação de Sistemas</p>
      </div>
    </footer>
  );
}
