const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Article = sequelize.define('Article', {
    uid: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    desc:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    auth: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    imgPath:{
        type: DataTypes.STRING,
        allowNull: false,
    }
});

module.exports = Article;