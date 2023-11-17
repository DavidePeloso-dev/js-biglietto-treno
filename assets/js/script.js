const kilometres = Number(prompt('Insert the kilometers you have to travel')); 
const user_age = Number(prompt('Insert your age'));
const cost = 0.21;
console.log(kilometres, user_age, cost);

const tiket_price = kilometres * cost;

console.log(tiket_price);

let tiket_discount;

if (user_age < 18){
    tiket_discount = tiket_price * 20 / 100
} else if (user_age > 65){
    tiket_discount = tiket_price * 40 / 100
} else {tiket_discount = 0.00};

const total_price = tiket_price - tiket_discount;

console.log(total_price.toFixed(2));

document.getElementById('kilometers').innerHTML = kilometres + ' km';
document.getElementById('age').innerHTML = user_age + ' years old';
document.getElementById('tiket_price').innerHTML = tiket_price.toFixed(2) + ' \u20AC';
document.getElementById('tiket_discount').innerHTML = '- ' + tiket_discount.toFixed(2) + ' \u20AC';
document.getElementById('total_price').innerHTML = total_price.toFixed(2) + ' \u20AC';




