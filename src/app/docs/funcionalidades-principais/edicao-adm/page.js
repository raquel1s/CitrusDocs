import DocLayout from "@/app/components/DocLayout";
import Image from "next/image";

export default function EdicaoPedagogico(){
    return(
        <DocLayout>
            <h1>EDIÇÃO E PERSONALIZAÇÃO PELO ADMINISTRADOR</h1>

            <h2>Adicionando uma nova turma</h2>
            <h3>1. Acesse a pergunta "Selecione sua turma"</h3>
            <ul>
                <li>Localize a seção do curso desejado (ex: Desenvolvimento de Sistemas);</li>
                <li>Clique na pergunta do tipo múltipla escolha chamada “Selecione sua turma”;</li>
                <li>Adicione a nova turma na última opção (ex: MI81).</li>
            </ul>
                <Image
                    className="custom-img"
                    src="/acesse-pergunta.png"
                    alt="pergunta selecione a turma"
                    width={650}
                    height={300}
                />
            <h3>2. Crie uma nova seção para a turma</h3>
            <ul>
                <li>Duplique uma seção de regitro existente de turma semelhante (3 pontinhos ao lado do nome da seção);</li>
                <li>Nomeie a nova seção com o nome da turma (ex: Registro - MI81);</li>
                <li>Atualize os dados conforme a nova turma.</li>
            </ul>
                <Image
                    className="custom-img"
                    src="/duplicar-sessao.png"
                    alt="ir em adicionar nova seção"
                    width={650}
                    height={300}
                />
            <h3>3. Configure o redirecionamento da turma</h3>
            <ul>
                <li>Volte à pergunta “Selecione sua turma”;</li>
                <li>Clique nos três pontos (⋮) da pergunta e ative “Ir para a seção com base na resposta”;</li>
                <Image 
                    className="custom-img"
                    src="/opcao-ir-para-sessao.png"
                    alt="imagem indicando onde fica a opção ir para a seção com base na resposta"
                    width={650}
                    height={300}
                />
                <li>Ao lado da nova turma, selecione a seção correspondente que você criou.</li>
            </ul>
                <Image
                    className="custom-img"
                    src="/redirecionando.png"
                    alt="imagem mostrando onde podemos redirecionar para a seção correta"
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
                    className="custom-img"
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
                    className="custom-img"
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
                    className="custom-img"
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
                    className="custom-img"
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
                    className="custom-img"
                    src="/editando-descricao.png"
                    alt="pergunta para editar a descrição"
                    width={650}
                    height={300}
                />
            <h2>Excluindo uma turma</h2>
            <ul>
                <li>Remova a opção da turma na pergunta “Selecione sua turma”;</li>
                <Image
                    className="custom-img"
                    src="/excluir-selecione-turma.png"
                    alt="remover opção da pergunta selecione sua turma"
                    width={650}
                    height={300}
                />
                <li>Delete a seção correspondente à turma no final do formulário.</li>
                <Image
                    className="custom-img"
                    src="/excluir-sessao-turma.png"
                    alt="remover opção da pergunta selecione sua turma"
                    width={650}
                    height={300}
                />
            </ul>

            <h2>Criando um novo curso</h2>
            <h3>1. Acesse a pergunta "Selecione seu curso"</h3>
            <p>Localize a pergunta do tipo múltipla escolha chamada “Selecione seu curso”.</p>
            <Image
                className="custom-img"
                src="/selecione-seu-curso.png"
                alt="selecione a pergunta selecione seu curso"
                width={650}
                height={300}
            />

            <h3>2. Adicione o novo curso na última opção</h3>
            <p>Clique para editar as opções e insira o nome do novo curso (ex: “Engenharia de Software”).</p>
            <Image
                className="custom-img"
                src="/crie-nova-opcao.png"
                alt="imagem mostrando como criar uma nova opção"
                width={650}
                height={300}
            />

            <h3>3. Crie uma nova seção para o curso</h3>
            <p>Vá ao final do formulário e clique em “Adicionar seção” (ícone de duas barras).</p>
            <Image
                className="custom-img"
                src="/adicionando-sessao.png"
                alt="imagem mostrando como adicionar uma nova seção"
                width={650}
                height={300}
            />

            <h3>4. Nomeie a nova seção com o nome do curso</h3>
            <p>Exemplo: “Engenharia de Software”.</p>
            <Image
                className="custom-img"
                src="/selecione-turma.png"
                alt="imagem mostrando a pergunta selecione sua turma, exemplo de titulo"
                width={650}
                height={300}
            />

            <h3>5. Configure a navegação para o novo curso</h3>
            <p>Volte à pergunta “Selecione seu curso”.</p>

            <p>Clique nos três pontos (⋮) da pergunta e ative “Ir para a seção com base na resposta”.</p>
            <Image
                className="custom-img"
                src="/opcao-ir-para-sessao.png"
                alt="selecione a pergunta selecione seu curso"
                width={650}
                height={300}
            />
            <p>Ao lado do novo curso, selecione a seção correspondente que você criou.</p>
            <Image 
                className="custom-img"
                src="/redirecionando.png"
                alt="imagem mostrando como fazer o redirecionamento"
                width={650}
                height={300}
            />

            <h3>6. Após criar o curso, adicione as turmas correspondentes</h3>
            <p>Utilize a pergunta “Selecione sua turma” para incluir as turmas do novo curso, seguindo o passo a passo do item <a href="#adicionando-uma-nova-turma"><span>adicionando uma nova turma</span></a>.</p>
        </DocLayout>
    )
}