var orm = require('../config/orm.js');

var burger = {
  all:  function(cb) {
    orm.all("burgers",function(res){
      cb(res);
    });
  },
  create: function (column, value, cb) {
    orm.create( "burgers", column, value, function(res){
      cb(res);
    });
  },
  update: function(value, condition, cb){
    orm.update("burgers", value, condition, function(res){
      cb(res);
    });
  }
};

module.exports = burger;
