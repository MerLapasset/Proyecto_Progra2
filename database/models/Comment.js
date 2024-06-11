module.exports= function (sequelize, dataTypes) {
    let alias= "Comment";
    let cols= {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        comentario: {
            type: dataTypes.STRING,

        },
        usuario_id: {
            type: dataTypes.INTEGER,
        },
        producto_id: {
            type: dataTypes.INTEGER,
        },


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
            foreignKey: "usuario_id"
        });
        Comment.belongsTo(models.Product, {
            as: "product",
            foreignKey: "producto_id"
        })

    }
    return Comment;
    
}