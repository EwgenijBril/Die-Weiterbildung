class Car {
    constructor(name, model, country, volume, color, year) {
        this.name = name;
        this.model = model;
        this.country = country;
        this.volume = volume;
        this.color = color;
        this.year = year;
    }

    get_info() {
        console.log(`Auto: ${this.name} (${this.model}), aus Land: ${this.country}`);
    }

}

const car_1 = new Car('Toyota', 'RAV4', 'Japan', 2.4, 'red', 2020);
const car_2 = new Car('BMW', 'X3', 'Germany', 2.0, 'Black', 2018);

// console.log(car_1);
// console.log(car_2.color);

car_1.get_info();
car_2.get_info();

// ЗАДАЧА
// Реализуйте класс Country (Страна), который будет иметь следующие свойства: 
// name (имя), capital (столица), population (численность населения), climat (климат)
//Создайте 3 экземпляра этого класса с разными свойствами
//Выведите в консоль по 1 свойству на выбор из каждого экземпляра класса
//Реализйуте метод get_capital, который выводит в консоль сообщение 'The capital of <COUNTRY> is <CAPITAL>'



class Country {
    constructor(name, capital, population, climat) {
        this.name = name;
        this.capital = capital;
        this.population = population;
        this.climat = climat;
    }
    
    get_capital() {
        console.log(`The capital of ${this.name} is ${this.capital}'
        `)
    }
}

const country = new Country('Germany', 'Berlin', '82 ml', 'confident');
const country_1 = new Country('Russland', 'Moskau', '142 mln', 'confident');
const country_2 = new Country('USA', 'Washington', '329 mln', 'confident');

console.log(country.capital);
console.log(country_1.name);
console.log(country_2.population)

country.get_capital();