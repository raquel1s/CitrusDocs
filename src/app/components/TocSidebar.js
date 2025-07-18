import { ArrowUp } from 'lucide-react';

export default function TocSidebar({titles}){
    return(
        <nav className="pl-12">
            <h2 className="font-bold text-xl" id="topo">
                Nesse documento
            </h2>
                <div className="flex flex-col justify-between min-h-screen">
                    <ul className="mt-5 flex flex-col gap-2">
                    {titles.map(({text,id}) => (
                        <li key={id}>
                            <a href={`#${id}`}>
                                {text}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className='flex flex-row gap-1.5 items-center'>
                    <ArrowUp size={18} strokeWidth={2.5}/>
                    <a href="#topo">Voltar ao topo</a>
                </div>
            </div>
        </nav>
    )
}