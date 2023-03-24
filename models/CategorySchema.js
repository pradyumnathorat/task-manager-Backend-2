const mongoose = require('mongoose');
const schema = mongoose.Schema;

const categorySchema = new schema({
    Category: {
        type : String,
        required : true,
    },
    color: {
        type : String,
        required : true
    }
})

const categoryModel = mongoose.model('Category' , categorySchema);
module.exports = categoryModel;