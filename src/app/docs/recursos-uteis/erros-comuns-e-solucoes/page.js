import DocLayout from "@/app/components/DocLayout";
import Image from 'next/image';

export default function ErrosComuns(){
    return(
        <DocLayout>
            <h1>ERROS COMUNS E SOLUÇÕES</h1>
            
            <h2>Formulário não redireciona</h2>
            <p><span>Causa comum: </span>Redirecionamento ausente/incorreto.</p>
            <p><span>Como Corrigir: </span>Ativar e revisar a opção “Ir para a seção com base na resposta”.</p>
            <Image
                className="pt-5 pb-10"
                src="/form-nao-redireciona.png"
                alt="Campo de seleção de curso"
                width={550}
                height={150}
            />

            <h2>Representante não aparece</h2>
            <p><span>Causa comum: </span>Lista desatualizada</p>
            <p><span>Como corrigir: </span>Atualizar a pergunta múltipla escolha</p>
            <Image
                className="pt-5 pb-10"
                src="/repre-nao-aparece.png"
                alt="Campo de seleção de curso"
                width={550}
                height={150}
            />

            <h2>Aluno não encontrado</h2>
            <p><span>Causa comum: </span>Campo “Alunos ausentes” desatualizado</p>
            <p><span>Como corrigir: </span>Inserir o nome na seção da turma</p>
            <Image
                className="pt-5 pb-10"
                src="/aluno-nao-encontrado.png"
                alt="Campo de seleção de curso"
                width={550}
                height={150}
            />

            <h2>Professor ou UC ausente</h2>
            <p><span>Causa comum: </span>Grade incompleta</p>
            <p><span>Como corrigir: </span>Editar diretamente a grade e adicionar a UC/professor</p>
            <Image
                className="pt-5 pb-10"
                src="/prof-nao-aparece.png"
                alt="Campo de seleção de curso"
                width={550}
                height={150}
            />
        </DocLayout>
    )
}