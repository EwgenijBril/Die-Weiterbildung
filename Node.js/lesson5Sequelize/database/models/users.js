import Sequelize, { DataTypes} from "sequelize";
import { sequelize } from "../index.js";

export const User = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING
    },
    age: {
        type: DataTypes.INTEGER,
        defaultValue: 35
    },
    online: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    freezeTableName: true,
    timestamps: false
});

User.sync({ alter: true })
    .then(() => {
        console.log(' Table and model synced successfully');
        // const user = User.build({username: 'Ewgenij', password: '1234', age: 28, online: false});
        // return user.save()
        // return User.create({
        //     username: 'Ewgenij',
        //     password: '1234',
        //     age: 28,
        //     online: false
        // })

        return User.bulkCreate([
            {
                username: 'Oleg',
                password: 'qweerty'
            },
            {
                username: 'Irina',
                password: 'eretor',
                age: 30
            }
        ])
        
})
    .catch(err => console.log(err))
