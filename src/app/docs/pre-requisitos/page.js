import DocLayout from "@/app/components/DocLayout";

export default function PreRequisitos(){
    return(
        <DocLayout>
            <h1>PRÉ-REQUISITOS PARA USO</h1>
            
            <h2>Sistemas operacionais compatíveis</h2>
            <p>O sistema Diário de Bordo do Centroweg é baseado em ferramentas do Google (Forms e Sheets), sendo acessado diretamente via navegador. 
                Por isso, é compatível com os principais sistemas operacionais modernos, incluindo:</p>
            <ul>
                <li>Windows (7, 10, 11)</li>
                <li>macOS</li>
                <li>Linux (Ubuntu, Fedora, etc.)</li>
                <li>ChromeOS (Chromebooks)</li>
                <li>Android e iOS (para acesso móvel ao formulário)</li>
            </ul>

            <h2>Requisitos mínimos de hardware e software</h2>
            <p>Como o sistema funciona 100% online, os requisitos são mínimos:</p>
            <ul>
                <li>Conexão estável com a internet</li>
                <li>Navegador atualizado (Google Chrome, Mozilla Firefox, Microsoft Edge ou Safari)</li>
                <li>Dispositivo com acesso à conta Google institucional</li>
            </ul>
            <p>Recomenda-se o uso de notebook ou computador para a equipe pedagógica, especialmente ao editar formulários ou analisar dados na planilha.</p>

            <h2>Cadastro e acesso</h2>
            <ul>
                <li>O formulário está configurado para coletar automaticamente o e-mail institucional dos representantes de turma no momento do envio;</li>
                <li>Apenas usuários com contas autorizadas (da instituição) podem acessar e preencher o formulário;</li>
                <li>O acesso ao formulário é feito por meio de um link compartilhado com os representantes de cada turma;</li>
                <li>A equipe pedagógica deve estar logada com uma conta Google autorizada para editar o formulário ou acessar a planilha de respostas;</li>
                <li>A coleta do e-mail institucional garante autenticidade nos envios e permite o rastreamento de quem preencheu cada entrada.</li>
            </ul>
        </DocLayout>
    );
}