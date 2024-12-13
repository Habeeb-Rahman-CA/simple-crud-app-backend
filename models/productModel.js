const mongoose = require("mongoose")

const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter product name"]
        },
        quantity: {
            type: Number,
            required: [true, "Please enter quantity"],
            default: 0
        },
        price: {
            type: Number,
            required: [true, "Please enter the price"],
            default: 0
        },
        image: {
            type: String,
            required: false
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("Products", productSchema)

