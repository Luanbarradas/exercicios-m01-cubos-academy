const cpf = "12345678900";
const cnpj = "12345678900123";

let cpfNumeros = cpf.length
let cpfModificado = `${cpf.slice(0,3)}.${cpf.slice(3,6)}.${cpf.slice(6,9)}-${cpf.slice(9)}`;

let cnpjNumeros = cnpj.length
let cnpjModificado = `${cnpj.slice(0,2)}.${cnpj.slice(2,5)}.${cnpj.slice(5,8)}.${cnpj.slice(8,12)}/${cnpj.slice(12)}`;

if(cpfNumeros == 11){
    console.log("cpf valido" , cpfModificado)
    }else{
    console.log("cpf invalido")
    }
if(cnpjNumeros == 14){
    console.log("cnpj valido" , cnpjModificado)
    }else{
    console.log("cnpj invalido")
    }