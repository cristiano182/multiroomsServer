const mongoose = require("mongoose")
const { Schema } = mongoose

const MessageSchema = new Schema({
    text: { type: String, required: true },
    user:{name:{type: String, required: true},},
    createdAt: { type: Date, default: Date.now },
    room: {type: String, required: true}
})

module.exports = mongoose.model("messages", MessageSchema)