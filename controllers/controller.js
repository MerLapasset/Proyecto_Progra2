const info= require ('../db/datos')

const controllers= {
    index: function (req,res) {
        return res.render ('index') 
    },
   
    registro: function (req,res) {
        return res.render ('register')
   
    },
    editarPerfil: function (req,res) {
        return res.render ('profile-edit')
   
        
    }

}

module.exports= controllers