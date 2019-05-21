const sequelize = require('./connection');
const Sequelize = require('sequelize');

const User = sequelize.define('user', {
  // attributes
  userName: {
    type: Sequelize.STRING,
    allowNull: false
  },  
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  // options
});

// Note: using `force: true` will drop the table if it already exists
User.sync({ force: false }).then(() => {
  // Now the `users` table in the database corresponds to the model definition
  // return User.create({
  //   firstName: 'Rajeev',
  //   lastName: 'MC',
  //   password: '123'
  // });
});


module.exports =  User;