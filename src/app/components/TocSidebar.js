import { ArrowUp } from 'lucide-react';

export default function TocSidebar({ titles }) {
    return (
        Array.isArray(titles) && titles.length > 0 && (
            <nav className="px-12 flex flex-col justify-between h-full">
                <div className="">
                    <h2 className="font-bold text-xl" id="topo">
                        Nesse documento
                    </h2>
                    <ul className="mt-5 flex flex-col gap-2">
                        {titles.map(({ text, id }) => (
                            <li key={id}>
                                <a href={`#${id}`} className='hover:text-[color:var(--secondary-color)]'>
                                    {text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-row gap-1.5 items-center mb-10">
                    <ArrowUp size={18} strokeWidth={2.5} />
                    <a href="#topo">Voltar ao topo</a>
                </div>

            </nav>
        )
    )
}