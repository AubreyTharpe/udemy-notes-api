// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("5a6a1ed12d48c8b9c82cbc18")
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("5a69e9c02e1e95180c79a09e")
    }, {
        $set: {
            name: 'Aubrey'
        },
        $inc: {
            age: 1
        }
    },{
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    // db.close();
});