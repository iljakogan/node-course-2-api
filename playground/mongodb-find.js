//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://first:test1234@ds135252.mlab.com:35252/iljakogantodo',(err,db)=>{
    if(err){
       return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    // db.collection('Todos').find({
    //     _id: new ObjectID('594b8d19a742af4b705b5f66')
    // }).toArray().then((docs) =>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,undefined,2));
        
    // },(err)=>{
    //     console.log('Unable to fetch ', err);
    // });
//   db.collection('Todos').find().count().then((count) =>{
//         console.log(`Todos count: ${count}`);

//     },(err)=>{
//         console.log('Unable to fetch ', err);
    // });
    
    db.collection('Users').find( {name:'Ilja'}).count().then((count)=>{
        console.log(`Users count: ${count}`);
    },(err)=>{
        console.log('Unable to fetch', err);
    })
   //db.close();
});