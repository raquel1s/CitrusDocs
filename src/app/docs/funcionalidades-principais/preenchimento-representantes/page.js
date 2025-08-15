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
                className="custom-img"
                src="/selecione-seu-curso.png"
                alt="Campo de seleção de curso"
                width={550}
                height={50}
            />

            <Image
                className="custom-img"
                src="/selecione-turma.png"
                alt="Campo de seleção de turma"
                width={550}
                height={150}
            />
            <p>3. Informe os dados solicitados:</p>
            <ul>
                <li>Representante;</li>
                <Image
                    className="custom-img"
                    src="/nome-representante.png"
                    alt="Campo de representante"
                    width={550}
                    height={150}
                />
                <li>Data;</li>
                <Image
                    className="custom-img"
                    src="/data-expediente.png"
                    alt="Campo de seleção da data"
                    width={550}
                    height={150}
                />
                <li>Alunos ausentes;</li>
                <Image
                    className="custom-img"
                    src="/alunos-ausentes.png"
                    alt="Campo de seleção de alunos ausentes"
                    width={550}
                    height={150}
                />
                <li>UC e professor de cada período;</li>
                <Image
                    className="custom-img"
                    src="/unidade-e-professor.png"
                    alt="Campo de seleção de unidade e professor"
                    width={550}
                    height={150}
                />
                <li>Descrição do conteúdo.</li>
                <Image
                    className="custom-img"
                    src="/descricao.png"
                    alt="Campo de seleção de descrição do dia"
                    width={550}
                    height={150}
                />
            </ul>
        </DocLayout>
    )
}