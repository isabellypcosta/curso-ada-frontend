/* Operdores booleanos são operadores que tem como resultado verdadeiro ou falso.
Normalmente essas operaçãoes são chamadas de comparações, quando você compara que o resultado será verdadeiro ou falso
Exemplo: Sua idade é maior que 18 anos? (v/f)
*/

// >OPERADORES BOOLEANOS

// Igualdade:       == (ou ===)

const numero = 10
console.log(numero == 10)

// Desigualdade:    != (ou !==)

console.log(10 != 10)

// Maior que:       >

console.log(numero > 20)

// Maior ou igual:  >=
// Menor:           <
// Menor ou Igual:  <=

console.log(numero == 10)     //numero
console.log(numero == '10')  //texto
console.log(10 == '10') // quando dois são igual, o js só compara o conteudo
console.log(10 === '10') // para comparar conteúdo + tipo de variável (melhor para evitar bugs), assim como no !==


console.clear()



// -Conjunções Lógicas

//AND => &&  - para duas condições 

let idade = 20;
let tenhoCNH = true;

const possoDirigir =  idade >= 18 && tenhoCNH === true
console.log('Posso dirigir', possoDirigir)


//OR => || - comparações que envolvem "ou"

idade = 40;   // sem o let para alterar o valor da variável
const votoFacultativo = idade > 18 || idade <= 70
console.log('Posso votar', votoFacultativo )

// NOT => ! - inverte

const estouGostandoDoCurso = false;
console.log(!estouGostandoDoCurso)


