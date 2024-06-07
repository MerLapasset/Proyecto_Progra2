module.exports= function (sequeize, dataTypes) {
    let alias= "Comment";
    let cols= {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        usuario_id: {
            type: dataTypes.INTEGER,
        },
        producto_id: {
            type: dataTypes.INTEGER,
        },
        updatedAt:{
            type: dataTypes.DATE, 
            field: 'updatedAt'

        },
        createdAt: {
            type: dataTypes.DATE, 
            field: 'createdAt'
        }

    }
    let config = {
        tableName : "comentarios", 
        timestamps:true,
        underscored: true,
    };

    const Comment = sequelize.define(alias, cols, config);

    Comment.associate= function (models) {
        Comment.belongsTo(models.User, {
            as: "user",
            foreing_key: "usuario_id"
        });
        Comment.belongsTo(models.Product, {
            as: "product",
            foreing_key: "product_id"
        })

    }
    return Comment;
    
}