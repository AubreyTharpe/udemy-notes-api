const {ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove

// Todo.findByIDAndRemove

Todo.findOneAndRemove({_id: '5a7206a01ceed4fd402fd5b1'}).then((todo) => {
    console.log(todo);
});

Todo.findByIdAndRemove('5a7206a01ceed4fd402fd5b1').then((todo) => {
    console.log(todo);
});