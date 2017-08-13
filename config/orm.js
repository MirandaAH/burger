var connection = require('../config/connection.js');


function printQuestionMarks(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}

function objToSql(ob) {
  var arr = [];
  for (var key in ob) {
    if (Object.hasOwnProperty.call(ob, key)) {
      arr.push(key + "=" + ob[key]);
    }
  }
  return arr.toString();
}




var orm = {
  all: function (tableName, cb){
    var queryString = "SELECT * FROM " + tableName + ";";
    connection.query(queryString, function (err, results) {
      if(err){
        throw err;
      }
      cb(results);
    });
  },
  create: function(tableName, column, value, cb){
    var queryString = "INSERT INTO " + tableName;
    queryString += " (";
    queryString += column.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(value.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, [value], function(err, results){
      if(err){
        throw err;
      }
      cb(results);
    });
  },
  update: function(tableName, value, condition, cb) {
    var queryString = "UPDATE " + tableName;
    queryString += " SET " ;
    queryString += objToSql(value);
    queryString += " WHERE ";
    queryString += condition;
    console.log(queryString);
    connection.query(queryString, function(err, results){
      if(err){
        throw err;
      }
      cb(results);
    })
  }
}

module.exports = orm;
