//Ate então o código estava sendo executado uma linha a baixo da outra, todas eram executaveis.
//Estrutura de controle de fluxo: nem toda linha de codigo sera executada, será executada se determinada condição for satisfeita. 


const idade = 10;
console.log('Você é maior de idade')
console.log('Você é menor de idade') // desse modelo só é possível imprimir um abaixo do outro.

//Condicionais

if (idade >= 18) { 
    console.log('Você é maior de idade')
} 
// = se (sempre abrir parenteses), só vai ser executado ser for true, tudo que for colocado destro das chaves será executado
else {
    console.log('Você é menor de idade') 
} // = caso contrario

// Se média >= 7, aprovado
// Se média < 7 e média >= 5, recuperação
// Se média < 5, reprovado.

let media = 6
if (media >= 7) {
    console.log('APROVADO')
}
else if (media >= 5) {
    console.log('RECUPERAÇÃO') 
} // meio termo
else {
    console.log('REPROVADO')
} // caso não entram em nunhum dos casos, uma vez que é falso não precisa da condicionante dentro dos parenteses.