//1 Mostre no console.log a mensagem " Ano novo esta chegando";
 console.log(" Ano novo esta chegando!!");
  
//2 Crie uma variavel que receba o nome da cantora Mariah Carey
var nome = "Mariah Carey";

//3 crie uma variavel que receba a idade dela
let idade = 54;

//4 Crie uma variavel com o ano atual e subtraia pelo o valor da idade da Mariah Carey.
let ano = 2024;
let idade = 54;
let resultado = ano - idade;
console.log("O resultado é 1970");

//5 Crie uma variável para guardar a data de nascimento da Mariah Carey .
let datadeNascimento = Date ("1969-03-27");
console.log( "datadeNascimento");

//6 Crie uma variável chamada “quartaFeira” e atribua à ela o valor booleano que representa verdadeiro ou falso e mostre a saída no console.log.
let quartaFeira = true;
if (quartaFeira) {
    console.log ("Hoje é quarta- feira!");
} else{
    console.log ("Hoje não é quarta-feira");
}

//7 Exiba no console o tipo de dado da váriavel quartaFeira;
let quartaFeira = true;
console.log ("quarta-feira");

//8 Crie uma condição  SE você for maior ou igual 18 retornará  a mensagem:  Você é maior de idade, poderá curtir o show do Roberto Carlos com participação especial de Mariah Carey.
// SENÃO for maior ou igual a 18,  retorne a seguinte mensagem:  "Sinto muito, mas assistirá da tv globo"
let idade = 18;
if (idade >= 18) {
    console.log ("Você é maior de idade, poderá curtir o show do Roberto Carlos com participação especial de Mariah Carey");
} else { 
    console.log ("Sinto muito, mas assistirá da tv globo");
}

//9 Crie uma condição que exiba uma mensagem no console se você fizer aniversário em Agosto OU Dezembro OU JUNHO. Caso seja verdadeira a informação, retorne essa mensagem: Uma ou mais opções estão corretas.
// O mês escolhido foi o mês tal. Caso a informação seja falsa, retorne a seguinte mensagem:  Algo de errado não está certo, o mês digitado foi o mês tal.
let mesdeAniversario = "Dezembro";
let condicaoVerdadeira = false;

if (mesdeAniversario === "agosto"){
 condicaoVerdadeira = true;
}

if (mesdeAniversario === "Dezembro"){
    condicaoVerdadeira = true ;
}

if (mesdeAniversario === "junho"){
condicaoVerdadeira = true;
}

if (condicaoVerdadeira){
    console.log ("Uma ou mais opções estão corretas. O mês escolhido foi o mês Dezembro");
}else {
    console.log ( " Algo de errado não esta certo");
}

