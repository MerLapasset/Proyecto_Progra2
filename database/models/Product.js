module.exports = function (sequelize, DataTypes) {
    let alias = "Product";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        imagen: {
            type: DataTypes.STRING,
        },
        producto: {
            type: DataTypes.STRING,
        },
        descripcion: {
            type: DataTypes.STRING,
        },
        usuario_id: {
            type: DataTypes.INTEGER,
            
        }
    };

    let config = {
        tableName: "productos",
        timestamps: true,
        underscored: true,
    };

    const Product = sequelize.define(alias, cols, config);

    Product.associate = function (models) {
        Product.belongsTo(models.User, {
            as: "user", // Alias para la relación
            foreignKey: "usuario_id"
        });
        Product.hasMany(models.Comment, {
            as: "comments", // Alias para la relación
            foreignKey: "producto_id" // Asegúrate de que Comment tenga esta clave foránea
        });
    }

    return Product;
}
