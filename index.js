// Дз№2

// Задание №1 Switch case

const dayOfWeek = 1

switch (dayOfWeek) {
    case 1 : console.log("Понедельник");
    break;
    case 2 : console.log("Вторник");
    break;
    case 3 : console.log("Среда");
    break;
    case 4 : console.log("Четверг");
    break;
    case 5 : console.log("Пятница");
    break;   
    case 6 : console.log("Суббота");
    break;  
    case 7 : console.log("Воскресенье");
    break;
    default:console.log("Такого дня недели нет");
}

const month = 1

switch (month) {
case 1 : console.log("Зима");
break;
case 2 : console.log("Зима");
break;
case 3 : console.log("Весна");
break;
case 4 : console.log("Весна");
break;
case 5 : console.log("Весна");
break;   
case 6 : console.log("Лето");
break; 

case 7 : console.log("Лето");
break;

case 8 : console.log("Лето");
break;

case 9 : console.log("Осень");
break;

case 10 : console.log("Осень");
break; 

case 11 : console.log("Осень");
break;

case 12 : console.log("Зима");
break;

default:console.log("Такого месяца нет");
}

// Задание №2 Тернарный оператор

const isRaning = "Идёт дождь"

const dry = "Cухо"

const decision = isRaning === isRaning ? "Идёт дождь" :"Cухо"
console.log(decision)

const score = 40

const gradeA = score >= 80 ? "Оценка A" : "" 
console.log(gradeA);

const gradeB = 80 > score && score >= 60 ? "Оценка B" : ""
console.log(gradeB);

const gradeC = 60 > score &&  score >= 40 ? "Оценка C" : ""
console.log(gradeC);

const gradeD = 40 > score && score >= 20 ? "Оценка D" : ""
console.log(gradeD);

const gradeF = 20 > score && score >= 0 ? "Оценка F " : ""
console.log(gradeF);

// Задание №3 Булевая логика

const hasMoney = true
const isHungry = true

console.log(`Пойду ли я в ресторан: ${hasMoney && isHungry ?"Да" : "Нет"} `);

const isWeekend = true
const hasPartyInvation = true

console.log(`Пойду ли я на вечеринку: ${isWeekend || hasPartyInvation ?"Да" : "Нет"} `);







