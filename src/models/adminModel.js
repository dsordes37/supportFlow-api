const {Sequelize, DataTypes} = require("sequelize");
const sequelize = require("../config/database");
const bcrypt = require('bcryptjs');


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
        updatedAt: "data_atualizacao",

        hooks: {
            beforeCreate: async (admin)=>{
                if (admin.senha) {
                    const salt = await bcrypt.genSalt(10);
                    admin.senha = await bcrypt.hash(admin.senha, salt);
                }
            },
            
            beforeUpdate: async (admin)=>{
                if (admin.senha && admin.changed('senha')) {
                    const salt = await bcrypt.genSalt(10);
                    admin.senha = await bcrypt.hash(admin.senha, salt);
                }
            }
        }
    }
)

Admin.prototype.comparePassword = function(senhaFornecida) {
    return bcrypt.compare(senhaFornecida, this.senha);
};

module.exports = Admin