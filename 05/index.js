const numeroCartao = '1111222233334444';

const numerosInicio = numeroCartao.slice(0, 4);
const numerosFim = numeroCartao.slice(-4);

let numerosMeio = '';
for (let i = 0; i < numeroCartao.length -8; i++) {
    numerosMeio += '*';
}

const cartaoModificado = numerosInicio + numerosMeio + numerosFim;

console.log(cartaoModificado);