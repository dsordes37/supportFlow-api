// models/Admin.js

const {Sequelize, DataTypes} = require("sequelize")
const sequelize = require("../config/database")


const Admin = sequelize.define(
    "Admin",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nome: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        matricula: {
            type: DataTypes.CHAR(9),
            allowNull: false,
            unique: true
        },
        senha: {
            type: DataTypes.STRING(255),
            allowNull: false
        },data_criacao:{
            type: DataTypes.DATE,
            defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
        },data_atualizacao:{
            type: DataTypes.DATE,
            defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
            onUpdate: Sequelize.literal("CURRENT_TIMESTAMP")
        }
    },
    {
        tableName: 'Admin',
        timestamps: true,
        createdAt: "data_criacao",
        updatedAt: "data_atualizacao"
    }
)

module.exports = Admin