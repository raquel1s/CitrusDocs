import DocLayout from "@/app/components/DocLayout"

export default function Introducao() {
    return (
        <div>
            <DocLayout>
                <h1 className="text-2xl font-bold mb-6">Introdução</h1>

                <h2 className="text-xl font-semibold mt-8">Objetivo</h2>
                <p>Esta página tem como objetivo apresentar o sistema e seus principais benefícios.</p>

                <h2 className="text-xl font-semibold mt-8">Estrutura</h2>
                <p>O sistema está dividido em seções modulares para facilitar o uso e a manutenção.</p>
            </DocLayout>
        </div>
    )
}