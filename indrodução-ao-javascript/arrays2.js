//METODOS DE ARRAYS (funções que estão dentro de uma variável, toda função parenteses)

const arr1 = [30,12,45,34,29]
let arr2 = []

//Fatiamento (pegar partes): slice (pode receber dois parametros que são opcionais, podendo passar o parametro start e o parametro end)

console.log(arr1.slice(0,2))   // o numero do fim não está incluso, sempre menor que

console.log(arr1.slice(2)) // com um parametro, ele pega do indice que foi colocado até o final, como só tivesse sido definido o inicio

//Adicionando elementos: push | unshift

console.log('Antes de adicionar', arr2)
arr2.push(10, 20, 30) // pode se colocar um item ou varios
arr2.push(40) // o push sempre joga os elemntos que voce coloca dentro dele no final do array

console.log('Depois de adicionar', arr2)

// unshift - para adicionar elemento no inicio do array

console.log('Antes de adicionar com unshift', arr2)
arr2.unshift(0)
console.log('Depois de adicionar com unshift', arr2)
arr2.unshift(0)

//Removendo elemntos: pop | shift

console.log('Antes de remover com o pop:', arr2)
arr2.pop() // remove por padrão o ultimo elemento do array
console.log('Depois de remover com o pop:', arr2)

const elementoRemovido = arr2.pop()
console.log ('O elemento removido foi:', elementoRemovido)

console.log('Antes de remover com o shift:', arr2)
arr2.shift() // remove por padrão o primeiro elemento do array
console.log('Depois de remover com o shift:', arr2)


//Conectando arrays: concat (concatenar) - tonar uma coisa só

console.log('arr1', arr1)
console.log('arr2', arr2)


console.log(arr1.concat(arr2))

console.log(arr2.concat(arr1))

//Buscando elementos: indexOf | lastindexOf

console.log(arr1) // para saber o indice

let indiceDoElemento34 = arr1.indexOf(34)
console.log(indiceDoElemento34) // começa a contar do 0

//toda vez que for buscado o indice  de um elemento e ele retornar -1, é por que o emento não existe dentro do Array. Caso tiver dois elementos do mesmo valor, sempre irá retornar o indice do primeiro

let arr3= [1,2,3,3,3,5,3]
console.log(arr3.indexOf(3))
console.log(arr3.lastIndexOf(3))


//Descobrindo a existência de um elemento: includes (true or false)

console.log(arr1)
console.log(arr1.includes(10))
console.log(arr1.includes(12))

//Invertendo arrays: reverse // para inverter um array

console.log('arr1 normal:', arr1)
const arr1Invertido = arr1.reverse()
console.log('arr1 invertido', arr1Invertido)