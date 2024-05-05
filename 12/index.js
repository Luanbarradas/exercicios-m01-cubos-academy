let montante = 90000; c = 60000, n = 24;
let formula = 1 / n;
let i = (((montante/c)**formula - 1) * 100). toFixed (3);

console.log(`O seu financiamento de ${c} reais teve uma taxa de juros de ${i}%, pois após ${n} meses você teve que pagar ${montante} reais.`)