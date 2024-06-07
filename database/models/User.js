module.exports= function (sequeize, dataTypes) {
    let alias = "User";
    let cols= {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },

        email: {
            type: dataTypes.EMAIL,
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
        },

        createdAt: {
            type: dataTypes.DATE, 
            field: 'createdAt'
        },

        updatedAt:{
            type: dataTypes.DATE, 
            field: 'updatedAt'

        },

        producto_id: {
            type: dataTypes.INTEGER,
        }
    };
    
    const Usuario = sequelize.define(alias, cols, config);

    Usuario.associate= function (models) {
        Usuario.hasMany(models.Product, {
            as: "producto",  //Como voy a llamar a la relación dentro del controlador
            foreing_key: "producto_id"
        }); 
        Usuario.hasMany(models.Comment, {
            as: "comment",
            foreing_key: "producto_id"
        })

    }
    return Usuario;



}