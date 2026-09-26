const car1 = {brand: 'Audi', model: 'Audi A6', year :2010};
const car2 = {brand : 'BMW', model: 'BMW X5', owner : 2017};
const car3 = {...car1, ...car2};
console.log (car3);
