import DocLayout from "@/app/components/DocLayout";
import Image from 'next/image';

export default function(){
    return(
        <DocLayout>
            <h1>CONFIGURAÇÕES E PERSONALIZAÇÃO</h1>

            <h2>Alterações básicas permitidas</h2>
            <p>A equipe pedagógica pode realizar as seguintes configurações de forma segura:</p>
            <ul>
                <li><span>Atualização de perguntas de múltipla escolha e caixas de seleção: </span>Inclua ou remova opções em campos como lista de turmas, representantes, alunos e professores.</li>
                <Image 
                    className="custom-img"
                    src="/nome-representante.png"
                    alt="pergunta selecione o representante"
                    width={650}
                    height={600}
                />
                <Image 
                    className="custom-img"
                    src="/alunos-ausentes.png"
                    alt="pergunta alunos ausentes"
                    width={650}
                    height={600}
                />
                <Image 
                    className="custom-img"
                    src="/unidade-e-professor.png"
                    alt="pergunta em grade de professores e unidades curriculares"
                    width={650}
                    height={600}
                />
                <li><span>Edição de títulos e descrições das seções: </span>Adapte os títulos e instruções para que reflitam as necessidades atuais das turmas e cursos.</li>
                <Image
                    className="custom-img"
                    src="/edicao-titulos.png"
                    alt="imagem de um dos titulos do formulario, indicando sua edição"
                    width={650}
                    height={300}
                />
                <li><span>Reordenação de seções: </span>Utilize o recurso de arrastar para reorganizar a ordem das seções no formulário, facilitando a navegação e a visualização.</li>
                <Image
                    className="custom-img"
                    src="/arrastar.png"
                    alt="icone de arrastar sessão/pergunta"
                    width={650}
                    height={300}
                />
                <li><span>Adição de novas perguntas ou campos: </span>Em casos específicos, novos campos podem ser inseridos, desde que mantenham a padronização e não alterem o fluxo de redirecionamento.</li>
                <Image 
                    className="custom-img"
                    src="/adicao-perguntas-campos.png"
                    alt="imagem indicando o icone de adição de novas perguntas"
                    width={250}
                    height={300}
                />
            </ul>
            
            <h2>Personalização do sistema</h2>
            <p>O formulário pode ser adaptado conforme o contexto institucional e pedagógico:</p>
            <ul>
                <li><span>Personalização por curso ou turno: </span>Crie seções específicas para contextos diferentes, como cursos operacionais, técnicos ou por período (manhã, tarde, noite).</li>
                <Image 
                    className="custom-img"
                    src="/exemplo-um-periodo.png"
                    alt="imagem de uma sessão de turma de meio período"
                    width={650}
                    height={300}
                />
                <li><span>Formatação visual do formulário: </span>É possível alterar o tema do formulário (cores e fonte) na aba de personalização do Google Forms, respeitando a identidade visual da instituição.</li>
                <Image 
                    className="custom-img"
                    src="/personalizar.png"
                    alt="imagem indicando onde fica o ícone de personalização do formulário"
                    width={750}
                    height={300}
                />
            </ul>

            <h2>Campos que não devem ser alterados</h2>
            <ul>
                <li>A pergunta <span>“Selecione seu curso”</span> e a navegação entre seções estão pré-configuradas e devem ser alteradas apenas por responsáveis técnicos;</li>
                <Image
                    className="custom-img"
                    src="/selecione-curso.png"
                    alt="imagem mostrando a pergunta selecione seu curso"
                    width={650}
                    height={300}
                />
                <li>O cabeçalho e a coleta de e-mails também devem ser mantidos como estão.</li>
            </ul>
        </DocLayout>
    )
}