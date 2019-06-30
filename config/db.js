const mongoose = require("mongoose")


mongoose.connect(process.env.DB_URL, {

    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false

} ).then( db => console.log("DB connected "))
.catch(err => console.log(err))