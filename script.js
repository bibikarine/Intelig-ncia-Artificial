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
                afirmacao: "Sua pele tem características de PELE OLEOSA, que produz excesso de sebo e pode ter tendência à acne."
            },
            {
                texto: "Sente repuxar ou ficar ressecada.",
                afirmacao: "Sua pele tem características de PELE SECA, que necessita de mais hidratação."
            }    
        ]
    },
    {
        enunciado: "Quando você passa maquiagem, como ela se comporta na sua pele?",
        alternativas: [
            {
                texto: "Dura pouco tempo e fica brilhante rapidamente.",
                afirmacao: "Esse é um sinal de PELE OLEOSA, que absorve menos bem a maquiagem por causa do excesso de oleosidade."
            },
            {
                texto: "A maquiagem marca linhas finas ou descamações.",
                afirmacao: "Esse é um sinal de PELE SECA, que precisa de hidratação antes da maquiagem."
            }    
        ]
    },
    {
        enunciado: "Ao longo do dia, como você percebe sua pele?",
        alternativas: [
            {
                texto: "Fica com aspecto brilhoso, principalmente na zona T (testa, nariz e queixo).",
                afirmacao: "Você provavelmente tem PELE OLEOSA, que precisa de produtos que controlem o sebo."
            },
            {
                texto: "Permanece opaca, áspera e pode descamar.",
                afirmacao: "Você provavelmente tem PELE SECA, que precisa de cuidados mais nutritivos e protetores."
            }    
        ]
    },
]

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}
function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++
    mostraPergunta();
}
function mostraResultado(){
    caixaPerguntas.textContent = "Olha só o que podemos afirmar sobre sua pele...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
