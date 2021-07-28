const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');
const { type } = require('os');

class User extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
            },

        username: {
            type: DataTypes.STRING,
            allowNull: false
            },

        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [10]
            }
        },
        
        dogName: { 
            type: DataTypes.STRING,
            allowNull: false,
        },

        dogAge: {
            type: DataTypes.INTEGER,
            allowNull: false
        },


    },
    {
        hooks: { 
            async beforeCreate(newUserData) {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                    return newUserData
            
            },
            async beforeUpdate(updatedUserData) {
                updatedUserData.password = bcrypt.hash(updatedUserData.password, 10);
                return updatedUserData
            }
            
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);


module.exports = User;