let numero_km = prompt('Inserire numero chilometri');
let eta = prompt('Inserire eta');
let price = 0.21 * numero_km ;

let perc_sconto = 0;
if (eta < 18) {
    perc_sconto = 20;
}else if (eta > 65) {
    perc_sconto = 40;
}

let sconto = price * perc_sconto / 100 ;
price = price - sconto ;
function formatPercentage(price) {
    return (price * 1).toFixed(2) + 'Euro';
}


console.log(numero_km);
console.log(eta);

console.log(perc_sconto);
console.log(price);

console.log(formatPercentage(price));
