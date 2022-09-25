class Panda {

    constructor (name, age = 18) {
        this.name = name;
        this.age = age;
        this.energy = 100;
    }

    eat() {
        if(this.energy === 100) {
            console.log('Please enough') 
        } else {
            this.energy += 20;
            console.log('nyam- nyam!', `energy: ${this.energy}`)
        }
       
    }

    fall() {
        if(this.energy === 0) {
            console.log('Please enough') 
        } else {
            this.energy -= 20;
            console.log('puff!', `energy: ${this.energy}`)
        }
        
    }

}

const karl = new Panda('Karl');
const tom = new Panda('Tom', 15);


console.log(karl);
console.log(tom);
 
// karl.name = 'karl';
// karl.eat();
// tom.eat();

// karl.fall();
// tom.fall();

// доработайте метод eat таким образом, чтобы при каждом вызове добавлялось 20 процентов энергии. Если энергии уже 100 процентов выведите какое-нибудь сообщение и не прибавляйте энергию
