import express from "express";
import mongoose from "mongoose";
import router from './router.js'
import fileUpload from "express-fileupload";

const PORT = 5000;
//ПАРОЛЬ НЕ ДЕЙСТВИТЕЛЕН
const DB_URL = 'mongodb+srv://tomixlove:<password>@cluster0.glxew5l.mongodb.net/?retryWrites=true&w=majority'

const app = express();

app.use(express.json());
app.use(express.static('static'))
app.use(fileUpload({}));
app.use('/api', router);
// app.use('/users', userRouter);

async function startApp() {
    try {
        await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
        app.listen(PORT, () => console.log('SERVER STARTED ON PORT' + PORT))
    }
    catch (e) {
        console.log(e)
    }
}

startApp()