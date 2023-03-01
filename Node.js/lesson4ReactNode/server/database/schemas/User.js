import mongoose from "mongoose";
// Схема показывает как будут выглядеть наши данные

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const User = mongoose.model('users', UserSchema); // имя схемы/коллекции, схема

export default User;