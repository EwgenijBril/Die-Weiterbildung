// Реализуйте класс Group (групп), который будет иметь следующие свойства: 
// name (название группы), major (специализация), number (количество студентов, по умолчанию 15)
// Реализуйте методы add_student() (добавляет одного студента) и delete_student() (удаляет одного студента)
// Создайте экземпляр этого класса
// Проверьте как работают методы

class Croup {
    constructor(name, major, number = 15) {
        this.name = name;
        this.major = major;
        this.number = number;
    }

    add_student() {
        this.number ++;

    }

    delete_student() {
        this.number --;

    }
}

const group_1 = new Croup('32', 'Java', 16);
const group_2 = new Croup('32', 'Python');

group_1.add_student();
group_2.delete_student();

console.log(group_1);
console.log(group_2);

// Создайте функцию, которая будет создавать экземпляры класса Group и собирать их в один массив

let all_groups = [];

const create_group = (name, major, num) => all_groups.push(new Croup (name, major, num));

create_group('32', 'Java', 16);
create_group('33', 'Python');
create_group('34', 'C++', 28);

console.log(all_groups);