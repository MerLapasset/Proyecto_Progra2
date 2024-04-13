const informacion= 
    //hice solo un usuario para que podamos empezarr, el proyecto pide que hagamos uno solo. 
   
     {
        usuario: {
            id: 1, //esta bien? 
            numbreUs: "juana@gmail.com",
            nacimiento: "2005/04/24",
            fotoPerfil: './public/images/users/default-image.png',
            contrasenia: 234567,
            dni: 34567234
         },

        productos: [
            { //libro 1 (producto 1)
                id: 1,
                nombreProducto:"Crimen y Castigo",
                imagen: "...",
                descripcion: "El libro narra tres historias que están superpuestas y entrelazadas en varios puntos. La trama principal es la historia del asesinato cometido por Raskólnikov y su arrepentimiento. Como tramas secundarias, aparecen la historia de vida y dolor de la familia Marmeladov y la vida de Dunia, la hermana de Raskólnikov.",

                comentarios: 
                [
                    {
                        id: 2,
                        nombreUsuario: "juanPerez",
                        comentario: "Obra maestra de Dostoievsky",
                        imagenPerfil: "./public/images/users/default-image.png" 
                    },
                    {
                        id: 3,
                        nombreUsuario: "lucianaGomez",
                        comentario: "Me encanto, recomiendo este libro a todo el mundo",
                        imagenPerfil: "./public/images/users/default-image.png "

                    },
                    {
                        id: 4,
                        nombreUsuario: "markelFernandez",
                        comentario: "Uno de los grandes autores de la literatura rusa",
                        imagenPerfil: "./public/images/users/default-image.png "
                    }
                ]


            },
            { //libro 2 
                id: 10,
                nombreProducto: "Los Miserables",
                imagen: "imagen-url-1",
                descripcion: "Una novela épica que sigue las vidas de varios personajes, especialmente el exconvicto Jean Valjean y el inspector de policía Javert, quienes se cruzan repetidamente en la Francia del siglo XIX.",
                comentarios: 
                [
                    {
                        id: 5,
                        nombreUsuario: "anaMartinez",
                        comentario: "Una obra clásica que todos deberían leer",
                        imagenPerfil: "./public/images/users/default-image.png "
                    },
                    {
                        id: 6,
                        nombreUsuario: "carlosGutierrez",
                        comentario: "Me emocionó hasta las lágrimas",
                        imagenPerfil: "./public/images/users/default-image.png "
                    },
                    {
                        id: 7,
                        nombreUsuario: "lauraLopez",
                        comentario: "Victor Hugo es simplemente brillante",
                        imagenPerfil: "./public/images/users/default-image.png"
                    }
                ]
            },
            { //libro 3 
                id: 11,
                nombreProducto: "Don Quijote de la Mancha",
                imagen: "imagen-url-5",
                descripcion: "La obra narra las aventuras de un hidalgo enloquecido por la lectura de libros de caballerías, quien decide hacerse caballero andante y partir en busca de aventuras.",
                comentarios: 
                [
                    {
                        id: 8,
                        nombreUsuario: "robertoSanchez",
                        comentario: "Una de las mejores obras de la literatura española",
                        imagenPerfil: "./public/images/users/default-image.png "
                    },
                    {
                        id: 9,
                        nombreUsuario: "mariaGonzalez",
                        comentario: "Una lectura indispensable",
                        imagenPerfil: "./public/images/users/default-image.png "
                    },
                    {
                        id: 10,
                        nombreUsuario: "jorgeRuiz",
                        comentario: "Cervantes nos regaló una obra maestra",
                        imagenPerfil: "./public/images/users/default-image.png "
                    }
                ]   
            },
            {
                id: 20,
                nombreProducto: "Orgullo y Prejuicio",
                imagen: "imagen-url-9",
                descripcion: "Una historia de amor y prejuicios en la Inglaterra del siglo XIX, donde Elizabeth Bennet debe lidiar con sus propios prejuicios mientras navega por el mundo de los matrimonios arreglados.",
                comentarios: 
                [
                    {
                        id: 11,
                        nombreUsuario: "saraRodriguez",
                        comentario: "Jane Austen es una autora increíble",
                        imagenPerfil: "./public/images/users/default-image.png "
                    },
                    {
                        id: 12,
                        nombreUsuario: "manuelGarcia",
                        comentario: "Una novela clásica que nunca pasa de moda",
                        imagenPerfil: "./public/images/users/default-image.png "
                    },
                    {
                        id: 33,
                        nombreUsuario: "julioGarcia",
                        comentario: "Tanto el libro como la pelicula son inolvidables",
                        imagenPerfil: "./public/images/users/default-image.png "

                    }
                ]
   
            },
            {
                id: 21,
                nombreProducto: "1984",
                imagen: "imagen-url-12",
                descripcion: "Una novela distópica que presenta un mundo bajo un régimen totalitario, donde la libertad individual está severamente restringida y la vigilancia es omnipresente.",
                comentarios:
                [
                    {
                        id: 13,
                        nombreUsuario: "luisaFernandez",
                        comentario: "Un libro que te hace reflexionar sobre la sociedad",
                        imagenPerfil: "./public/images/users/default-image.png"
                    },
                    {
                        id: 34,
                        nombreUsuario: "marianaLopez",
                        comentario: "Un clasico imperdible",
                        imagenPerfil: "./public/images/users/default-image.png "
                    },
                    {
                        id: 31,
                        nombreUsuario: "bautistaRodriguez",
                        comentario: "Cada dia el mundo se parece mas a esta anti utopia",
                        imagenPerfil: "./public/images/users/default-image.png "
                    }
                ]


            },
            {
                id: 22,
                nombreProducto: "El Principito",
                imagen: "imagen-url-14",
                descripcion: "Un cuento poético que narra la historia de un joven príncipe que viaja de planeta en planeta, conociendo a diversos personajes que representan diferentes aspectos de la vida adulta.",
                comentarios: 
                [
                    {
                        id: 17,
                        nombreUsuario: "lauraRodriguez",
                        comentario: "Una obra maestra que encanta tanto a niños como a adultos",
                        imagenPerfil: "./public/images/users/default-image.png "
                    },
                    {
                        id: 18,
                        nombreUsuario: "marcosFernandez",
                        comentario: "Cada vez que leo El Principito, descubro algo nuevo",
                        imagenPerfil: "./public/images/users/default-image.png "
                    },
                    {
                        id: 19,
                        nombreUsuario: "sofiaGutierrez",
                        comentario: "Una historia simple pero profundamente conmovedora",
                        imagenPerfil: "./public/images/users/default-image.png "
                    }
                ]

            },
            {
                id: 30,
                nombreProducto: "La Sombra del Viento",
                imagen: "imagen-url-19",
                descripcion: "Una novela misteriosa que sigue la búsqueda de un joven llamado Daniel Sempere para descubrir la verdad detrás de un libro maldito llamado 'La Sombra del Viento'.",
                comentarios: 
                [
                    {
                        id: 21,
                        nombreUsuario: "luisGonzalez",
                        comentario: "Me mantuvo en vilo de principio a fin",
                        imagenPerfil: "./public/images/users/default-image.png "
                    },
                    {
                        id: 22,
                        nombreUsuario: "mariaLopez",
                        comentario: "Un viaje emocionante por las calles de Barcelona",
                        imagenPerfil: "./public/images/users/default-image.png "
                    },
                    {
                        id: 23,
                        nombreUsuario: "javierRuiz",
                        comentario: "Una obra maestra de la literatura contemporánea",
                        imagenPerfil: "./public/images/users/default-image.png "
                    }
                ]



            },
            {
                id: 31,
                nombreProducto: "Harry Potter y la Piedra Filosofal",
                imagen: "imagen-url-23",
                descripcion: "El primer libro de la serie Harry Potter, que narra las aventuras del joven mago Harry Potter mientras descubre su verdadera identidad en el mundo mágico.",
                comentarios: 
                [
                    {
                        id: 24,
                        nombreUsuario: "andreaMartinez",
                        comentario: "Una saga que marcó mi infancia",
                        imagenPerfil: "./public/images/users/default-image.png"
                    },
                    {
                        id: 25,
                        nombreUsuario: "diegoGomez",
                        comentario: "JK Rowling creó un mundo mágico fascinante",
                        imagenPerfil: "./public/images/users/default-image.png "
                    },
                    {
                        id: 26,
                        nombreUsuario: "sofiaSanchez",
                        comentario: "Me encantaría vivir en Hogwarts",
                        imagenPerfil: "./public/images/users/default-image.png "
                    }
                ]

            },
            {
                id: 32,
                nombreProducto: "El Alquimista",
                imagen: "imagen-url-27",
                descripcion: "Una historia inspiradora sobre un joven pastor que emprende un viaje en busca de un tesoro y descubre el verdadero significado de la vida en el camino.",
                comentarios: 
                [
                    {
                        id: 27,
                        nombreUsuario: "juanFernandez",
                        comentario: "Un libro que te hace reflexionar sobre tus sueños",
                        imagenPerfil: "./public/images/users/default-image.png "
                    },
                    {
                        id: 28,
                        nombreUsuario: "lauraGutierrez",
                        comentario: "Paulo Coelho tiene una forma única de contar historias",
                        imagenPerfil: "./public/images/users/default-image.png "
                    },
                    {
                        id: 29,
                        nombreUsuario: "carlosPerez",
                        comentario: "Una lectura que te llena de esperanza",
                        imagenPerfil: "./public/images/users/default-image.png "
                    }
                ]

            },
            {
                id: 33,
                nombreProducto: "Las Crónicas de Narnia: El León, la Bruja y el Armario",
                imagen: "imagen-url-31",
                descripcion: "El primer libro en la serie de fantasía Las Crónicas de Narnia, que sigue a cuatro niños mientras descubren un mundo mágico detrás de un armario.",
                comentarios: 
                [
                    {
                        id: 30,
                        nombreUsuario: "anaFernandez",
                        comentario: "Una historia que te transporta a otro mundo",
                        imagenPerfil: "./public/images/users/default-image.png "
                    },
                    {
                        id: 31,
                        nombreUsuario: "lucasSanchez",
                        comentario: "CS Lewis creó un universo fascinante",
                        imagenPerfil: "./public/images/users/default-image.png "
                    },
                    {
                        id: 32,
                        nombreUsuario: "mariaRodriguez",
                        comentario: "Cada libro es una aventura emocionante",
                        imagenPerfil: "./public/images/users/default-image.png "
                    }
                ]

            } 
        ]
    }


module.exports= informacion
    