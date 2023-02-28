import mongoose from "mongoose";

mongoose.connect('mongodb+srv://Ewgen:create123@cluster0.oophkgn.mongodb.net/?retryWrites=true&w=majority&dbName=registered')
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.log(err))