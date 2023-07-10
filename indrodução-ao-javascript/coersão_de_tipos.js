//Coesão ou conversão de tipos.
// 1- Conversão explícita - convergida manualmente de um tipo de variável para outro tipo de variável.
// 2- Conversão implicíta ou automatica - feita pelo proprio Javascrip por debaixo dos panos.


// 1- Coersão Explicíta (manual)

const numero = 10
console.log(numero, typeof numero)

const numeroString = String(numero)
console.log(numeroString, typeof numeroString)

            // amarelo numero e texto branco 

console.log(Number('123456')) // converge  para numero
console.log(parseFloat('2324.234'))  // converge para decimal (se usa ponto para decimal)
console.log(parseInt('2324.234'))  // converge para inteiro
console.log(Boolean(25))   //  qualquer numero diferente de zero ele converge para verdadeiro, caso seja zero é falso.              

// 2- Coersão Implicíta (automática)

console.log(10 + 1)

console.log(10 + '1') // quando se soma um numero com o texto, ele sempre vai converter tudo para texto e juntar. Ou seja, irá concatenar.
console.log('10' - 1) // na subtração ele entende que tem que ser número, que ambos devem ser numero.
console.log(2*'15') // a mesma regra da subtração serve para as demais, o caso excepcional é a soma.

console.log(10-'bebeb')  // retorna NOT A NUMBER (NAN)

//Outros exemplos

let n = 1 +"1" // 11

n = n - 1 // 10

console.log(n) // corresponde ao let n

console.log(2+3+4+"5") // 9 e 5 = 95

console.log("5"+2+3+4) // 5 2 3 4 em texto

console.log("10" - "4" - "3" - "2" + "5") // 10 - 4 - 3 - 2 = 1 + 5 (repete o 5)
