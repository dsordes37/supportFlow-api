// models/Solicitacao.js

const {Sequelize, DataTypes} = require("sequelize")
const sequelize = require("../config/database") 

const Solicitacao = sequelize.define(
    "Solicitacao",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nome_solicitante: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        matricula_solicitante: {
            type: DataTypes.CHAR(9),
            allowNull: false
        },
        cargo: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        local_chamada: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        descricao: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        categoria: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        prioridade: {
            type: DataTypes.INTEGER,
            defaultValue: 1, // 1 é o nível mais baixo
            allowNull: false
        },
        status: {
            type: DataTypes.INTEGER,
            defaultValue: 1, // 1: aberto, 2: em andamento, 3: encerrado
            allowNull: false
        },data_abertura:{
            type: DataTypes.DATE,
            defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
        },data_atualizacao:{
            type: DataTypes.DATE,
            defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
            onUpdate: Sequelize.literal("CURRENT_TIMESTAMP")
        }
    },
    {
        tableName: 'Solicitacao',
        timestamps: true,
        createdAt: "data_abertura",
        updatedAt: "data_atualizacao"
    }
)

module.exports = Solicitacao