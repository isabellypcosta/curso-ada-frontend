//tipos primitivos das variáveis do js - number, string, boolean, undefined, null

/*
Estrutura de dados:
Variáveis mais complexas, carregam mais de uma informação dentro de uma várial
Arrays é uma estrututa de dados
*/

// Como criar um array? Pois nos modelos anteriormente estudados só era possivel guardar um conteudo
/*const nome = "Isabely"
const idade = 23
const altura = 1.61
const estudando = true
*/
//neste caso é necessario uma variavel para cada informação guardada, se fossem muitas informações o codigo seria muito estendido

// criando um array

let arr = ['Isabelly', 23, 1.61, true]
console.log(arr)

//Como acessar os elmentos do array - o primeiro elemento tem indice 0

console.log('Primeiro Elemento', arr[0])
console.log('Segundo Elemento', arr[1])
console.log('Terceiro Elemento', arr[2])
console.log('Quarto Elemento', arr[3])

// Como obter tamanho do array? length = comprimento// quantidade de elementos

console.log(arr.length)

//Percorrendo array

for (let i = 0; i.length; i++){
    console.log(arr[i])
}
for (let elemento of arr){ // a cada interação pegar um elemento
console.log(elemento)
}

for (let indice in arr) {//percorrendo de dentro do array
console.log(indice)
}

for (let variavel in arr) {// indice
    console.log(variavel, arr[variavel])
    }