const mongoose = require("mongoose")
const foodSchema = mongoose.Schema({
    food_brand: String,
    food_color: String,
    food_cost: Number
})
module.exports = mongoose.model("Food", foodSchema)