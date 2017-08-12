var connection = require('./connection.js');

var orm = {
  selectAll: function (table){
    var queryString = "SELECT * FROM ?";
    connection.query(queryString,[table], function (err, results) {
      console.log(results);
    });
  },
  insertOne: function(table, column, value){
    var queryString = "INSERT INTO ? (burger_name, devoured) VALUES (?,?) ";
    connection.query(queryString, [table, column, value], function(err, results){
      console.log(results);
    });
  },
  updateOne: function(table, value, id) {
    var queryString = "UPDATE ? SET devoured = ? WHERE id = ?";
    connection.query(queryString, [table, value, id], function(err, results){
      console.log(results);
    })
  }
}

module.exports = orm;
