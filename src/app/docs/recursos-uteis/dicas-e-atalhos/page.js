import DocLayout from "@/app/components/DocLayout";
import Image from 'next/image';

export default function DicasAtalhos(){
    return(
        <DocLayout>
            <h1>Dicas e Atalhos</h1>
            <ul>
                <li>Utilize Visualização após cada edição para checar o funcionamento;</li>
                <Image
                    className="pt-5 pb-10"
                    src="/usar-visualizar.png"
                    alt="Campo de seleção de curso"
                    width={250}
                    height={150}
                />
                <li>Faça backups regulares do formulário;</li>
                <Image
                    className="pt-5 pb-10"
                    src="/fazer-backups.png"
                    alt="Campo de seleção de curso"
                    width={350}
                    height={150}
                />
                <li>Evite edições simultâneas;</li>
                <li>Duplique seções semelhantes para ganhar agilidade;</li>
                <Image
                    className="pt-5 pb-10"
                    src="/duplicar-sessao.png"
                    alt="Campo de seleção de curso"
                    width={750}
                    height={150}
                />
                <li>Registre grandes alterações em uma planilha de controle.</li>
                <li>Padronize nomes: ex. "MI80" e não "mi80";</li>
                <Image
                    className="pt-5 pb-10"
                    src="/padronizar-nomes.png"
                    alt="Campo de seleção de curso"
                    width={250}
                    height={150}
                />
            </ul>
        </DocLayout>
    )
}