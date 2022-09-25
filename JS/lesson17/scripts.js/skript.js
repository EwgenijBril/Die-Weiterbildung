class User {

    static roles = ['root', 'admin', 'manager', 'user'];

    constructor(name, age, role) {
        this.name = name;
        this.age = age;
       
        if(User.roles.includes(role)) {
            this.role = role;
        } else {
            this.role = undefined;
        }
        

        
    }

    say_hi() {
        console.log('Hello!');
    }

    chenge_name(new_name) {
        this.name = new_name;
    }

    b_day() {
        this.age++;
        console.log('ich gratuliere dich!')
    }

    chenge_role(new_role) {
        if(User.roles.includes(new_role)) {
            this.role = new_role;
        } else {
            this.role = undefined
        }
    }

}

const user_1 = new User('Evgeny', 28, 'admin');
const user_2 = new User('Evgeny', 28, 'student');

// проверить указываемую роль и если она входит в список допустимых указать ее
// пользователю
// в ином случае в свойство role указать undefined

// добавить метод изменения роли, который получает в качестве аргумента новую роль
// и изменяет свойство role в случае, если роль указана верно
// если роль неверна, то в свойство role указать undefined

