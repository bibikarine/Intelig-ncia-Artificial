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
                afirmacao: "Sua pele tem características de PELE OLEOSA.
                Para quem tem a **pele seca**, é fundamental focar em ingredientes que hidratam profundamente. Receitas naturais podem ser ótimas aliadas, mas exigem cuidado.

**Receitas que funcionam:**

* **Máscara de Abacate e Mel:** O abacate é rico em óleos nutritivos, e o mel é um poderoso hidratante natural. A combinação nutre e retém a umidade na pele.
* **Hidratante de Óleo de Coco:** O óleo de coco cria uma barreira protetora que impede a perda de água, sendo ideal para aplicar na pele levemente úmida após o banho.

**Benefícios:** Essas receitas **nutrem, acalmam e hidratam intensamente** a pele, combatendo o ressecamento e a irritação.

**Cuidados importantes:**

* **Reações alérgicas:** Mesmo ingredientes naturais podem causar alergias. Faça sempre um **teste de sensibilidade** antes de aplicar a receita no rosto todo.
* **Potenciais irritantes:** Evite ingredientes ácidos como o suco de limão, que podem sensibilizar e manchar a pele, especialmente sob o sol.
* **Higiene:** Por não terem conservantes, as receitas caseiras podem estragar rápido. Prepare apenas a quantidade que for usar de imediato para evitar a proliferação de bactérias."
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
    },
]

let atual = 0;
let respostas = [];

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    let perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas(perguntaAtual);
}

function mostraAlternativas(perguntaAtual){
    for(const alternativa of perguntaAtual.alternativas){
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

function mostraResultado(){
    caixaPerguntas.textContent = "Olha só o que podemos afirmar sobre sua pele...";
    caixaAlternativas.textContent = "";

    // conta quantas vezes apareceu "oleosa" ou "seca"
    const oleosa = respostas.filter(r => r.includes("OLEOSA")).length;
    const seca = respostas.filter(r => r.includes("SECA")).length;

    let resultadoFinal = "";
    if(oleosa > seca){
        resultadoFinal = "Sua pele é predominantemente OLEOSA.";
    } else if(seca > oleosa){
        resultadoFinal = "Sua pele é predominantemente SECA.";
    } else {
        resultadoFinal = "Sua pele apresenta características MISTAS, variando entre oleosa e seca. ⚖️";
    }

    textoResultado.textContent = resultadoFinal;
    caixaResultado.style.display = "block";
}

mostraPergunta();
