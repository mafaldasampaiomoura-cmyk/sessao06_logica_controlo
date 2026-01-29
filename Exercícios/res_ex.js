//Exercício 01
console.log("----Exercício 01-------")
let idade = 10; 
const maioridade = 18; 

if (idade > maioridade){
    console.log("Maior de Idade");
}else {
     console.log("Menor de Idade");
}

//Exercício 02
console.log("----Exercício 02-------")
const notaAluno = 20; 

if(notaAluno >= 16){
    console.log("Excelente");
} else if (notaAluno >= 14){
    console.log("Bom");
}else if (notaAluno >= 10){
    console.log("Suficiente");
}else if (notaAluno < 10){
    console.log("Insuficiente"); 
}else {
    classificacaoNota == "Inválido";
}

//Exercício 03
console.log("----Exercício 03-------")
let a = 3;
console.log("A: " + a);

if(a % 2 == 0){
    console.log("A é Par"); 
}else if (a % 2 !== 0){
    console.log("A é impar");
}else {
    console.log("0 não é válido");
}

//Exercício 04 
console.log("----Exercício 04-------")
let num1 = 50; 
let num2 = 100; 
console.log("Num1: " + num1); 
console.log("Num2: " + num2);

if (num1 > num2){
    console.log("Num1 é maior")
}else {
    console.log("Num2 é maior")
}

//Exercício 05
console.log("----Exercício 05-------")

let nome = "";

if(nome == 0){
    console.log("Nome Vazio");
}else {
    console.log("Nome Preenchido");
}

//--------<>Exercício 06 --- voltar aquuiii<>---------------------
console.log("----Exercício 06-------")
let b = 0; 
let c = null;
let d = undefined; 
let e = "texto";

if (b === 0){
    console.log("True")
} else{
    console.log("Not True")
}


//Exercício 07 
console.log("----Exercício 07-------")
let diasSemana = 7

switch(diasSemana){
    case 1: 
        console.log("Segunda-feira");
        break;

    case 2: 
        console.log("Terça-feira");
        break;

    case 3: 
        console.log("Quarta-feira");
        break;
    
    case 4: 
        console.log("Quinta-feira");
        break;

    case 5: 
        console.log("Sexta-feira");
        break;

    case 6: 
        console.log("Sábado");
        break;
    
    case 7: 
        console.log("Domingo");
        break;
    
    default: 
        console.log("Dia não encontrado");
}

//Exercício 08
console.log("----Exercício 08-------")

let mesAno = 5; 

switch(mesAno){
    case 1:
    case 2: 
    case 12:
        console.log("Inverno");
       break; 
    case 3:
    case 4:
    case 5: 
        console.log("Primavera");
        break; 
    case 6: 
    case 7: 
    case 8: 
        console.log("Verão");
        break;
    case 9: 
    case 10: 
    case 11: 
        console.log("Outono");
    default: 
        console.log("Mês não Encontrado"); 

}

//Exercício 09
console.log("----Exercício 09-------")
let valorCompra = 120; 
let mensagem = valorCompra > 100 ? ("Tem direito a 10% de desconto. Novo Valor: " + (valorCompra -(valorCompra * 0.1 ))) : ("Não tem direito a desconto");
console.log(mensagem);

//Exercício 10
console.log("----Exercício 10-------")
const alunoNota = 9;
const notaAprovado = 10; 
let classificacaoFinal = alunoNota >= notaAprovado ? ("Aprovado") : ("Reprovado"); 
console.log(classificacaoFinal);

//Exercício 11
console.log("----Exercício 11-------")
let frutas = ["morango", "bananas", "kiwi", "laranja", "maçã"]
console.log(frutas[0]); 
console.log(frutas[4]);

//Exercício 12
console.log("----Exercício 12-------")
let vazio = []; 
console.log(vazio); 

vazio.push(10, 20, 30); 
console.log(vazio); 

vazio.pop(); 
console.log(vazio); 

//Exercício 13
console.log("----Exercício 13-------")
let i = 0; 

while (i < 10){
    i++;
    console.log(i);
}

//Exercício 14
console.log("----Exercício 14-------")
const numero = 5

for(let i = 0; i <= 10; i++ ){
    console.log(numero + " x " + i + " = " + (numero * i))
}

//Exercício 15
console.log("----Exercício 15-------")
let somaNumero = 0; 

for (let i = 0; i <=100; i++){
    somaNumero = somaNumero + i
}

console.log(somaNumero)

//Exercício 16
console.log("----Exercício 16-------")
let nomesLoop = ["Mafalda", "Ângela", "Maria", "Adriana", "Anabela"]; 

for (let i = 0; i < nomesLoop.length; i++){
    console.log(i + " " + nomesLoop[i]); //mostra o índice + o nome dentro dos arrays
}

//Exercício 17 
console.log("----Exercício 17-------")

let contador = 11//tem de começar no 11 porque ele vai começar diretamente a remover. 

while (contador > 0){
    contador --; 
    console.log(contador)
}

//Exercício 18 
console.log("----Exercício 18-------") //compliquei, o que quero é que dizer todos os números pares, portanto de 2 em dois tenho um nr par

let n = 0; 

while(n <= 20){
    console.log(n); 
    n +=2
}

//Exercício 19 
console.log("----Exercício 19-------")

const notasAlunosMafalda = [12, 13, 14, 17, 18, 19, 20, 6, 4, 2]
let media = 



