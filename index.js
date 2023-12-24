//Массивы ДЗ
// Задание №1 без использовани функции
// задача 1
const numbers = [1,2,3,4,5]
// задача 2
console.log(numbers[2]);

// задача 3
console.log(numbers.length);

//,задача 4
numbers [1] = 10
console.log(numbers);

// задача 5
const newNumber = numbers. push ("six");
console.log(numbers);

//задача 6
firstDestroyЕlement = numbers. shift ();
console.log(numbers);
  
//задача 7
indexNumber4 = numbers.indexOf(4)
console.log(indexNumber4);

//задача 8
checkfive = numbers.includes("five")
console.log(checkfive); 

//задача 9
const numbers2 = [2,3,4]
console.log(numbers2);

//задача 10
const conjugateNumbers = numbers. concat (numbers2)
console.log(conjugateNumbers);


//задача 11
const deletingTheLast = conjugateNumbers.pop()
console.log(conjugateNumbers);

//задача 12
conjugateNumbers.reverse()
console.log(conjugateNumbers);

// задача 13
const roles = ["admin","user","superUser"]
rolesJoin = roles.join("-")
console.log(rolesJoin);

//задача 14
//const fruits = ['apple,orange,banana']
//const fruitsSplit = fruits.split(',')
//console.log(fruitsSplit)

//задача 15
const numerics = ["1","2","3","4",]
const numercisPlus0 = numerics.unshift("0")
console.log(numerics);


// Задание №1 с использованием функции

// задача 1
function arrayOutput (massivNumbers,massivNumbers2,massivNumbers3,massivNumbers4) {
const array = [massivNumbers,massivNumbers2,massivNumbers3,massivNumbers4]
return array.toString()
}
console.log(arrayOutput (2,3,4,5));

 // задача 2
 function arrayDisplayIndex (index) {
 const array2 = ["user", "admin", "super-user",]
const elemenеСontent = array2[index] 
return elemenеСontent
}
console.log(arrayDisplayIndex (1));

// задача 3
function checkLenght (massiveCheckout)  
{
return massiveCheckout.length
}
console.log(checkLenght([1,2,3,4]))

// задача 4
function addingElement (replacementNumber,newElement) {
    const array4 = ["", "", "",]
    const newElementarray4 = array4[replacementNumber] = newElement
    return array4
}
console.log(addingElement(1,"element"));

// задача 5
function newElementEnd (ElementEnd) {
    const array5 = ["","","",]
    const createNewElement = array5.push(ElementEnd)
    return array5
}

console.log(newElementEnd(5));

// задача 7
function elementDelited (element) {
    let aray7 = [1, 2, 6, 7, 3]
   const appearanceIndex = aray7.indexOf(element)
    return appearanceIndex 
}
console.log(elementDelited(1));

// задача 8
function elementCheck (verifiable) {
    let aray8 = [1, 2, 6, 7, 3]
    const verifiableElement = aray8.indexOf(verifiable)
   const check = verifiableElement === -1 ?console.log("Такого элемента нет"):console.log("Такой элемент есть"); 
    return check
}
console.log(elementCheck(3));

// задача 9
function sliceInterval (aray9, startindex,endindex) {
    const interval = aray9.slice(startindex,endindex)
    return interval
}
console.log(sliceInterval([0,1,2,3,4,5,6],2,5));

//Задача 10
function compoundAray (array9,array10) {
return array9.concat(array10)
}
console.log(compoundAray([1,2,3,4],[5,6,7,8]));

//Задача 11
function deletingLast (array11) {
array11.pop()
return array11
}
console.log(deletingLast([1,2,3]));

//Задача 12
function reverseArray (array12) {
return array12.reverse()
}
console.log(reverseArray([1,2,3]));

//Задача 13
function transformationsString(array13) {
return array13.join("-")
}
console.log(transformationsString([1,2,3,4]));

//Задача 14
//function separationElements(array14) {
//const separationArray = array14.split(',')
//return separationArray
//}
//console.log(separationElements(['function,const,console']));

//Задача 15
function addingNewElement (array15,newElement) {
array15.unshift(newElement)
return array15
}
console.log(addingNewElement([2,3,4,5],2));

// Задание №2 без использовани функции

//Задача 1
const array16 = [1,2,3,4,5,6,7,8,9,10]
const deletingTwoElement = array16.slice(2)
console.log(deletingTwoElement);

//Задача 2
const array17 = [2,4,6,8,10]
const array17OneToThree =array17.slice(1,3)
console.log(array17OneToThree);

//задача 3
const array18 = [1,2,3,4,5,6,7,8,9,10]
const array18Splice = array18.splice(1,2)
console.log(array18);

//задача 4
const array19 = [1,2,3,4,5,6,7,8,9,10]
const array19Clone = array19.concat(array19)
console.log(array19Clone);

//задача 5
const array20 = [1,2,3,4,5,6,7,8,9,10]
const array20ЬissingLast = array20.slice(0,9)
console.log(array20ЬissingLast);

//задача 6
const array21 = [1,2,3,4,5,6,7,8,9,10]
const array21Splice = array21.splice(6,0,20)
console.log(array21);

//задача 7
const array22 = [1,2,3,4,5,6,7,8,9,10]
const array23 = [11,12,13,14,15,16,17,18,19,20]
const array22Concat = array22.concat(array23)
const array22ConcatFirstElement = array22Concat

//Задача 8
const array24 = [1,2,3,4,5,6,7,8,9,10]
const array24MoreTwoDelited = array24.splice(0,2)
console.log(array24MoreTwoDelited);

// Задание №2 с использованием функции

//Задача 1
function removingFirstTwo(array) {
array.splice(0,2)
return array
}
console.log(removingFirstTwo([1,2,3,4,5,6,7,8,9,10]));
    
//Задача 2
function evenArray (array) {
    function evenFilter (numb) {
     const evenFilterValues = numb % 2 === 0 
     return evenFilterValues
    } 
  return  array.filter(evenFilter)
}
console.log(evenArray([1,2,3,4,5,6,7,8,9,10]));

//Задача 3
function threeElement (array) {
    return array.slice(0,3)
}
console.log(threeElement([1,2,3,4,5,6,7,8,9,10]));

//Задача 5
function union (array) {
  return array.concat(array)  
}
console.log(union([1,2]));

//Задача 6
function ExceptLast (array) {
return array.slice(0,array.length-1)
}
console.log(ExceptLast([1,2,3,4,5,6,7,8,9]));

//Задача 8
function concatTwoArrays (array,array1) {
    return array.concat(array1)
}
console.log(concatTwoArrays ([1,2,3,4,5,6,7,8,9,10],[1,2,3,4,5,6,7,8,9]));

//Задача 9
function deleteIndexGreaterThanTwoParams (array) {
    return array.splice(0,2)
}
 console.log(deleteIndexGreaterThanTwoParams([1,2,3,4,5,6,7,8,9,10]));   


