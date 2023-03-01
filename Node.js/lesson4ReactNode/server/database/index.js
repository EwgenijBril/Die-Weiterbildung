import mongoose from "mongoose";
import { user_data } from "./password.js"

mongoose.connect(`mongodb+srv://${user_data}@cluster0.oophkgn.mongodb.net/?retryWrites=true&w=majority&dbName=mobile_Store`)
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.log(err))