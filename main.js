"use strict";
//DAY 31
//TASK 1 (Creating an array of fav fruits) using push method
let myfavfruits = ["Strawberries", "Banana", "Mango", "Orange"];
console.log(myfavfruits); //it prints only these fruits which is written in an array
//using push method to add more fruits in existing list
myfavfruits.push("Grapes", "Kiwi", "Pineapple");
console.log(myfavfruits); //Result , all fruits will be added including existing list and new list.
//Push method is used to add something new in the exisiting list
//TASK 2 (Remove last element from an array) using pop method
let myfavcar = ["Fortuner", "Sportage", "Civic", "Landcruiser"];
console.log(myfavcar); //it prints all the list exactly
//using pop method to remove one element from the exisiting list
myfavcar.pop();
console.log(myfavcar); //Result, it is removed the last element from the exisiting list
//TASK 3 (Find the index of Bananna in an array and replace it with Mango) using index.of method
function replacebnanawithmango(fruits) {
    const index = fruits.indexOf("Banana"); //it find the index of "banana"
    if (index !== -1)
        fruits[index] = "Mango"; //it replaces Banana with Mango if found
}
//Example:  Replacing Banana in an array
const fruits = ["Guava", "Banana", "Cherries"];
replacebnanawithmango(fruits);
console.log(fruits); //Result ["Guava","Mango","Cherries"] because banana is replaced with mango
