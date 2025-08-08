"use client";

import Link from 'next/link';
import { useState } from "react";
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function Sidebar({ onLinkClick }) {
    const [openMenus, setOpenMenus] = useState([]);

    const toggleMenu = (menuName) => {
        setOpenMenus(prev =>
            prev.includes(menuName)
                ? prev.filter(name => name !== menuName)
                : [...prev, menuName]
        );
    };

    // Chama onLinkClick se existir (para fechar menu no mobile)
    const handleClick = () => {
        if (onLinkClick) onLinkClick();
    };

    return (
        <nav className="pl-7 pr-4">
            <h2 className="font-bold text-xl">Diário de bordo</h2>
            <div className="mt-5">
                <ul className="text-[color:var(--title)] flex flex-col gap-2">
                    <li>
                        <Link className='hover:text-[color:var(--secondary-color)]' href="/docs/introducao" onClick={handleClick}>Introdução</Link>
                    </li>
                    <li>
                        <Link className='hover:text-[color:var(--secondary-color)]' href="/docs/pre-requisitos" onClick={handleClick}>Pré-requisitos</Link>
                    </li>
                    <li>
                        <Link className='hover:text-[color:var(--secondary-color)]' href="/docs/interface-e-navegacao" onClick={handleClick}>Interface e Navegação</Link>
                    </li>
                    <li>
                        <button
                            onClick={() => toggleMenu("funcionalidades-principais")}
                            className="flex flex-row gap-3 items-start hover:text-[color:var(--secondary-color)]"
                            aria-expanded={openMenus.includes("funcionalidades-principais")}
                        >
                            <span className="block text-left">
                                Funcionalidades Principais
                            </span>
                            <span className="flex-shrink-0 mt-1">
                                {openMenus.includes("funcionalidades-principais") ? (
                                    <ChevronUp size={18} />
                                ) : (
                                    <ChevronDown size={18} />
                                )}
                            </span>
                        </button>


                        {openMenus.includes("funcionalidades-principais") && (
                            <ul className="text-[color:var(--title)] flex flex-col gap-2 text-sm my-2 pl-3">
                                <li>
                                    <Link
                                        href="/docs/funcionalidades-principais/preenchimento-representantes"
                                        className="underline underline-offset-1 hover:text-[color:var(--secondary-color)]"
                                        onClick={handleClick}
                                    >
                                        Preenchimento Diário pelos Representantes
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/docs/funcionalidades-principais/edicao-adm"
                                        className="underline underline-offset-1 hover:text-[color:var(--secondary-color)]"
                                        onClick={handleClick}
                                    >
                                        Edição e Personalização pela Equipe Pedagógica
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li>
                        <Link className='hover:text-[color:var(--secondary-color)]' href="/docs/configuracoes-e-personalizacao" onClick={handleClick}>
                            Configurações e Personalização
                        </Link>
                    </li>
                    <li>
                        <button
                            onClick={() => toggleMenu("recursos-uteis")}
                            className="flex flex-row gap-3 items-center hover:text-[color:var(--secondary-color)]"
                            aria-expanded={openMenus.includes("recursos-uteis")}
                        >
                            Recursos Úteis
                            <span>
                                {openMenus.includes("recursos-uteis") ? (
                                    <ChevronUp size={18} />
                                ) : (
                                    <ChevronDown size={18} />
                                )}
                            </span>
                        </button>
                        {openMenus.includes("recursos-uteis") && (
                            <ul className="text-[color:var(--title)] flex flex-col gap-2 text-sm my-2 pl-3">
                                <li>
                                    <Link
                                        href="/docs/recursos-uteis/erros-comuns-e-solucoes"
                                        className="underline underline-offset-1 hover:text-[color:var(--secondary-color)]"
                                        onClick={handleClick}
                                    >
                                        Erros Comuns e Soluções
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/docs/recursos-uteis/dicas-e-atalhos"
                                        className="underline underline-offset-1 hover:text-[color:var(--secondary-color)]"
                                        onClick={handleClick}
                                    >
                                        Dicas e Atalhos
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li>
                        <Link className='hover:text-[color:var(--secondary-color)]' href="/docs/referencias-e-creditos" onClick={handleClick}>
                            Referências e Créditos
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
