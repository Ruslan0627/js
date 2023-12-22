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


// Задание №4 Оператор Нулевого Слияния

const username = null
console.log(username ?? "Гость" );

const ueserAge = undefined
console.log( ueserAge ?? 18 );

//Задачи разные

//Задача №1
const grade = "A"

switch (grade) {
    case "A":console.log("Оценка 5");
        break;
        case "B":console.log("Оценка 4");
        break;
        case "C":console.log("Оценка 3");
        break;
        case "D":console.log("Оценка 2");
        break;
        case "F":console.log("Оценка 1");
        break;
        default: console.log("Такой оценки нет");
}


//Задача №2
const num1 = 1 
const num2 = 2
console.log(num2 > num1 ?"num2 больше": "num1 больше или равен");

//Задача №3



//Задача №4

const isAdault = true 
console.log( isAdault === true ?"Вам разрешено":"Вам запрещено");

//Задача №5

const temperature = 10

switch (true) 
{ case temperature <= 0: console.log("Зима");
break
case temperature >= 1 && temperature < 10 : console.log("Осень");
break
case temperature >= 10 && temperature <= 19 : console.log("Весна");
break
case temperature >= 20 && temperature <= 30 : console.log("Лето");
break
default: console.log("Давно не было такой температуры");
}

//Задача №6

const isLoggedIn = true ?"Пользователь зашёл" :null
console.log(isLoggedIn ?? "Гость" ) ;

//Задача №7

const isEvening = true
const hasGuests = false

const answerGuests = isEvening && hasGuests ?"Останусь" : "Не останусь"

console.log(`Останусь ли я дома? ${answerGuests}`);

//Задача №8

const hasPermission = true
const isPaid = true

const answerAccess = hasPermission || isPaid ?" есть доступ" : " нет доступа"

console.log(`Отсуствие или присудствие доступа: ${answerAccess}`);

//Задача №9
const userRole = "admin"
const isAdmin = true
switch (userRole) {
case "admin": console.log(userRole && isAdmin ?"Админстратор" : "Нет прав администратора");
break
case "moder": console.log(!isAdmin && userRole && "Модератор");
break
case "user": console.log(!isAdmin && userRole && "Пользователь");
break
}

//Задача №10
const isMorniiing = true
const isWeeeekend = true
console.log(isMorniiing && !isWeeeekend?"Вставать нужно":"Вставать не нужно");

//Задача №11
const isAllowed = true

const isExpired = false

const TicketUseResponse = isAllowed && isExpired ?"Разрешено":"Не Разрешено"
console.log(`Разрешено ли исползовать билет:${TicketUseResponse}`);


