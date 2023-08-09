let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";

console.log(identificador.padStart(6 ,0))
//acrescentar zeros à esquerda

console.log(email.trim());
//retirar os espaços desnecessários

let arrayDeNomes = nome.split(" ");
let nomeFormatado = " ";
for(let item of arrayDeNomes){
    //transformar a inicial de cada item em maiuscula
    let primeiraLetra = item.slice(0,1);
    let restanteDoNome = item.slice(1);
    nomeFormatado += primeiraLetra.toUpperCase() + restanteDoNome + " ";
}

console.log(nomeFormatado.trim());