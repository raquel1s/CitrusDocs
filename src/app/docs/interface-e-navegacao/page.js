import DocLayout from "@/app/components/DocLayout";
import Image from "next/image";

export default function InterfaceNavegacao(){
    return(
        <DocLayout>
            <h1>INTERFACE E NAVEGAÇÃO</h1>

            <h2>Estrutura Flexível do Formulário</h2>
            <p>O formulário é dividido em seções conforme as necessidades da equipe pedagógica. 
                Ele é inicialmente criado com seções agrupadas por curso e por turma, mas pode ser alterado a qualquer momento, 
                dependendo das edições feitas:</p>
            <ul>
                <li>Inclusão de novas turmas;</li>
                <li>Remoção de turmas inativas;</li>
                <li>Atualização de campos como lista de alunos, disciplinas, representantes e professores;</li>
                <li>Redefinição de seções e fluxos conforme o contexto letivo atual.</li>
            </ul>
            <p>Essa flexibilidade é essencial para acompanhar o dinamismo das turmas e cursos oferecidos.</p>

            <h2>Componentes Visuais</h2>
            <p>Cada seção dedicada a uma turma contém:</p>
            <ul>
                <li>Campo com nome do representante;</li>
                <Image
                    className="custom-img"
                    src="/nome-representante.png"
                    alt="campo com o nome do representante"
                    width={650}
                    height={150}
                />
                <li>Data do expediente (com orientação de preenchimento);</li>
                <Image
                    className="custom-img"
                    src="/data-expediente.png"
                    alt="campo com a data do expediente"
                    width={650}
                    height={150}
                />
                <li>Lista de alunos ausentes;</li>
                <Image
                    className="custom-img"
                    src="/alunos-ausentes.png"
                    alt="campo com os alunos ausentes"
                    width={650}
                    height={200}
                />
                <li>Seleção de unidade curricular e professor (1º e 2º períodos);</li>
                <Image
                    className="custom-img"
                    src="/unidade-e-professor.png"
                    alt="campo com a unidade e o professor"
                    width={650}
                    height={300}
                />
                <li>Campo de descrição das atividades realizadas (1º e 2º períodos).</li>
                <Image
                    className="custom-img"
                    src="/descricao.png"
                    alt="campo com a descrição"
                    width={650}
                    height={300}
                />
            </ul>
            <p>As seções podem ser duplicadas, movidas ou personalizadas de acordo com o padrão definido pela equipe CitrusDocs.</p>
        </DocLayout>
    );
}