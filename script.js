
// function getNew(newName, newGender) {
//     return {
//         "name": newName,
//         "gender": newGender,
//         eat: function (meal) {
//             console.log(meal);
//         },
//         greeting: function () {
//             console.log("Hi" + this.name);
//         }

//     }
// }
// let person = getNew("aisha", "female")
// console.log(person);


function countCars(carsName, carsCompany, carsColor, carsNumber) {
    return {
        name: carsName,
        company: carsCompany,
        color: carsColor,
        number: carsNumber,
        drive: function () {
            console.log(`drive ${this.name} easily`);
        },
        greet: function () {
            console.log("I have" + this.name);
        }
    }
}
let vehicle1 = countCars("Alto", "Civic", "Red", 5467)
let vehicle2 = countCars("cultus", "honda", "blue", 8787)
console.log(vehicle1);
console.log(vehicle2);
// let idCard1 = {
//     name:"Maria Khan",
//     gender:"female",
//     age:122,
//     interests:["coding", "reading"],
//     bio:function (){
//         console.log();
//     },
//     greet:

// }