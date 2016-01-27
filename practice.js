//create a Class constructor,
//create a method called mothersLove. It return a value by the users average of grades. 4<avr. = 500, 3<avr. = 400 and so on... set this new parameter(motherslove), to every kid as its new parameter.
// create a method that increments every kid's money, according to the mothersLove method, and whe the money updated, set the mothersLove parameter to 0.
// create a method that gives the oldest of the richest and the poorest kid.
// create a method that can delete a kid by their age.




var kids = [
    {name: 'Gyurka', age: 12, money: 100, grades: [3,5,4,4,2]}
    {name: 'Lilla', age: 18, money: 100, grades: [5,4,3,2,2]}
    {name: 'Evi', age: 20, money: 100, grades: [4,3,5,5,2]}
    {name: 'Balesz', age: 13, money: 100, grades: [5,5,4,3,1]}
    {name: 'Kristof', age: 18, money: 100, grades: [3,2,4,4,1]}
    {name: 'Edus', age: 8, money: 100, grades: [5,5,5,4,4]}
    {name: 'Atus', age: 20, money: 100, grades: [2,5,4,3,2]}
]

var firstTableClass = new Class(kids);

// console.log(firstTableClass.kids) // {name: 'Gyurka', age: 12, money: 100, grades: [3,5,4,4,2], mothersLove: 400} and so on....
// firstTableClass.updateMoney()
// console.log(firstTableClass.kids) // {name: 'Gyurka', age: 12, money: 500, grades: [3,5,4,4,2], mothersLove: 0} and so on....
// console.log(whoIsTheOldest) // Balesz
// firstTableClass.removeByAge(18)
// console.log(firstTableClass.kids) // {name: 'Gyurka', age: 12, money: 100, grades: [3,5,4,4,2]}
                                  // {name: 'Evi', age: 20, money: 100, grades: [4,3,5,5,2]}
                                  // {name: 'Balesz', age: 13, money: 100, grades: [5,5,4,3,1]}
                                  // {name: 'Edus', age: 8, money: 100, grades: [5,5,5,4,4]}
                                  // {name: 'Atus', age: 20, money: 100, grades: [2,5,4,3,2]}
