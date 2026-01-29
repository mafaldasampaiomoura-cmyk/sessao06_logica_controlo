//Condições if - condição simples 

// let idade = 18; 
// if(idade<=18){
//     console.log("Menor de Idade"); 
// }

// const bateria = 10; 
// if(bateria <= 20){
//     console.log("Bateria Baixa");
// }

//Radar de Velocidade 

// let velocidade = 80

// if(velocidade >=70){
//     console.log(`Velocidade ${velocidade} km/h Está acima do permitido!`)
//     console.log("Acionar câmera do radar!")
// }

//If/else 
// let idade = 16; 
// let classificacaoEtaria =18; //definir sempre este tipo de variáveis porque é mais fácil de depois fazer alterações e tudo mais

// if (idade < classificacaoEtaria){
//     console.log("A sua idade é " + idade + " anos, e portanto inferior à classificação etária permitida de " 
//         + classificacaoEtaria + " anos." + " Entrada não autorizada"); 
// } else{
//     console.log("Entrada autorizada!")
// }

//Calcular saldo compra
// let saldo = 50; 
// let valorCompra = 80; 

// if (saldo >= valorCompra){
//     saldo -= valorCompra; 
//     console.log("Compra realizada com sucesso! Novo saldo: " + saldo); 
// }else {
//     console.log("Saldo insuficiente. Operação cancelada.")
// }

// let a = 4; 

// if (a % 2 === 0){
//     console.log("Número Par");
// }else {
//     console.log("Número ímpar");
// }

//If | Else If | Else -- a ordem interessa porque 
// if(nota >= 10){
//     console.log("Aprovado")
// }else if (nota >= 18){
//     console.log("Excelente");
// }

//falta declarar o desconto e no final faço o console.log
// let assinatura = "bronze";
// let desconto = 0;

// if (assinatura === "free"){
//     desconto = 0;
// }else if (assinatura === "bronze"){
//     desconto = 5;
// }else if (assinatura === "silver"){
//     desconto = 10;
// }else{
//     desconto = 10;
// }

//Blocos e Escopo - voltar aquiii

//switch -- consigo fazer um switch para selecionar um dia e ele dizer-me o dia que eu estou a selecionar 
// let diasSemana = 10

// switch(diasSemana){
//     case 1: 
//         console.log("Segunda-feira");
//         break;

//     case 2: 
//         console.log("Terça-feira");
//         break;

//     case 3: 
//         console.log("Quarta-feira");
//         break;
    
//     case 4: 
//         console.log("Quinta-feira");
//         break;

//     case 5: 
//         console.log("Sexta-feira");
//         break;

//     case 6: 
//         console.log("Sábado");
//         break;
    
//     case 7: 
//         console.log("Domingo");
//         break;
    
//     default: 
//         console.log("Dia não encontrado");
// }

//Operador Ternário 

//condicao ? valorSeVerdadeiro : valorSeFalso -- posso utilizar numa só linha 
//está logado? se sim carrega a página : se não, pede para loggar

// let idade = 20; 

// let mensagem = idade < 18 ? "Menor de idade" : "Maior de idade"; //igual ao if else mas fica muito mais curto 
// console.log(mensagem);

// let notaAluno = 18
// let mensagem = notaAluno < 9.5 ? "Reprovado" : "Aprovado";
// console.log(mensagem)

//Array
// let frutas = ["Maçã", "Banana", "Morango"]; 

// console.log(frutas [0]); 
// console.log(frutas.length); 

// let fila = ["Cliente 1", "Cliente 2"]; 
// console.log(fila); 
// console.log("-----------------------")

// //Chegou um novo cliente
// fila.push("Cliente 3");
// console.log(fila)
// console.log("-----------------------")

// //Adicionar um novo elemento no início da fila 
// let tarefas = []

// let produtos = ["Camisa", "Calça", "Meias", "Ténis"];

// produtos.push("T-shirt", "Botas"); 
// console.log(produtos);

// produtos.pop();
// console.log(produtos);

// console.log("Produto:" + produtos[0]);
// console.log("Produto:" + produtos[1]);
// console.log("Produto:" + produtos[2]);
// console.log("Produto:" + produtos[3]);
// console.log("Produto:" + produtos[4]);

//Loops

//FOR 
// //Tábuada
// const numero = 2; 

// for(let i = 1; i <= 10; i++){
//     console.log(numero + " x " + i + " = " + (numero * i));
// }

//While 
let i = 10; 
while(i > 0){
    console.log("Contagem regressiva" + i); 
}