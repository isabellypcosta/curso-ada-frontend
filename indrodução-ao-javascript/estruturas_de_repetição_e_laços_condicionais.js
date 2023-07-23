/* Estrutura de controle de fluxo - altera o fluxo
Exemplo: IF (Faz com que apenas uma parte de codigo seja executada)
Em alguns casos vamos querer fazer com que algo se repita
Entrando assim, as estrutas de repetição, que é mais uma estrutura de controle de fluxo
*/

// Laço condicional (loop)

const input = require('readline-sync')

const numero_sorteado = 5; // pesquisar math.random

let numero = Number(input.question('Qual numero voce escolhe?') )// .question - imprime uma pergunta

console.log(numero, typeof numero)

if (numero === numero_sorteado){
    console.log('Voce acertou')
}
else {
    console.log('Voce errou')
} // quando erra acabou a execuçao, a intensão é repetir em loop

while (numero !== numero_sorteado) {
console.log('Você errou o numero. Tente novamente...') // loop infinito
numero = Number(input.question('Qual numero voce escolhe?') )
}
console.log('Voce acertou !!')


 /*enquanto o numero o numero digitado for diferente do numero sorteado, então será pedido o numero até que ele acerte 
enquanto - não se sabe quantas vezes vai acontecer, enquanto a condição for verdadeira, ele continua repetindo. 
Quando deixa de ser verdadeira ele para de repetir.
*/


/* Como ler numero do usuario? 
no node não existe um método, necessitando baixar um biblioteca para fazer a leitura de dados. (npm install- para baixar bibliotecas).
instalar npm-sync (ele instala no projeto e não na maquina)
quando se usa npm install -g, instala global
*/