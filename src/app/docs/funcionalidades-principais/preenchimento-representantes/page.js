import DocLayout from "@/app/components/DocLayout";

export default function PreenchimentoRepresentantes(){
    return(
        <DocLayout>
            <h1>FUNCIONALIDADES PRINCIPAIS</h1>
            <h3>Preenchimento Diário pelos Representantes</h3>
            <p>1. Acesse o link do formulário compartilhado com sua turma;</p>
            <p>2. Selecione o curso e a turma correspondente;</p>
            <p>3. Informe os dados solicitados:</p>
            <ul>
                <li>Representante;</li>
                <li>Data;</li>
                <li>Alunos ausentes;</li>
                <li>UC e professor de cada período;</li>
                <li>Descrição do conteúdo.</li>
            </ul>
        </DocLayout>
    )
}