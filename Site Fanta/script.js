
//Criação de uma timeline do GSAP com animações sincronizadas com o scroll//

var tl = gsap.timeline({
    scrollTrigger: {
        trigger:'.two', 
        start: '0% 95%',
        end: '70% 50%',
        scrub: true ,
        markers: false, //Depuração//
    },
});

tl.to(
    '#fanta',
    {
        top:'120%', //Move o elemento com ID fanta para 120% do topo
        left: '0%',
    },
    'orange'
); //Nomeando este trecho de animação como 'orange' para sincronização

tl.to(
    '#laranja-cortada',
    {
        top:'160%',
        left:'23%',
    },
    'orange'
); // Sincronizando com a animação nomeadam 'orange'

tl.to(
    '#laranja',
    {
        width:'15%',//Reduz a a largura do elemento ID 'orange' para 15%
        top:'160%', //Move o elemento para 160% do topo
        right:'10%', //Move o elemento para 10% da direita
    },
    'orange'
); //Sincronizando com a animação nomeada 'orange'

tl.to (
    '#folha',
    {
        top: '110%',
        rotate:'530deg',
        left:'70%'
    },
    'orange'
);

tl.to (
    '#folha2',
    {
        top:'110%',
        rotate:'530deg',
        left: '0%',
    },
    'orange'
);

//Criando outra timeline//

var tl2 =gsap.timeline({
    scrollTrigger: {
        trigger: '.three',
        start: '0% 95%',
        end: '20% 50%', //Fim da animação (topo da tela atinge 50% de altura quando estiver 20% da seção .three)
        scrub: true,
        markers: false, //Depuração
    },
});

//Definindo a animação dos elementos 'tl2'
tl2.from(
    '.lemon1',
    {
        rotate:'-90deg', //Inicia o elemento com classe 'lemon1' rotaccionando em -90 graus
        left:'-100%', //Inicia o elemento fora da tela, á esquerda (-100%)
        top:'110%', //Inicia o primeiro elemento ligeiramente abaixo da tela (110% do topo)
    },
    'ca'
); //Nomeando este trecho de animação como 'ca' para sincronização

tl2.from(
    '#cocacola',
    {
        rotate:'-90deg',
        left:'-100%',
        top:'110%',
    }, 
    'ca'
);

tl2.from(
    '.lemon2',
    {
        rotate:'90deg', //Inicia o elemento com classe 'lemon1' rotaccionando em 90 graus
        left:'100%', //Inicia o elemento fora da tela, á esquerda (-100%)
        top:'110%', //Inicia o primeiro elemento ligeiramente abaixo da tela (110% do topo)
    },
    'ca'
); //Nomeando este trecho de animação como 'ca' para sincronização

tl2.from(
    '#pepsi',
    {
        rotate:'90deg', //Inicia o elemento com classe 'lemon1' rotaccionando em 90 graus
        left:'100%', //Inicia o elemento fora da tela, á esquerda (-100%)
        top:'110%', //Inicia o primeiro elemento ligeiramente abaixo da tela (110% do topo)
    },
    'ca'
); //Nomeando este trecho de animação como 'ca' para sincronização

tl2.to(
    '#laranja-cortada',
    {
        width:'18%', //Aumenta a largura do elemento com id 'Laranja-cortada' para 18%
        left:'42%', //Move o elemento para 42% da esquerda
        top:'204%', //Move o elemento para 204% do topo
    },
    'ca'
); //Sincronizado com a animação nomeada 'ca'

tl2.to(
    '#fanta',
    {
        width:'35%', //Aumenta a largura do elemento com id 'Laranja-cortada' para 35%
        left:'33%', //Move o elemento para 33% da esquerda
        top:'210%', //Move o elemento para 210% do topo
    },
    'ca'
); //Sincronizado com a animação nomeada 'ca'
