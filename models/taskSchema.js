const mongoose = require('mongoose');
const schema = mongoose.Schema;

const taskSchema = new schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    dueDate: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Category'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User1'
    }
})

const taskModel = mongoose.model('Tasks', taskSchema);
module.exports = taskModel;