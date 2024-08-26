export const perguntas = [
    {// Pergunta 1 //
        enunciado: "Numa situação hipotética, você está vivendo em uma pequena fazenda. Qual será sua primeira ação?",
        alternativas: [
            {
                texto: "Plantar vegetais para vender ou comer posteriormente",
                afirmacao: [
                    "Você pensa no futuro, quer promover um sustento básico antes de tudo",
                ],
                proxima: 1, // Direciona para a pergunta 2
            },
            {
                texto: "Separar o espaço para o cultivo de animais",
                afirmacao: [
                    "Você pensa como um empreendedor, optou pelo caminho mais lucrativo",
                ],
                proxima: 2, // Direciona para a pergunta 3
            }
        ]
    },
    {// Pergunta 2 //
        enunciado: "Com seu território em mãos, você optaria pelo uso de agrotóxicos e outros produtos químicos?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: [
                    "Você não se importa com o meio ambiente ou o ambiente onde mora, apenas quer lucro sem esforço",
                ],
                proxima: 3, // Direciona para a pergunta 4
            },
            {
                texto: "Não",
                afirmacao: [
                    "Você é um agricultor padrão, opta pela segurança do meio ambiente",
                ],
                proxima: 2, // Direciona para a pergunta 3
            }
        ]
    },
    {// Pergunta 3 //
        enunciado: "Você optaria por introduzir máquinas na sua fazenda ou fará tudo manualmente?",
        alternativas: [
            {
                texto: "Irei introduzir o uso de algumas máquinas para processar meus produtos eficientemente",
                afirmacao: [
                    "Você é agora um empreendedor, seu lucro irá provavelmente aumentar muito. Contudo, o meio ambiente sofrerá com suas ações",
                ],
                proxima: 4, // Direciona para a pergunta 5
            },
            {
                texto: "Irei optar pelo uso de minhas mãos somente, para evitar gastos desnecessários",
                afirmacao: [
                    "Você quer apenas viver por viver, não quer lucro, apenas uma vida simples",
                ],
                proxima: 3, // Direciona para a pergunta 4
            }
        ]
    },
    {// Pergunta 4 //
        enunciado: "Você pretende ter uma vida simples ou pretende maximizar o lucro?",
        alternativas: [
            {
                texto: "Vou ter uma vida simples, sem me preocupar com despesas ou maquinário",
                afirmacao: [
                    "Você é um grande protetor do meio ambiente, está preservando tudo do jeito correto e mantendo o ciclo",
                ],
                // resposta final
            },
            {
                texto: "Vou priorizar o lucro acima de tudo, independente das circunstâncias",
                afirmacao: [
                    "Você é um grande inimigo do meio ambiente, você não liga para a vegetação, mares, você apenas age sem pensar nos impactos de suas ações",
                ],
                proxima: 4, // Direciona para a pergunta 5
            }
        ]
    },
    {// Pergunta 5 //
        enunciado: "",
        alternativas: [
            {
                texto: "",
                afirmacao: [
                    "",
                ],
                // resposta final
            },
            {
                texto: "",
                afirmacao: [
                    "",
                ],
                // resposta final
            }
        ]
    },
];