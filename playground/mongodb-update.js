//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://first:test1234@ds135252.mlab.com:35252/iljakogantodo',(err,db)=>{
    if(err){
       return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');


// db.collection('Todos').findOneAndUpdate({
//     _id: new ObjectID('594b9c42734d1d4e66f01a5e') },
//     {
//         $set:{
//             completed : true
//         }
//     }, {
//         returnOriginal :false
//     }
    
// ).then((results)=>{
    
//     console.log(results);
// });

db.collection('Users').findOneAndUpdate({name:'Jen'},
    {
       $set:
        {
            name:'Ilja'
        },
       $inc: {age:1}
    }, 
    
        {
            returnOriginal: false
        }
    ).then((result)=>{
        console.log(result);
    });



   //db.close();
});