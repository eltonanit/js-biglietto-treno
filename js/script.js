let numero_km = prompt('Inserire numero chilometri');
let eta = prompt('Inserire eta');
const sconto = 10;

let perc_sconto = 0;
if (eta < 18) {
    perc_sconto = 20;
}

console.log(sconto);

if (eta > 65) {
    perc_sconto = 40;
}

console.log(sconto);

