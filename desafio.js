//Desafio de Projeto- Aula 08//

let diaDaSemana = "Sexta-Feira";
console.log(diaDaSemana); // VARIÁVEL DO TIPO STRING 

let diaDoMes = 4;
console.log(diaDoMes); // VARIÁVEL DO TIPO NUMBER

let diaFrio = true; // BOOLEANO TRUE
console.log(diaFrio);

let diaQuente = false; // BOOLEANO FALSE
console.log(diaQuente);

let usuario = { // OBJETO USUARIO
    nome:"Matheus",
    idade: 24,
    sexo:"masculino"
}
console.log(usuario.nome);

let series = ["La casa de papel", "Manifest", "The 100"] //ARRAYS
console.log(series);

//Desafio de Projeto- Aula 10//

function papagaio(){
    for(let i=0; i<5; i++) { //PAPAGAIO
    console.log("oi, eu sou um papagaio")
    }
};   
papagaio();

for(let i=0; i<=10; i++) { //TABUADA DO 9
    console.log(i*9)
};

function podePassar(nome) {
    if(nome=="Matheus") {
        return true
    } else {
        return false
    }
};
console.log(podePassar("Juan")); 

let linguagem = "PHP";
if(linguagem=="JavaScript") {
    console.log("Eu domino!")
} else {
    console.log("Ainda Estou Aprendendo")
};

let dia = "Quinta";
if(dia=="Segunda") {
    console.log("Vou ao parque!");
} else if(dia=="Terça") {
    console.log("Vou a praia!");
} else if(dia=="Quarta") {
    console.log("Vou jantar fora!");
} else if(dia=="Quinta") {
    console.log("Vou ao cinema!");
} else if(dia=="Sexta") {
    console.log("Vou ao estádio!");
} else {
    console.log("Fim de semana é dia de descanso!")
};

function anterior(n){
    return(n-1);
} 

function triplo(n){
    return(n*3);
}

function anteriorDoTriplo(n){
    return(triplo(n)-1)
};
console.log(anteriorDoTriplo(2));

let nome = "Matheus";
let sobrenome = "Oliveira";
let idade = 24;
console.log(nome +" "+ sobrenome +" tem" +" "+ idade +" anos"); 

function fatorial(n) { // O enuncioado definiu n=4
    let resultado = 1 //inicialmente o resultado é 1, pois todo numero multiplicado por 1 é igual a ele mesmo
    for(let i=n; i>1; i--) { //i=4; 4>1? Se sim, aplica a linha debaixo
        resultado = resultado*i //na primeira rodagem resultado =1, =1*4=4
    }                           // na segunda rodagem, resultado=4, i=3
    return resultado            // terceira rodadem, resultado=12, i=2
}                               // resultado =24, i=1
console.log(fatorial(4));     

//Desafios JS Avançado (Aula 12)
//Metodo Array//

let frutas = ["maçã", "banana"];
frutas.push("laranja");
console.log(frutas); // Array do tipo PUSH- Adiciona uma informação no final

frutas.pop();
console.log(frutas); // Array do tipo POP- Remove a ultima informação

frutas.unshift("uva");
console.log(frutas); // Array do tipo UNSHIFT- Adiciona uma informação no inicio

frutas.shift();
console.log(frutas); // Array do tipo SHIFT- Remove a primeira informação

console.log(animais.join(" - ")); // Array do tipo JOIN- Junta elementos em string

let nomes = ["ana", "joão", "maria", "joão"];
let primeiroJoao = nomes.indexOf("joão");
console.log(primeiroJoao); //Array do tipo indexOf()- Retorna o índice da primeira ocorrencia de um valor na array

let chamada = ["ana", "joão", "maria", "joão"];
let ultimoJoao = nomes.lastIndexOf("joão");
console.log(ultimoJoao); //Array do tipo lastIndexOf()- Retorna o índice da ultima ocorrencia de um valor na array

//if ternário//

let idadenumeral = 18;
let status = idade >= 18 ? "Maior de idade" : "Menor de idade";
console.log(status); // usado para tomar uma decisão rápida e simples, geralmente para atribuição de valores.

//switch case//

let cor = "azul";

switch (cor) {
  case "vermelho":
    console.log("Cor quente");
    break;
  case "azul":
    console.log("Cor fria");
    break;
  default:
    console.log("Cor não reconhecida");
} //usar quando você precisa testar uma variável contra vários valores possíveis, especialmente quando são muitos.

