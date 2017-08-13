var orm = require('../config/orm.js');

var burger = {
  all:  function(cb) {
    orm.selectAll("burgers", function(res){
      cb(res)
    });
  },
  create: function (column, value, cb) {
    orm.insertOne("burgers", column, value, function(res){
      cb(res);
    });
  },
  update: function(value, condition, cb){
    orm.updateOne("burgers", value, condition, function(res){
      cb(res);
    });
  }
};

module.exports = burger;
