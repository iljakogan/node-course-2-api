//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://first:test1234@ds135252.mlab.com:35252/iljakogantodo',(err,db)=>{
    if(err){
       return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed:false
    // },(err,result)=>{
    //     if (err){
    //         return console.log('Unable to insert todo', err);
    //     }
        
    //     console.log(JSON.stringify (result.ops, undefined, 2))
    // });
    
//     db.collection('Users').insertOne({
//         name: 'Ilja',
//         age: '31',
//         location:'Bonn'
//     }, (err,result)=>{
//         if (err){
//             return console.log('Unable to insert User',err);
//         }
//         console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
//     });


    db.collection('Todos').insertOne({
        text: 'Walk the dog',
        completed:false
    },(err,result)=>{
        if (err){
            return console.log('Unable to insert todo', err);
        }
    });
   db.close();
});