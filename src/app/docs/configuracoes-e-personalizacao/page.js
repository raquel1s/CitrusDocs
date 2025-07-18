import DocLayout from "@/app/components/DocLayout";

export default function(){
    return(
        <DocLayout>
            <h1>CONFIGURAÇÕES E PERSONALIZAÇÃO</h1>

            <h2>Alterações básicas permitidas</h2>
            <p>A equipe pedagógica pode realizar as seguintes configurações de forma segura:</p>
            <ul>
                <li><span>Atualização de perguntas de múltipla escolha e caixas de seleção: </span>Inclua ou remova opções em campos como lista de turmas, representantes, alunos e professores.</li>
                <li><span>Edição de títulos e descrições das seções: </span>Adapte os títulos e instruções para que reflitam as necessidades atuais das turmas e cursos.</li>
                <li><span>Reordenação de seções: </span>Utilize o recurso de arrastar para reorganizar a ordem das seções no formulário, facilitando a navegação e a visualização.</li>
                <li><span>Adição de novas perguntas ou campos: </span>Em casos específicos, novos campos podem ser inseridos, desde que mantenham a padronização e não alterem o fluxo de redirecionamento.</li>
            </ul>
            
            <h2>Personalização do sistema</h2>
            <p>O formulário pode ser adaptado conforme o contexto institucional e pedagógico:</p>
            <ul>
                <li><span>Personalização por curso ou turno: </span>Crie seções específicas para contextos diferentes, como cursos operacionais, técnicos ou por período (manhã, tarde, noite).</li>
                <li><span>Formatação visual do formulário: </span>É possível alterar o tema do formulário (cores e fonte) na aba de personalização do Google Forms, respeitando a identidade visual da instituição.</li>
            </ul>

            <h2>Campos que não devem ser alterados</h2>
            <ul>
                <li>A pergunta <span>“Selecione seu curso”</span> e a navegação entre seções estão pré-configuradas e devem ser alteradas apenas por responsáveis técnicos;</li>
                <li>O cabeçalho e a coleta de e-mails também devem ser mantidos como estão.</li>
            </ul>
        </DocLayout>
    )
}