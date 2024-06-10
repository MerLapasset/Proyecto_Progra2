module.exports= function (sequeize, dataTypes) {
    let alias= "Product";  //Este alias se busca como nombre en de la tabla en plural dentro de la base de datos.
    let cols= {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        imagen: {
            type: dataTypes.STRING,
        },
        producto: {
            type: dataTypes.STRING,
        },
        descripcion: {
            type: dataTypes.STRING,
        },
        updatedAt:{
            type: dataTypes.DATE, 
            field: 'updatedAt'

        },
        createdAt: {
            type: dataTypes.DATE, 
            field: 'createdAt'
        },

        usuario_id: {
            type: dataTypes.INTEGER,
        }

    } // p q no ponemos createdAt y updatedAt y deletedAt en tp 12 --> optativos??
    let config = {
        tableName : "productos", 
        timestamps:true, //Aclareción en caso de no explicitar created_at, deleted_at y updated_at --> si, (uptadeAt)
        underscored: true, //Aclareción en caso que los timestamps usen guiones bajos en lugar de camelCase. --> si tenemos (usuario_id)
        createdAt: "created_at",
        updatedAt: "updated_at",
        deletedAt: "deleted_at"
    };

    const Product = sequelize.define(alias, cols, config);

    Product.associate= function (models) {
        Product.belongsTo(models.User, {
            as: "user",  //Como voy a llamar a la relación dentro del controlador
            foreing_key: "usuario_id"
        }); // por consiguiente un usuario has many () productosss 
        Product.hasMany(models.Comment, {
            as: "comment",
            foreing_key: "usuario_id"
        })

    }
    return Product;
    
}