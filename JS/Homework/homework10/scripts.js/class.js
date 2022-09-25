//ЗАДАЧА 1
// Реализуйте класс Language (Язык), который будет иметь следующие свойства:
// name (имя), alphabet, (латинский, кирилица и т.д.), country (страна, в которой говорят на этом языке)
//Создайте экземпляр этого класса
//Выведете в консоль все свойства созданного класса
// Реализуйте метод get_info (выводит в консоль строку 'Язык: <name>, Алфавит: <alphabet>, Страна, в которой говорят на этом языке <country>)

class Language {
    constructor(name, alphabet, country) {
        this.name = name;
        this.alphabet = alphabet;
        this.country = country;
    }

    get_info() {
        console.log(`Sprache: ${this.name}, Alphabet: ${this.alphabet}, Country: ${this.country}!`)
    }
}

const language_1 = new Language('Englisch', 'Latin', 'Great Brotain');

console.log(language_1);

language_1.get_info();

//ЗАДАЧА 2 (*посложнее)
// Реализуйте класс Worker (Работник), который будет иметь следующие свойства: name (имя), surname (фамилия),
//rate (ставка за день работы), days (количество отработанных дней).
//Также класс должен иметь метод getSalary(), который будет выводить зарплату работника.
//Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days.
//С помощью класса создайте двух рабочих и найдите сумму их зарплат.
// Реализуйте методы add_days (увеличивает количество дней на amount) и delete_days (уменьшает количество дней на amount)

class Worker {
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }

    get_Salary() {
        return this.rate * this.days;

    }

    add_days(amount) {
        this.days += amount;

    }

    delete_days(amount) {
        this.days -= amount;
    }
}

const muller = new Worker('Jon', 'Muller', 60, 20);
const braun = new Worker('Stefan', 'Braun', 80, 20);

const salary_1 = muller.get_Salary();
const salary_2 = braun.get_Salary();
const salary_all = salary_1 + salary_2;

console.log(salary_1);

// console.log(Muller.get_Salary())

muller.delete_days(4);
muller.add_days(3);

console.log(muller);