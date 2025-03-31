console.log("Hello World")

let cars = ["saab", "volvo", "BMW"]

let cars_details = {
    "saab": {
        "color": "red",
        "year": 2010
    },
    "volvo": {
        "color": "blue",
        "year": 2012
    },
    "BMW": {
        "color": "black",
        "year": 2014
    }
}
let BLANK = cars_details.volvo.color
let BLANK2 = (cars_details.BMW.year - cars_details.saab.year)
let BLANK3 = (cars_details.BMW.color + ", " + cars_details.saab.color + ", and " + cars_details.volvo.color)
let blue_cars = 0

for (let i = 0; i < cars.length; i++) {
    //console.log(cars[])
    if(cars_details[cars[i]].color !== "blue") {
        console.log(cars[i])
        blue_cars += 1
    }
}
console.log(`volvo is the color ${BLANK}`)
console.log(`The BMW is ${BLANK2} years older than the saab`)
console.log(`The cars are ${BLANK3} colors`)
console.log(`There are ${blue_cars} cars not the color blue`)



let date = new Date()
let blank1 = 24 - date.getHours()
let blank2 = 60 - date.getMinutes()
let blank3 = 60 - date.getSeconds()

console.log(date)
console.log(`Midnight will be in ${blank1} hours, ${blank2} minutes, and ${blank3} seconds`)