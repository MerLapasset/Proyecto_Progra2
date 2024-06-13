module.exports = function (sequelize, DataTypes) {
    let alias = "User";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        email: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING,
        },
        fecha: {
            type: DataTypes.DATE,
        },
        dni: {
            type: DataTypes.INTEGER,
        },
        foto: {
            type: DataTypes.STRING,
        }
    };
    

    let config = {
        tableName: "usuarios",
        timestamps: true,
        underscored: true,
    };

    const User = sequelize.define(alias, cols, config);

    User.associate = function (models) {
        User.hasMany(models.Product, {
            as: "products", // Alias para la relación
            foreignKey: "usuario_id"
        });
        User.hasMany(models.Comment, {
            as: "comments", // Alias para la relación
            foreignKey: "usuario_id"
        });
    }

    return User;
}
