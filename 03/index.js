const texto = "Aprenda programar do zero na Cubos Academy";

let textoModificado = "";
const substituto = "-";

for (let i = 0; i < texto.length; i++) {
    if (texto[i] === " ") {
        textoModificado += substituto;
    } else {
        textoModificado += texto[i].toLowerCase();
    }
}

console.log(textoModificado);