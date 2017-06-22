//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://first:test1234@ds135252.mlab.com:35252/iljakogantodo',(err,db)=>{
    if(err){
       return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    //  db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result)=>{
    //      console.log(result);
    //  });
   
//   db.collection('Todos').deleteOne({text: 'Eat lunch'}). then((result)=>{
//       console.log(result); 
//   });

    // db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
    //     console.log(result);
    // });
    db.collection('Users').deleteMany({name:'Ilja'}).then((result)=>{
        console.log(result);
    })
    
    db.collection('Users').findOneAndDelete({_id: new ObjectID('594b856b03593548d5f84952')}).then((result)=>{
        console.log(JSON.stringify(result,undefined,2));
    })
   //db.close();
});