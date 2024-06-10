module.exports= function (sequelize, dataTypes) {
    let alias = "User";
    let cols= {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        email: {
            type: dataTypes.STRING,
        },
        password: {
            type: dataTypes.STRING,
        },
        fecha: {
            type: dataTypes.DATE,
        },
        dni: {
            type: dataTypes.INTEGER
        },
        foto: {
            type: dataTypes.STRING,
        }

    };
    
    let config = {
        tableName : "productos", 
        timestamps:true, //Aclareción en caso de no explicitar created_at, deleted_at y updated_at --> si, (uptadeAt)
        underscored: true, //Aclareción en caso que los timestamps usen guiones bajos en lugar de camelCase. --> si tenemos (usuario_id)

    };

    const Usuario = sequelize.define(alias, cols, config);

    Usuario.associate= function (models) {
        Usuario.hasMany(models.Product, {
            as: "producto",  //Como voy a llamar a la relación dentro del controlador
            foreing_key: "usuario_id"
        }); 
        Usuario.hasMany(models.Comment, {
            as: "comment",
            foreing_key: "usuario_id"
        })

    }
    return Usuario;



}