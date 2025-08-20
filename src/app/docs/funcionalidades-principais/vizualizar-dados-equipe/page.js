import DocLayout from "@/app/components/DocLayout";
import Image from "next/image";

export default function VizualizarDadosEquipe(){
    return(
        <DocLayout>
            <h1>VIZUALIZAÇÃO DE DADOS PELA EQUIPE PEDAGÓGICA</h1>

            <h2>Acesso à Planilha</h2>
            <p>Os dados coletados por meio do formulário estão disponíveis em uma planilha anexada a ele. 
                Para acessá-la, basta clicar na seção <span>"Respostas"</span>,
                 onde o acesso a planilha está localizada no canto superior direito do formulário.</p>
            <Image 
                className="custom-img"
                src="/ver-planilha.png"
                alt="botão indicando ver no app Planilhas na aba respostas"
                width={650}
                height={150}
            />

            <p>Ao acessar, serão exibidas duas planilhas: uma com a configuração padrão do formulário, 
                e outra configurada pela equipe de desenvolvimento, intitulada <span>"Respostas Organizadas".</span> 
                É nesta última planilha que as consultas devem ser realizadas. Nela, os dados estão 
                organizados nas seguintes colunas:</p>
            
            <Image 
                className="custom-img"
                src="/respostas-organizadas.png"
                alt="clicar na planilha de respostas organizadas"
                width={850}
                height={250}
            />

            <ul>
                <li>Data do Expediente</li>
                <li>Curso</li>
                <li>Turma</li>
                <li>Representante</li>
                <li>Lista de Alunos Ausentes no Dia</li>
                <li>Unidade Curricular (UC) do Primeiro Período</li>
                <li>Professor Responsável pelo Primeiro Período</li>
                <li>Descrição da Aula do Primeiro Período</li>
                <li>Unidade Curricular (UC) do Segundo Período</li>
                <li>Professor Responsável pelo Segundo Período</li>
                <li>Descrição da Aula do Segundo Período</li>
            </ul>

            <Image 
                className="custom-img"
                src="/planilha-oficial.png"
                alt="imagem da planilha oficial que pode ser acessada"
                width={850}
                height={250}
            />

            <p>Essas informações são organizadas de forma a facilitar a análise e consulta pelos membros 
                da equipe pedagógica.</p>
        </DocLayout>
    );
}