const Sequelize = require('sequelize')
const db = require('../database')

const Car = db.define('car', {
   name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
         notEmpty: true, 
      }
   },
   make: {
      type: Sequelize.STRING,
      allowNull: false
   }, 
   model: {
      type: Sequelize.STRING,
      allowNull: false
   },
   description: {
      type: Sequelize.TEXT,
   },
   imageUrl: {
      type: Sequelize.STRING(2000),
      defaultValue: 'https://cdn.imgbin.com/0/10/22/imgbin-classic-car-vintage-car-vintage-cars-vintage-blue-car-9xnHuvmxGqXnry5GyZq6SBivd.jpg'
   }
   
})

module.exports = Car