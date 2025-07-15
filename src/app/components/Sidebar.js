"use client";

import { useState } from "react";
import Link from 'next/link';

export default function Sidebar() {
    const [openMenu, setOpenMenu] = useState(null);

    const toggleMenu = (menuName) => {
        setOpenMenu(openMenu === menuName ? null : menuName);
    };

    return (
        <nav>
            <h2>Diário de bordo</h2>
            <div>
                <ul>
                    <li>
                        <Link href="../docs/introducao">
                            Introdução
                        </Link>
                    </li>
                    <li>
                        <Link href="../docs/pre-requisitos">
                            Pré-requisitos
                        </Link>
                    </li>
                    <li>
                        <Link href="../docs/interface-e-navegacao">
                            Interface e Navegação
                        </Link>
                    </li>
                    <li>
                        <button onClick={() => toggleMenu("funcionalidades-principais")}>
                            Funcionalidades Principais
                            <span>{openMenu === "funcionalidades-principais" ? "▲" : "▼"}</span>
                        </button>
                        {openMenu === "funcionalidades-principais" && (
                            <ul>
                                <li>
                                    <Link href="../docs/preenchimento-representantes">Preenchimento Diário pelos Representantes</Link>
                                </li>
                                <li>
                                    <Link href="../docs/edicao-pedagogico">Edição e Personalização pela Equipe Pedagógica</Link>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li>
                        <Link href="../docs/configuracoes-e-personalizacao">
                            Configurações e Personalização
                        </Link>
                    </li>
                    <li>
                        <button onClick={() => toggleMenu("recursos-uteis")}>
                            Recursos Úteis
                            <span>{openMenu === "recursos-uteis" ? "▲" : "▼"}</span>
                        </button>
                        {openMenu === "recursos-uteis" && (
                            <ul>
                                <li>
                                    <Link href="../docs/erros-comuns-e-solucoes">Erros Comuns e Soluções</Link>
                                </li>
                                <li>
                                    <Link href="../docs/dicas-e-atalhos">Dicas e Atalhos</Link>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li>
                        <Link href="../docs/referencias-e-creditos">
                            Referências e Créditos
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}