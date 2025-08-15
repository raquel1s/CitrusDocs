import DocLayout from "@/app/components/DocLayout";
import Image from 'next/image';

export default function DicasAtalhos(){
    return(
        <DocLayout>
            <h1>Dicas e Atalhos</h1>
            <ul>
                <li>Utilize Visualização após cada edição para checar o funcionamento;</li>
                <Image
                    className="custom-img"
                    src="/usar-visualizar.png"
                    alt="Icone de visualizar"
                    width={250}
                    height={150}
                />
                <li>Faça backups regulares do formulário;</li>
                <Image
                    className="custom-img"
                    src="/fazer-backups.png"
                    alt="Imagem de funcionalidade de fazer cópia"
                    width={350}
                    height={150}
                />
                <li>Evite edições simultâneas;</li>
                <li>Duplique seções semelhantes para ganhar agilidade;</li>
                <Image
                    className="custom-img"
                    src="/duplicar-sessao.png"
                    alt="imagem indicando onde duplicar a seção"
                    width={750}
                    height={150}
                />
                <li>Registre grandes alterações em uma planilha de controle.</li>
                <li>Padronize nomes: ex. "MI80" e não "mi80";</li>
                <Image
                    className="custom-img"
                    src="/padronizar-nomes.png"
                    alt="Imagem de exemplo para nomes"
                    width={250}
                    height={150}
                />
            </ul>
        </DocLayout>
    )
}