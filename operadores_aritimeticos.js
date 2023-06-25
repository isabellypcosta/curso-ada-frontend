let primeiroNumero = 20; // camel case, em caso de compostas, o segundo nome em diante inicia com letra maiuscula
let numero2 = 2; // numero não podem estar no inicio da variavel, apenas no meio/fim

/*
o nome da variável deve estar em minusculo
*/

/*
Adição:         +
Subtração:      -
Multiplicação:  *
Divisão:        /
Exponenciação   **
Resto da divisão %

*/
const soma= primeiroNumero + numero2;
console.log('Soma =', soma)
console.log('Soma =', primeiroNumero + numero2) // para fazer a operação e já imprimir o resultado.
console.log('Subtração =', primeiroNumero - numero2)
console.log('Multiplicação =', primeiroNumero * numero2) 
console.log('Divisão =', primeiroNumero / numero2) 
console.log('Exponenciação =', primeiroNumero ** numero2) 
console.log('Resto da divisão =', primeiroNumero % numero2) 

// Precedência de operadores - leva em conta a ordem de realização das operações matemáticas.

console.log(3 + 3 * 7)
console.log((3 + 3 )* 7) // entre parênteses o que se quer calcular primeiro
console.log((10 + 7 + 8) / 3)  // exemplo- calculando média

// Biblioteca Math.

Math // abre as opções da biblioteca;
console.log(Math.PI)
console.log(Math.sqrt(16)) // calcula raíz quadrada de um número


