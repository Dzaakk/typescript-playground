
let myName: string = "Dz"
let numberOfWheels: number = 4
let isStudent: boolean = false

type Food = string
let favoriteFood: Food = "pizza"

type Address = {
    street: string
    city: string
    country: string
}

type Person = {
    name: string
    age: number
    isStudent: boolean
    address?: Address
}

let person1: Person = {
    name: "Budi",
    age: 26,
    isStudent: false,
    // address: {
    //     street: "12 Main",
    //     city: "Anytown",
    //     country: "USA"
    // }
}

let person2: Person = {
    name: "gol",
    age: 14,
    isStudent: true,
    address: {
        street: "13 Main",
        city: "Anytown",
        country: "USA"
    }
}

function displayInfo(person: Person) {
    console.log(`${person.name} lives at ${person.address?.street}`);
}

displayInfo(person1)

let people: Person[] = [person1, person2]
let people2: Array<Person> = [person1, person2]