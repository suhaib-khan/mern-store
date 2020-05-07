const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect('mongodb+srv://suhaib:suhaib@1989@cluster0-ez8nj.mongodb.net/shop?retryWrites=true&w=majority',{useUnifiedTopology: true})
    .then(client => {
      console.log('Connected!!!')
      _db = client.db();
      callback();
    }).catch(err => {
      console.log(err)
      throw err;
    })
}

const getDb = () =>{
  if(_db){
    return _db
  }
  throw 'No database found!'
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;