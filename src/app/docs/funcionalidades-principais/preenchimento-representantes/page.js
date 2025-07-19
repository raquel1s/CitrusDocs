import DocLayout from "@/app/components/DocLayout";
import Image from 'next/image';

export default function PreenchimentoRepresentantes() {
    return (
        <DocLayout>
            <h1>FUNCIONALIDADES PRINCIPAIS</h1>
            <h3>Preenchimento Diário pelos Representantes</h3>
            <p>1. Acesse o link do formulário compartilhado com sua turma;</p>
            <p>2. Selecione o curso e a turma correspondente;</p>
            <Image
                src="/selecione-seu-curso.png"
                alt="Campo de seleção de curso"
                width={550}
                height={50}
            />

            <Image
                className="pt-5 pb-10"
                src="/selecione-turma.png"
                alt="Campo de seleção de curso"
                width={550}
                height={150}
            />
            <p>3. Informe os dados solicitados:</p>
            <ul>
                <li>Representante;</li>
                <Image
                    className="pt-5 pb-10"
                    src="/selecione-turma.png"
                    alt="Campo de seleção de curso"
                    width={550}
                    height={150}
                />
                <li>Data;</li>
                <Image
                    className="pt-5 pb-10"
                    src="/selecione-turma.png"
                    alt="Campo de seleção de curso"
                    width={550}
                    height={150}
                />
                <li>Alunos ausentes;</li>
                <Image
                    className="pt-5 pb-10"
                    src="/selecione-turma.png"
                    alt="Campo de seleção de curso"
                    width={550}
                    height={150}
                />
                <li>UC e professor de cada período;</li>
                <Image
                    className="pt-5 pb-10"
                    src="/selecione-turma.png"
                    alt="Campo de seleção de curso"
                    width={550}
                    height={150}
                />
                <li>Descrição do conteúdo.</li>
                <Image
                    className="pt-5 pb-10"
                    src="/selecione-turma.png"
                    alt="Campo de seleção de curso"
                    width={550}
                    height={150}
                />
            </ul>
        </DocLayout>
    )
}