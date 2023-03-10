import  Sequelize  from "sequelize";
import { password } from "../password.js";

export const sequelize = new Sequelize('facebook', 'root', password, {
    dialect: 'mysql',
    port: 3306,
    host: 'localhost'
});

// sequelize.authenticate()
//     .then(() => console.log('Connented to mySQL database'))
//     .catch(err => console.log(err))

const start  = async () => {
    try {
        await sequelize.authenticate()
        console.log('Connected to mySQL database')
    } catch (err) {
        console.log(err)
    }
}

start();
