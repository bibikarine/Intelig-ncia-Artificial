const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Após lavar o rosto, como sua pele costuma ficar?",
        alternativas: [
            {
                texto: "Logo fica com brilho e sensação de oleosidade.",
                afirmacao: "Sua pele tem características de PELE OLEOSA."
            },
            {
                texto: "Sente repuxar ou ficar ressecada.",
                afirmacao: "Sua pele tem características de PELE SECA."
            }
        ]
    },
    {
        enunciado: "Quando você passa maquiagem, como ela se comporta na sua pele?",
        alternativas: [
            {
                texto: "Dura pouco tempo e fica brilhante rapidamente.",
                afirmacao: "Esse é um sinal de PELE OLEOSA."
            },
            {
                texto: "A maquiagem marca linhas finas ou descamações.",
                afirmacao: "Esse é um sinal de PELE SECA."
            }
        ]
    },
    {
        enunciado: "Ao longo do dia, como você percebe sua pele?",
        alternativas: [
            {
                texto: "Fica com aspecto brilhoso, principalmente na zona T (testa, nariz e queixo).",
                afirmacao: "Você provavelmente tem PELE OLEOSA."
            },
            {
                texto: "Permanece opaca, áspera e pode descamar.",
                afirmacao: "Você provavelmente tem PELE SECA."
            }
        ]
    }
];

let atual = 0;
let respostas = [];

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    let perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas(perguntaAtual);
}

function mostraAlternativas(perguntaAtual) {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    respostas.push(opcaoSelecionada.afirmacao);
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Olha só o que podemos afirmar sobre sua pele...";
    caixaAlternativas.textContent = "";

    const oleosa = respostas.filter(r => r.includes("OLEOSA")).length;
    const seca = respostas.filter(r => r.includes("SECA")).length;

    let resultadoFinal = "";

    if (oleosa > seca) {
        resultadoFinal = "Sua pele é predominantemente OLEOSA. Isso significa que suas glândulas sebáceas produzem mais óleo do que o necessário, o que pode causar brilho excessivo, poros dilatados e tendência a acne. É importante investir em produtos com controle de oleosidade e limpeza equilibrada.";
    } else if (seca > oleosa) {
        resultadoFinal = "Sua pele é predominantemente SECA. Isso indica que sua pele produz menos óleo natural, o que pode resultar em sensação de repuxamento, descamação e aparência sem viço. Hidratação intensa e produtos nutritivos são essenciais para manter o conforto e a saúde da pele.";
    } else {
        resultadoFinal = "Sua pele apresenta características MISTAS, variando entre oleosa e seca. Isso significa que diferentes áreas do seu rosto têm necessidades diferentes — geralmente a zona T é mais oleosa e as bochechas mais secas. O ideal é usar produtos equilibrados e tratamentos específicos para cada região.";
    }

    textoResultado.textCont
