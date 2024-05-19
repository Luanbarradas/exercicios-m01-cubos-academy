const comentario = "Esse COVID é muito perigoso!";

const verificar = comentario.includes("COVID" || "covid" || "Covid");

if(verificar === true){
    console.log("Comentário bloqueado por conter palavras proibidas")
} else{
    console.log(comentario)
}