"use client";

import { useState } from "react";
import Link from 'next/link';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function Sidebar() {
    const [openMenus, setOpenMenus] = useState([]);

    const toggleMenu = (menuName) => {
        setOpenMenus(prev =>
            prev.includes(menuName)
                ? prev.filter(name => name !== menuName)
                : [...prev, menuName]
        );
    };

    return (
        <nav className="pl-7">
            <h2 className="font-bold text-xl">Diário de bordo</h2>
            <div className="mt-5">
                <ul className="text-[color:var(--title)] flex flex-col gap-2">
                    <li>
                        <Link href="/docs/introducao">Introdução</Link>
                    </li>
                    <li>
                        <Link href="/docs/pre-requisitos">Pré-requisitos</Link>
                    </li>
                    <li>
                        <Link href="/docs/interface-e-navegacao">Interface e Navegação</Link>
                    </li>
                    <li>
                        <button onClick={() => toggleMenu("funcionalidades-principais")}
                            className="flex flex-row gap-3 items-center">
                            Funcionalidades Principais
                            <span>
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
                                    <Link href="/docs/funcionalidades-principais/preenchimento-representantes">
                                        Preenchimento Diário pelos Representantes
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/docs/funcionalidades-principais/edicao-pedagogico">
                                        Edição e Personalização pela Equipe Pedagógica
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li>
                        <Link href="/docs/configuracoes-e-personalizacao">
                            Configurações e Personalização
                        </Link>
                    </li>
                    <li>
                        <button onClick={() => toggleMenu("recursos-uteis")}
                            className="flex flex-row gap-3 items-center">
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
                                    <Link href="/docs/recursos-uteis/erros-comuns-e-solucoes">
                                        Erros Comuns e Soluções
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/docs/recursos-uteis/dicas-e-atalhos">Dicas e Atalhos</Link>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li>
                        <Link href="/docs/referencias-e-creditos">
                            Referências e Créditos
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
