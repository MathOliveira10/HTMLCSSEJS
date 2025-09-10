let resultadoUsuario = 0;
let resultadoComputador = 0;

const userScore_span = document.querySelector("userScore");
const compScore_span = document.querySelector("CompScore");
const result_p = document.querySelector("result");
const scores_p = document.querySelector("scores");
const paperButton_img = document.querySelector("paperButton");
const rockButton_img = document.querySelector("rockButton");
const scissorButton_img = document.querySelector("scissorButton");

function vaiGanharVaiPerder() {
    if(resultadoUsuario > resultadoComputador) {
        //Usuário vencendo
    scores_p.style.color = "green"
    scores_p.style.color.borderColor = "green";
}   else(resultadoUsuario < resultadoComputador)
       //Computador vencendo
    scores_p.style.color ="red"
    scores_p.style.color ="red"
}