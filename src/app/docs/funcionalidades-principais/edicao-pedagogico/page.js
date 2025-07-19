import DocLayout from "@/app/components/DocLayout";
import Image from "next/image";

export default function EdicaoPedagogico(){
    return(
        <DocLayout>
            <h1>EDIÇÃO E PERSONALIZAÇÃO PELA EQUIPE PEDAGÓGICA</h1>

            <h2>Adicionando uma nova turma</h2>
            <h3>1. Acesse a pergunta "Selecione sua turma"</h3>
            <ul>
                <li>Localize a seção do curso desejado (ex: Desenvolvimento de Sistemas);</li>
                <li>Clique na pergunta do tipo múltipla escolha chamada “Selecione sua turma”;</li>
                <li>Adicione a nova turma na última opção (ex: MI81).</li>
            </ul>
            <Image
                    src="/acesse-pergunta.png"
                    alt="pergunta selecione a turma"
                    width={650}
                    height={300}
                />
            <h3>2. Crie uma nova seção para a turma</h3>
            <ul>
                <li>Vá ao final do formulário e clique em “Adicionar seção” (ícone de duas barras);</li>
                <li>Nomeie a nova seção com o nome da turma e curso (ex: Registro - MI81);</li>
                <li>Copie o conteúdo de uma sessão existente de turma semelhante;</li>
                <li>Atualize os dados conforme a nova turma</li>
            </ul>
            <Image
                    src="/adicionando-sessao.png"
                    alt="ir em adicionar nova sessão"
                    width={650}
                    height={300}
                />
            <h3>3. Configure o redirecionamento da turma</h3>
            <ul>
                <li>Volte à pergunta “Selecione sua turma”;</li>
                <li>Clique nos três pontos (⋮) da pergunta e ative “Ir para a seção com base na resposta”;</li>
                <li>Ao lado da nova turma, selecione a seção correspondente que você criou.</li>
            </ul>
            <Image
                    src="/redirecionando.png"
                    alt="ir em adicionar nova sessão"
                    width={650}
                    height={300}
                />
            <h2>Editando informações específicas de cada turma</h2>
            <p><span>Nome do Representante</span></p>
            <ul>
                <li>Tipo: Múltipla escolha</li>
                <li>Atualize com os nomes atuais dos representantes</li>
            </ul>
            <Image
                    src="/editando-repre.png"
                    alt="pergunta para editar representante"
                    width={650}
                    height={300}
                />
            <p><span>Data do Expediente</span></p>
            <ul>
                <li>Tipo: Campo de data ou resposta curta com instrução “dia/mês/ano”</li>
            </ul>
            <Image
                    src="/editanto_data.png"
                    alt="pergunta para editar a data"
                    width={650}
                    height={300}
                />
            <p><span>Alunos Ausentes</span></p>
            <ul>
                <li>Tipo: Caixas de seleção</li>
                <li>Atualize conforme a lista atual de alunos</li>
            </ul>
            <Image
                    src="/editando-alunos.png"
                    alt="pergunta para editar os alunos"
                    width={650}
                    height={300}
                />
            <p><span>Unidades Curriculares com Professores</span></p>
            <ul>
                <li>Tipo: Grade de múltipla escolha</li>
                <li>Linhas: UCs | Colunas: Professores</li>
                <li>Adicione mais uma grade para cursos de dois períodos</li>
            </ul>
            <Image
                    src="/editando-UC-prof.png"
                    alt="pergunta para editar a unidade curricular e o professor"
                    width={650}
                    height={300}
                />
            <p><span>Descrição das Aulas</span></p>
            <ul>
                <li>Tipo: Parágrafo</li>
                <li>Espaço para detalhar o conteúdo dado</li>
            </ul>
            <Image
                    src="/editando-descricao.png"
                    alt="pergunta para editar a descrição"
                    width={650}
                    height={300}
                />
            <h2>Excluindo uma turma</h2>
            <ul>
                <li>Remova a opção da turma na pergunta “Selecione sua turma”;</li>
                <li>Delete a seção correspondente à turma no final do formulário.</li>
            </ul>

            <h2>Criando um novo curso</h2>
            <h3>1. Acesse a pergunta "Selecione seu curso"</h3>
            <p>Localize a pergunta do tipo múltipla escolha chamada “Selecione seu curso”.</p>

            <h3>2. Adicione o novo curso na última opção</h3>
            <p>Clique para editar as opções e insira o nome do novo curso (ex: “Engenharia de Software”).</p>

            <h3>3. Crie uma nova seção para o curso</h3>
            <p>Vá ao final do formulário e clique em “Adicionar seção” (ícone de duas barras).</p>

            <h3>4. Nomeie a nova seção com o nome do curso</h3>
            <p>Exemplo: “Engenharia de Software”.</p>

            <h3>5. Configure a navegação para o novo curso</h3>
            <p>Volte à pergunta “Selecione seu curso”.</p>

            <p>Clique nos três pontos (⋮) da pergunta e ative “Ir para a seção com base na resposta”.</p>
            <p>Ao lado do novo curso, selecione a seção correspondente que você criou.</p>

            <h3>6. Após criar o curso, adicione as turmas correspondentes</h3>
            <p>Utilize a pergunta “Selecione sua turma” para incluir as turmas do novo curso, seguindo o passo a passo do item 4.2.1.</p>
        </DocLayout>
    )
}