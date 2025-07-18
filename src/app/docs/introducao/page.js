import DocLayout from "@/app/components/DocLayout"

export default function Introducao() {
    return (
        <div>
            <DocLayout>
                <h1>INTRODUÇÃO</h1>
                <h2>Apresentação do sistema</h2>
                <p>O Diário de Bordo do Centroweg é uma ferramenta desenvolvida para registrar, de forma simples e organizada, 
                    o que acontece diariamente em sala de aula. Utilizando o Google Forms integrado a uma planilha do Google Sheets, 
                    o sistema permite que os representantes de turma preencham diariamente informações sobre a presença dos alunos, 
                    as matérias lecionadas, os professores responsáveis e um breve resumo das atividades desenvolvidas. Os dados são 
                    automaticamente organizados em uma planilha, facilitando o acompanhamento e a análise por parte da equipe pedagógica.</p>
                <h2>Público-alvo</h2>
                <ul>
                    <li><span>Representantes das turmas</span>, que são responsáveis por preencher o formulário todos os dias;</li>
                    <li><span>Equipe pedagógica</span>, que fará a gestão dos dados, manutenção do formulário e acompanhamento das informações registradas;</li>
                    <li><span>Coordenadores ou supervisores</span>, que podem utilizar os dados estruturados para tomada de decisão e controle pedagógico.</li>
                </ul>
                <h2>Objetivo do Manual</h2>
                <ul>
                    <li>Orientar sobre como adicionar novas turmas, alunos, matérias e professores ao sistema;</li>
                    <li>Explicar como funciona o fluxo de envio dos dados via formulário para a planilha;</li>
                    <li>Fornecer instruções de uso e manutenção do formulário do Google (Google Forms);</li>
                    <li>Servir como base para o treinamento da equipe pedagógica, garantindo que todos saibam 
                        como operar, atualizar e acompanhar o sistema de forma eficiente e autônoma.</li>
                </ul>
            </DocLayout>
        </div>
    )
}