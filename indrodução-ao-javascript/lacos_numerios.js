//Os laços condicionais, while, é meio que uma repetição não controlada, pois não se sabe quantas vezes isso vá acontecer.

//O laço numérico  (FOR) é uma estrutura de repetição controlada, definindo quantas vezes queremos que aquela repetição aconteça

// O problema: crias a media 3 notas de aluno.

const input = require('readline-sync')
/*
const nota1 = Number(input.question('Informe a nota 1: '))
const nota2 = Number(input.question('Informe a nota 2: '))
const nota3 = Number(input.question('Informe a nota 3: ')) // o codigo se repete

let media = (nota1 + nota2 + nota3) / 3

*/

// Acumulador

let acumulador = 0 // é uma variavel para ir acomunando, somando/sub/multi dentro dela um outro valor. levando pra frente com base no seu valor anterior
acumulador += acumulador + 10 // soma nesse mesma  variável e já joga o valor adicional 10

acumulador = acumulador + 2

acumulador ++ // representa que está sendo somada uma unidade

console.log(acumulador)

//Estrutura for

for (let i = 0;  i <= 4; i++) {
    console.log('Repetição', i)
} // i = interação - é uma volta da repetição, o laço é a estrutura completa

// priemiro é iniciada uma variavel, depois coloco uma condição de parada (quando você quer que parada). a cada repetição quero somar quanto?

for (let i = 10;  i <= 12; i++)   {
 console.log('Repetição', i)
}

for (let i = 12;  i >8; i--)   {
    console.log('Repetição', i)
   }

// Resolvendo problema inicial
let nota;
let soma = 0;
for (let i =1; i <= 3; i++){
    nota = Number(input.question(`Informe a nota ${i} do aluno:`))
      soma = soma + nota
}
 console.log(` A média do aluno é ${soma / 31010}`)
// templete string, para por uma variavel dentro de uma strin: usar crase






