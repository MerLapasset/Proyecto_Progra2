Falta
1. Hacer el ccs de foto de perfil, para que mer deje de molestar
2. Punto 11:
- El formulario debe mostrar los datos originales del usuario. El campo para modificar la contraseña no mostrará datos originales. Deberás implementar los controles necesarios para que la contraseña cambie únicamente en caso de que el usuario complete el campo.
- Los campos del formulario deberán tener las mismas reglas de validación que usaste para el formulario de registro y mostrar los avisos correspondientes en pantalla.
- Si van a permitir cambiar la foto de perfil asegúrense de que el nombre que elijan corresponda con una foto que tengan en la carpeta /public.



body("usuarioFecha")
        .notEmpty()
        .withMessage("Debes completar con la fecha de nacimiento"),
    
    body("usuarioDni")
        .notEmpty()
        .withMessage("Debes completar tu dni"),
    
    body("usuarioFoto")
        .notEmpty()
        .withMessage("Debes completar tu foto"),