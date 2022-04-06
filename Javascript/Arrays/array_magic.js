/*
* The purpose of this js file is to display the functionality of specific array methods.
*/

//Filter
//Filter is used to filter out specific values in an array by using a comparison to determine what values to keep
//If the callback inside the filter method returns a value other than true, the value will be filtered out. "True" values are kept.
const people = [
    {firstName: "Cameron", lastName: "Arnold"},
    {firstName: "Caitlyn", lastName: "Jane"},
    {firstName: "Tucker", lastName: "Arnold"},
    {firstName: "Colin", lastName: "Jackson"}
]
console.log(people);

const filteredPeople = people.filter(person=>{
    if(person.firstName.includes("C")){return true}
})

console.log(filteredPeople);

//Map. 
//Map is used to do <something> to every element in an array, and return a list of all those elements after they've been modified.
//Think of items going through a factory line
const fullNames = people.map(person=>{
    return(person.firstName + " " + person.lastName)
})
console.log(fullNames);


//Sort.
//You can sort items in an array by rules you define in the callback. When you return either (1) or (-1) for each comparison.
//This algorithm uses bubble sort
const ordered = people.sort((person1, person2)=>{
    return (person1.lastName > person2.lastName ? 1 : -1);
})

console.log(ordered);

//Reduce.
//Reduce is used to reduce an array to a single variable. This is helpful for summations.

const numbers = [1,2,3,4,5];
const total = numbers.reduce((total, number)=>{
    return(total + number);
}, 0);

console.log(total);