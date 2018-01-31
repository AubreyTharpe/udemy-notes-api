const {ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

var id = '5a71dea7407b4a2044b40d2911';

// if(!ObjectID.isValid(id)){
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo){
//         return console.log('ID not found');
//     }
//     console.log('Todo id', todo);
// }).catch((e) => console.log(e));

User.findById('5a70ba944f03b02bd4b7fc9e').then((user) => {
    if(!user){
        return console.log('User not found');
    }
    console.log('User', user);
}).catch((e) => console.log(e));