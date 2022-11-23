const db = require('../../utils/database')

const { DataTypes } = require('sequelize')
const Userstype = require('../usertype/usertype.model')

const Users = db.define('users', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true,
        validate: { isEmail: true }
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
    isValidated: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        field: 'is_validated'
    },
    usertype: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'normal'
    }
    // usertype:{
    //     type:DataTypes.INTEGER,
    //     allowNull:false,
    //     field:'usertype',
    //     references:{
    //         model:Userstype
    //     }   
    //}     



}, { timestamps: false })

module.exports = Users