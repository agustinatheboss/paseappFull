const Zona = require('../models/zonaModel');
const Proveedor = require('../models/proveedorModel');
const CategoriaServicio = require('../models/categoriaServicioModel');
const Calificacion = require('../models/calificacionModel');
const TipoMascota = require('../models/tipoMascotaModel');
const TipoFrecuencia = require('../models/tipoFrecuenciaModel');
const Servicio = require('../models/servicioModel');
const User = require('../models/userModel');
const EstadoServicio = require('../models/estadoServicioModel');
const Mascota = require('../models/mascotaModel');
const Comentario = require('../models/comentarioModel');
const Pedido = require('../models/pedidoModel');
const EstadoPedido = require('../models/estadoPedidoModel');

const initializeAll = async (req, res) => {
    try {
        // Clear collections to avoid duplication
        await Zona.deleteMany({});
        await Proveedor.deleteMany({});
        await CategoriaServicio.deleteMany({});
        await TipoMascota.deleteMany({});
        await Calificacion.deleteMany({});
        await TipoFrecuencia.deleteMany({});
        await Servicio.deleteMany({});
        await User.deleteMany({});
        await EstadoServicio.deleteMany({});
        await Mascota.deleteMany({});
        await Comentario.deleteMany({});
        await Pedido.deleteMany({});
        await EstadoPedido.deleteMany({});

        // Inicializar Zonas
        const zonasData = [
            { nombreZona: "Palermo" },
            { nombreZona: "Recoleta" },
            { nombreZona: "Belgrano" },
            { nombreZona: "Villa Urquiza" },
            { nombreZona: "Caballito" },
            { nombreZona: "San Telmo" },
            { nombreZona: "Villa Devoto" },
            { nombreZona: "Almagro" },
            { nombreZona: "Flores" },
            { nombreZona: "Boedo" }
        ];
        const zonas = await Zona.insertMany(zonasData);

        // Inicializar Proveedores
        const proveedoresData = [
            { 
                name: "Lionel", 
                lastname: "Messi", 
                email: "lionel.messi@example.com", 
                phone: "1234567890", 
                password: "Password123",
                profileDescription: "Experto en mantener a tus mascotas activas y felices con entrenamientos inspirados en los mejores jugadores de fútbol del mundo."
            },
            { 
                name: "Diego", 
                lastname: "Maradona", 
                email: "diego.maradona@example.com", 
                phone: "0987654321", 
                password: "Password123",
                profileDescription: "Cuido de tus mascotas con la misma pasión con la que juego al fútbol, asegurándome de que siempre estén felices y bien cuidadas."
            },
            { 
                name: "Gabriela", 
                lastname: "Sabatini", 
                email: "gabriela.sabatini@example.com", 
                phone: "1122334455", 
                password: "Password123",
                profileDescription: "Ofrezco paseos y cuidados energéticos para tus mascotas, inspirado en mi amor por el tenis y la actividad física."
            },
            { 
                name: "Manuel", 
                lastname: "Belgrano", 
                email: "manuel.belgrano@example.com", 
                phone: "5566778899", 
                password: "Password123",
                profileDescription: "Cuido de tus mascotas con dedicación y disciplina, asegurándome de que siempre estén en las mejores condiciones."
            },
            { 
                name: "Eva", 
                lastname: "Perón", 
                email: "eva.peron@example.com", 
                phone: "6677889900", 
                password: "Password123",
                profileDescription: "Me encargo de que tus mascotas reciban el amor y el cuidado que merecen, tal como cuido y apoyo a quienes más lo necesitan."
            },
            { 
                name: "Jorge Luis", 
                lastname: "Borges", 
                email: "jorge.borges@example.com", 
                phone: "7788990011", 
                password: "Password123",
                profileDescription: "Cuido de tus mascotas con atención y cariño, asegurándome de que cada paseo sea una nueva aventura llena de descubrimientos."
            },
            { 
                name: "Julio", 
                lastname: "Cortázar", 
                email: "julio.cortazar@example.com", 
                phone: "8899001122", 
                password: "Password123",
                profileDescription: "Ofrezco cuidados y paseos creativos para tus mascotas, asegurándome de que cada día sea una experiencia mágica y divertida."
            },
            { 
                name: "Mercedes", 
                lastname: "Sosa", 
                email: "mercedes.sosa@example.com", 
                phone: "9900112233", 
                password: "Password123",
                profileDescription: "Cuido de tus mascotas con la misma dedicación y amor que pongo en mi música, asegurándome de que siempre estén felices y tranquilas."
            },
            { 
                name: "Carlos", 
                lastname: "Gardel", 
                email: "carlos.gardel@example.com", 
                phone: "0011223344", 
                password: "Password123",
                profileDescription: "Cuido de tus mascotas con encanto y elegancia, asegurándome de que siempre estén bien cuidadas y entretenidas."
            },
            { 
                name: "Alfonsina", 
                lastname: "Storni", 
                email: "alfonsina.storni@example.com", 
                phone: "2233445566", 
                password: "Password123",
                profileDescription: "Cuido de tus mascotas con sensibilidad y ternura, asegurándome de que siempre reciban el amor y la atención que necesitan."
            },
            { 
                name: "Frida", 
                lastname: "Kahlo", 
                email: "frida.kahlo@example.com", 
                phone: "3334445555", 
                password: "Password123",
                profileDescription: "Cuidaré a tus mascotas con pasión artística y dedicación, asegurándome de que estén siempre felices y llenas de vida."
            },
            { 
                name: "Albert", 
                lastname: "Einstein", 
                email: "albert.einstein@example.com", 
                phone: "4445556666", 
                password: "Password123",
                profileDescription: "Ofrezco cuidados inteligentes y creativos para tus mascotas, asegurándome de que siempre estén estimuladas y felices."
            },
            { 
                name: "Marie", 
                lastname: "Curie", 
                email: "marie.curie@example.com", 
                phone: "5556667777", 
                password: "Password123",
                profileDescription: "Cuidaré de tus mascotas con precisión científica y cuidado, asegurándome de que siempre estén en las mejores condiciones."
            },
            { 
                name: "Leonardo", 
                lastname: "Da Vinci", 
                email: "leonardo.davinci@example.com", 
                phone: "6667778888", 
                password: "Password123",
                profileDescription: "Cuido de tus mascotas con la misma dedicación y creatividad que pongo en mis obras de arte, asegurándome de que siempre estén felices."
            },
            { 
                name: "Nikola", 
                lastname: "Tesla", 
                email: "nikola.tesla@example.com", 
                phone: "7778889999", 
                password: "Password123",
                profileDescription: "Ofrezco cuidados y paseos energéticos para tus mascotas, asegurándome de que siempre estén activas y llenas de vida."
            }
        ];
        
        const proveedores = await Proveedor.insertMany(proveedoresData);

        // Inicializar Categorías de Servicio
        const categoriasServicioData = [
            { nombreCategoria: "Adiestramiento" },
            { nombreCategoria: "Cuidado Doméstico" },
            { nombreCategoria: "Paseos" }
        ];
        const categoriasServicio = await CategoriaServicio.insertMany(categoriasServicioData);

        // Inicializar Tipos de Mascota
        const tiposMascotaData = [
            { nombre: "Perro" },
            { nombre: "Gato" },
            { nombre: "Peces" }
        ];
        const tiposMascota = await TipoMascota.insertMany(tiposMascotaData);

        // Inicializar Mascotas
        const mascotasData = [
            { pets: 'Perro', noPets: 1 },
            { pets: 'Gato', noPets: 2 },
            { pets: 'Peces', noPets: 10 },
            { pets: 'Perro', noPets: 3 },
            { pets: 'Gato', noPets: 1 },
            { pets: 'Peces', noPets: 5 },
            { pets: 'Perro', noPets: 2 },
            { pets: 'Gato', noPets: 4 },
            { pets: 'Peces', noPets: 11},
            { pets: 'Perro', noPets: 2}
        ];
        const mascotas = await Mascota.insertMany(mascotasData);

        // Inicializar Usuarios
        const usuariosData = [
            {
                name: "Cristian",
                lastname: "Castro",
                email: "cristian.castro@example.com",
                password: "Password123",
                address: "Calle Azul 123",
                pets: [mascotas[0],mascotas[1]]
            },
            {
                name: "Miryam Alejandra 'Gilda'",
                lastname: "Bianchi",
                email: "yosoy.gilda@example.com",
                password: "Password123",
                address: "Avenida Siempre Viva 456",
                pets: [mascotas[2],mascotas[3]]
            },
            {
                name: "Verde",
                lastname: "Dias",
                email: "green.day@example.com",
                password: "Password123",
                address: "Boulevard de los Sueños Rotos 789",
                pets: [mascotas[4]]
            },
            {
                name: "Rosalia",
                lastname: "Tobella",
                email: "la.rosalia@example.com",
                password: "Password123",
                address: "Paseo de las Motomamis 101",
                pets: [mascotas[5],mascotas[6]]
            },
            {
                name: "Luis",
                lastname: "Miguel",
                email: "luis.miguel@example.com",
                password: "Password123",
                address: "Calle del Sol 202",
                pets: [mascotas[7],mascotas[8],mascotas[9]]
            },
            
                {
                    "name": "Felina",
                    "lastname": "García",
                    "email": "felina.garcia@example.com",
                    "password": "Password123",
                    "address": "Calle de los Gatos 123",
                    "pets": [
                        {
                            "pets": "Gato",
                            "noPets": 2
                        },
                        {
                            "pets": "Perro",
                            "noPets": 1
                        }
                    ]
                },
                {
                    "name": "Barker",
                    "lastname": "Jones",
                    "email": "barker.jones@example.com",
                    "password": "Password123",
                    "address": "Avenida de los Perros 456",
                    "pets": [
                        {
                            "pets": "Perro",
                            "noPets": 3
                        }
                    ]
                },
                {
                    "name": "Whiskers",
                    "lastname": "Smith",
                    "email": "whiskers.smith@example.com",
                    "password": "Password123",
                    "address": "Boulevard Felino 789",
                    "pets": [
                        {
                            "pets": "Gato",
                            "noPets": 4
                        }
                    ]
                },
                {
                    "name": "Rover",
                    "lastname": "Johnson",
                    "email": "rover.johnson@example.com",
                    "password": "Password123",
                    "address": "Calle Canina 101",
                    "pets": [
                        {
                            "pets": "Perro",
                            "noPets": 2
                        }
                    ]
                },
                {
                    "name": "Paws",
                    "lastname": "Brown",
                    "email": "paws.brown@example.com",
                    "password": "Password123",
                    "address": "Avenida Mascota 202",
                    "pets": [
                        {
                            "pets": "Gato",
                            "noPets": 1
                        },
                        {
                            "pets": "Peces",
                            "noPets": 5
                        }
                    ]
                },
                {
                    "name": "Claws",
                    "lastname": "Davis",
                    "email": "claws.davis@example.com",
                    "password": "Password123",
                    "address": "Paseo Gatuno 303",
                    "pets": [
                        {
                            "pets": "Gato",
                            "noPets": 3
                        }
                    ]
                },
                {
                    "name": "Fido",
                    "lastname": "Martinez",
                    "email": "fido.martinez@example.com",
                    "password": "Password123",
                    "address": "Calle Perruna 404",
                    "pets": [
                        {
                            "pets": "Perro",
                            "noPets": 1
                        },
                        {
                            "pets": "Peces",
                            "noPets": 7
                        }
                    ]
                },
                {
                    "name": "Meow",
                    "lastname": "Lopez",
                    "email": "meow.lopez@example.com",
                    "password": "Password123",
                    "address": "Avenida Gatuna 505",
                    "pets": [
                        {
                            "pets": "Gato",
                            "noPets": 2
                        }
                    ]
                },
                {
                    "name": "Barkley",
                    "lastname": "Wilson",
                    "email": "barkley.wilson@example.com",
                    "password": "Password123",
                    "address": "Boulevard Canino 606",
                    "pets": [
                        {
                            "pets": "Perro",
                            "noPets": 3
                        }
                    ]
                },
                {
                    "name": "Woof",
                    "lastname": "Taylor",
                    "email": "woof.taylor@example.com",
                    "password": "Password123",
                    "address": "Calle Canina 707",
                    "pets": [
                        {
                            "pets": "Perro",
                            "noPets": 2
                        }
                    ]
                }
        ];
        const users = await User.insertMany(usuariosData);
    
        // Inicializar Estados de Servicio
        const estadosServicioData = [
            { tipoEstadoServicio: "ACTIVO" },
            { tipoEstadoServicio: "INACTIVO" }
        ];
        const estadosServicio = await EstadoServicio.insertMany(estadosServicioData);
        
        // Datos de TipoFrecuencia
        const tipoFrecuenciaData = [
            { descripcionFrecuencia: 'Única' },
            { descripcionFrecuencia: 'Diaria' },
            { descripcionFrecuencia: 'Semanal' },
            { descripcionFrecuencia: 'Mensual' }
        ];

        const tiposFrecuencia  = await TipoFrecuencia.insertMany(tipoFrecuenciaData);
        
        const calificacionesData = [
            { numeroCalificacion: 1 },
            { numeroCalificacion: 2 },
            { numeroCalificacion: 3 },
            { numeroCalificacion: 4 },
            { numeroCalificacion: 5 }
        ];

        const calificaciones = await Calificacion.insertMany(calificacionesData);
         
        //iniciailzar comentarios
        const comentariosData = [
            {
                usuario: users[0],
                descripcion: "Muy buen servicio, recomendado.",
                estadoComentario: 'Pendiente',
                calificacion: calificaciones[4]
            },
            {
                usuario: users[1],
                descripcion: "El servicio fue aceptable.",
                estadoComentario: 'ACEPTADO',
                calificacion: calificaciones[3]
            },
            {
                usuario: users[2],
                descripcion: "No estoy satisfecho con el servicio.",
                estadoComentario: 'RECHAZADO',
                calificacion: calificaciones[0]
            },
            {
                usuario: users[3],
                descripcion: "El paseador fue muy puntual y amable.",
                estadoComentario: 'ACEPTADO',
                calificacion: calificaciones[4]
            },
            {
                usuario: users[4],
                descripcion: "Buen servicio, pero puede mejorar.",
                estadoComentario: 'ACEPTADO',
                calificacion: calificaciones[2]
            },
            {
                usuario: users[4],
                descripcion: "Servicio pésimo, no lo recomiendo.",
                estadoComentario: 'RECHAZADO',
                calificacion: calificaciones[0]
            },
            {
                usuario: users[3],
                descripcion: "Excelente servicio, mi perro quedó feliz.",
                estadoComentario: 'ACEPTADO',
                calificacion: calificaciones[4]
            },
            {
                usuario: users[2],
                descripcion: "El paseador llegó tarde.",
                estadoComentario: 'RECHAZADO',
                calificacion: calificaciones[1]
            },
            {
                usuario: users[1],
                descripcion: "Muy profesional y confiable.",
                estadoComentario: 'ACEPTADO',
                calificacion: calificaciones[4]
            }, 
            {
                usuario: users[0],
                descripcion: "No estoy seguro si volveré a contratar.",
                estadoComentario: 'RECHAZADO',
                calificacion: calificaciones[2]
            }
        ];

        const comentarios = await Comentario.insertMany(comentariosData);
    
                // Inicializar Servicios
        const serviciosData = [
            {
                title: "Paseo matutino para perros",
                description: "Se ofrece un paseo matutino para perros en Palermo. A cargo de Lionel Messi, asegurándose de que tu perro corra y juegue tanto como él en un partido.",
                price: 100,
                serviceStatus: estadosServicio[0],
                serviceCategory: categoriasServicio[2],
                petType: tiposMascota[0],
                frequencyType: tiposFrecuencia[1],
                startDate: new Date(),
                endDate: new Date(new Date().setDate(new Date().getDate() + 30)),
                zone: zonas[0], // Palermo
                calification: calificaciones[4],
                petsitter: proveedores[0],
                comments: [comentarios[0], comentarios[1]]
            },
            {
                title: "Paseo por los jardines",
                description: "Este paseo por los jardines de Recoleta es ofrecido por Diego Maradona. Tu mascota estará tan feliz como él levantando la Copa del Mundo.",
                price: 120,
                serviceStatus: estadosServicio[0],
                serviceCategory: categoriasServicio[2],
                petType: tiposMascota[0],
                frequencyType: tiposFrecuencia[1],
                startDate: new Date(),
                endDate: new Date(new Date().setDate(new Date().getDate() + 60)),
                zone: zonas[1], // Recoleta
                calification: calificaciones[3],
                petsitter: proveedores[1],
                comments: [comentarios[2]]
            },
            {
                title: "Adiestramiento básico y avanzado",
                description: "Se ofrece adiestramiento básico y avanzado para perros en Belgrano. Este servicio, a cargo de Gabriela Sabatini, asegura que tu perro sea tan disciplinado como un tenista en Wimbledon.",
                price: 150,
                serviceStatus: estadosServicio[0],
                serviceCategory: categoriasServicio[0],
                petType: tiposMascota[0],
                frequencyType: tiposFrecuencia[2],
                startDate: new Date(),
                endDate: new Date(new Date().setDate(new Date().getDate() + 90)),
                zone: zonas[2], // Belgrano
                calification: calificaciones[4],
                petsitter: proveedores[2],
                comments: [comentarios[3], comentarios[4]]
            },
            {
                title: "Cuidado de mascotas en el hogar",
                description: "Este servicio ofrece cuidado de mascotas en tu hogar en Villa Urquiza. A cargo de Manuel Belgrano, con la misma dedicación que puso en la independencia.",
                price: 200,
                serviceStatus: estadosServicio[0],
                serviceCategory: categoriasServicio[1],
                petType: tiposMascota[1],
                frequencyType: tiposFrecuencia[0],
                startDate: new Date(),
                endDate: new Date(new Date().setDate(new Date().getDate() + 10)),
                zone: zonas[3], // Villa Urquiza
                calification: calificaciones[3],
                petsitter: proveedores[3],
                comments: [comentarios[5]]
            },
            {
                title: "Paseo vespertino para gatos",
                description: "Se ofrece un paseo vespertino para gatos en Caballito. Eva Perón asegura que tus mascotas reciban el amor y cuidado que merecen.",
                price: 130,
                serviceStatus: estadosServicio[0],
                serviceCategory: categoriasServicio[2],
                petType: tiposMascota[1],
                frequencyType: tiposFrecuencia[1],
                startDate: new Date(),
                endDate: new Date(new Date().setDate(new Date().getDate() + 20)),
                zone: zonas[4], // Caballito
                calification: calificaciones[2],
                petsitter: proveedores[4],
                comments: [comentarios[6], comentarios[7], comentarios[8]]
            },
            {
                title: "Cuidado doméstico para peces",
                description: "Se ofrece cuidado doméstico para peces en San Telmo. Jorge Luis Borges asegura que cada paseo sea una nueva aventura llena de descubrimientos.",
                price: 180,
                serviceStatus: estadosServicio[0],
                serviceCategory: categoriasServicio[1],
                petType: tiposMascota[2],
                frequencyType: tiposFrecuencia[2],
                startDate: new Date(),
                endDate: new Date(new Date().setDate(new Date().getDate() + 45)),
                zone: zonas[5], // San Telmo
                calification: calificaciones[1],
                petsitter: proveedores[5],
                comments: [comentarios[9]]
            },
            {
                title: "Paseo creativo para perros",
                description: "Este servicio ofrece paseos creativos para perros en Villa Devoto. Julio Cortázar asegura que cada día sea una experiencia mágica y divertida.",
                price: 140,
                serviceStatus: estadosServicio[0],
                serviceCategory: categoriasServicio[2],
                petType: tiposMascota[0],
                frequencyType: tiposFrecuencia[0],
                startDate: new Date(),
                endDate: new Date(new Date().setDate(new Date().getDate() + 50)),
                zone: zonas[6], // Villa Devoto
                calification: calificaciones[3],
                petsitter: proveedores[6],
                comments: []
            },
            {
                title: "Cuidado musical para gatos",
                description: "Se ofrece cuidado musical para gatos en Almagro. Mercedes Sosa asegura que tus mascotas estén felices y tranquilas.",
                price: 110,
                serviceStatus: estadosServicio[0],
                serviceCategory: categoriasServicio[1],
                petType: tiposMascota[1],
                frequencyType: tiposFrecuencia[1],
                startDate: new Date(),
                endDate: new Date(new Date().setDate(new Date().getDate() + 35)),
                zone: zonas[7], // Almagro
                calification: calificaciones[2],
                petsitter: proveedores[7],
                comments: []
            },
            {
                title: "Paseo elegante para perros",
                description: "Este servicio ofrece paseos elegantes para perros en Flores. Carlos Gardel asegura que tu mascota esté bien cuidada y entretenida.",
                price: 160,
                serviceStatus: estadosServicio[0],
                serviceCategory: categoriasServicio[2],
                petType: tiposMascota[0],
                frequencyType: tiposFrecuencia[3],
                startDate: new Date(),
                endDate: new Date(new Date().setDate(new Date().getDate() + 40)),
                zone: zonas[8], // Flores
                calification: calificaciones[4],
                petsitter: proveedores[8],
                comments: []
            },
            {
                title: "Cuidado sensible para gatos",
                description: "Se ofrece cuidado sensible para gatos en Boedo. Alfonsina Storni asegura que tus mascotas reciban el amor y la atención que necesitan.",
                price: 150,
                serviceStatus: estadosServicio[0],
                serviceCategory: categoriasServicio[1],
                petType: tiposMascota[1],
                frequencyType: tiposFrecuencia[2],
                startDate: new Date(),
                endDate: new Date(new Date().setDate(new Date().getDate() + 25)),
                zone: zonas[9], // Boedo
                calification: calificaciones[4],
                petsitter: proveedores[9],
                comments: []
            },
            {
                title: "Paseo artístico para perros",
                description: "Este servicio ofrece paseos artísticos para perros en Palermo. Frida Kahlo asegura que tus mascotas estén felices y llenas de vida.",
                price: 170,
                serviceStatus: estadosServicio[0],
                serviceCategory: categoriasServicio[2],
                petType: tiposMascota[0],
                frequencyType: tiposFrecuencia[1],
                startDate: new Date(),
                endDate: new Date(new Date().setDate(new Date().getDate() + 30)),
                zone: zonas[0], // Palermo
                calification: calificaciones[3],
                petsitter: proveedores[10],
                comments: []
            },
            {
                title: "Cuidado creativo para peces",
                description: "Se ofrece cuidado creativo para peces en Recoleta. Albert Einstein asegura que tus mascotas estén siempre estimuladas y felices.",
                price: 190,
                serviceStatus: estadosServicio[0],
                serviceCategory: categoriasServicio[1],
                petType: tiposMascota[2],
                frequencyType: tiposFrecuencia[3],
                startDate: new Date(),
                endDate: new Date(new Date().setDate(new Date().getDate() + 30)),
                zone: zonas[1], // Recoleta
                calification: calificaciones[2],
                petsitter: proveedores[11],
                comments: []
            },
            {
                title: "Cuidado científico para gatos",
                description: "Este servicio ofrece cuidado científico para gatos en Belgrano. Marie Curie asegura que tus mascotas estén en las mejores condiciones.",
                price: 200,
                serviceStatus: estadosServicio[0],
                serviceCategory: categoriasServicio[1],
                petType: tiposMascota[1],
                frequencyType: tiposFrecuencia[2],
                startDate: new Date(),
                endDate: new Date(new Date().setDate(new Date().getDate() + 45)),
                zone: zonas[2], // Belgrano
                calification: calificaciones[4],
                petsitter: proveedores[12],
                comments: []
            },
            {
                title: "Paseo creativo para perros",
                description: "Se ofrece paseo creativo para perros en Villa Urquiza. Leonardo Da Vinci asegura que tus mascotas estén felices y llenas de vida.",
                price: 180,
                serviceStatus: estadosServicio[0],
                serviceCategory: categoriasServicio[2],
                petType: tiposMascota[0],
                frequencyType: tiposFrecuencia[3],
                startDate: new Date(),
                endDate: new Date(new Date().setDate(new Date().getDate() + 50)),
                zone: zonas[3], // Villa Urquiza
                calification: calificaciones[3],
                petsitter: proveedores[13],
                comments: []
            },
            {
                title: "Cuidado energético para gatos",
                description: "Este servicio ofrece cuidado energético para gatos en Caballito. Nikola Tesla asegura que tus mascotas estén siempre activas y llenas de vida.",
                price: 170,
                serviceStatus: estadosServicio[0],
                serviceCategory: categoriasServicio[1],
                petType: tiposMascota[1],
                frequencyType: tiposFrecuencia[2],
                startDate: new Date(),
                endDate: new Date(new Date().setDate(new Date().getDate() + 40)),
                zone: zonas[4], // Caballito
                calification: calificaciones[4],
                petsitter: proveedores[14],
                comments: []
            }
        ];

        const servicios = await Servicio.insertMany(serviciosData);

         // Inserta los datos necesarios antes de los pedidos
         await EstadoPedido.insertMany([
            { tipoEstadoPedido: 'SOLICITADO' },
            { tipoEstadoPedido: 'ACEPTADO' },
            { tipoEstadoPedido: 'RECHAZADO' },
            { tipoEstadoPedido: 'FINALIZADO' }
        ]);

        const estadosPedido = await EstadoPedido.find();
        const usuarioAcceso={
           
            "name": "Jorge",
            "lastname": "Paseos",
            "email": "paseador33@mail.com",
            "phone": "1123443455",
            "address": "Av y Mi Calle 1977",
            "password": "$2b$10$zZs9tcmHDDDvl7hiBm.VduOIDzNtnvog4vHCtbEi8z2p7RAGRepHO",
            "profileDescription": "Soy un gran paseador que le gusta ir y dar paseos por toda la ciudad",
            "__v": 0
          };
        // Inicializa los pedidos
        const pedidosData = [
            {
                estadoPedido: estadosPedido[0], // Asumiendo que es 'SOLICITADO'
                usuario: usuarioAcceso,
                servicio: servicios[0],
                proveedor: proveedores[0],
                horarioContacto: '09:00 - 12:00',
                motivo: 'Necesito paseador para la mañana.'
            },
            {
                estadoPedido: estadosPedido[1], // Asumiendo que es 'ACEPTADO'
                usuario: users[1],
                servicio: servicios[1],
                proveedor: proveedores[1],
                horarioContacto: '14:00 - 17:00',
                motivo: 'Paseo por la tarde.'
            },
            {
                estadoPedido: estadosPedido[2], // Asumiendo que es 'RECHAZADO'
                usuario: users[2],
                servicio: servicios[2],
                proveedor: proveedores[2],
                horarioContacto: '17:00 - 20:00',
                motivo: 'Cuidado de mascotas por la noche.'
            },
            {
                estadoPedido: estadosPedido[3], // Asumiendo que es 'FINALIZADO'
                usuario: users[3],
                servicio: servicios[3],
                proveedor: proveedores[3],
                horarioContacto: '10:00 - 12:00',
                motivo: 'Paseo matutino.'
            },
            {
                estadoPedido: estadosPedido[0], // Asumiendo que es 'SOLICITADO'
                usuario: users[4],
                servicio: servicios[4],
                proveedor: proveedores[4],
                horarioContacto: '16:00 - 18:00',
                motivo: 'Paseo vespertino.'
            },
    
            {
                "estadoPedido": {
                    "tipoEstadoPedido": "SOLICITADO"
                },
                "usuario": {
                    "name": "Felina",
                    "lastname": "García",
                    "email": "felina.garcia@example.com",
                    "password": "Password123",
                    "address": "Calle de los Gatos 123",
                    "pets": [
                        {
                            "pets": "Gato",
                            "noPets": 2
                        },
                        {
                            "pets": "Perro",
                            "noPets": 1
                        }
                    ]
                },
                "servicio": {
                    "title": "Servicio 1",
                    "description": "Este servicio ofrece un paseo tranquilo y seguro por la zona, ideal para perros y gatos.",
                    "price": 100,
                    "serviceStatus": {
                        "tipoEstadoServicio": "ACTIVO"
                    },
                    "serviceCategory": {
                        "nombreCategoria": "Paseos"
                    },
                    "petType": {
                        "nombre": "Perro"
                    },
                    "frequencyType": {
                        "descripcionFrecuencia": "Diaria"
                    },
                    "startDate": "2024-06-28T04:38:54.384Z",
                    "endDate": "2024-07-28T04:38:54.384Z",
                    "zone": {
                        "nombreZona": "Palermo"
                    },
                    "calification": {
                        "numeroCalificacion": 5
                    },
                    "petsitter": {
                        "name": "Jorge",
                        "lastname": "Paseos",
                        "email": "paseador33@mail.com",
                        "phone": "1123443455",
                        "address": "Av y Mi Calle 1977",
                        "password": "$2b$10$zZs9tcmHDDDvl7hiBm.VduOIDzNtnvog4vHCtbEi8z2p7RAGRepHO",
                        "profileDescription": "Soy un gran paseador que le gusta ir y dar paseos por toda la ciudad"
                    }
                },
                "proveedor": proveedores[3],
                "horarioContacto": "09:00 - 12:00",
                "motivo": "Necesito paseador para la mañana."
            },
            {
                "estadoPedido": {
                    "tipoEstadoPedido": "SOLICITADO"
                },
                "usuario": {
                    "name": "Barker",
                    "lastname": "Jones",
                    "email": "barker.jones@example.com",
                    "password": "Password123",
                    "address": "Avenida de los Perros 456",
                    "pets": [
                        {
                            "pets": "Perro",
                            "noPets": 3
                        }
                    ]
                },
                "servicio": {
                    "title": "Servicio 2",
                    "description": "Este paseo está pensado para perros activos que necesitan quemar mucha energía.",
                    "price": 200,
                    "serviceStatus": {
                        "tipoEstadoServicio": "ACTIVO"
                    },
                    "serviceCategory": {
                        "nombreCategoria": "Adiestramiento"
                    },
                    "petType": {
                        "nombre": "Perro"
                    },
                    "frequencyType": {
                        "descripcionFrecuencia": "Semanal"
                    },
                    "startDate": "2024-06-28T04:38:54.384Z",
                    "endDate": "2024-07-28T04:38:54.384Z",
                    "zone": {
                        "nombreZona": "Belgrano"
                    },
                    "calification": {
                        "numeroCalificacion": 4
                    },
                    "petsitter": {
                        "name": "Diego",
                        "lastname": "Maradona",
                        "email": "diego.maradona@example.com",
                        "phone": "0987654321",
                        "password": "Password123",
                        "profileDescription": "Cuido de tus mascotas con la misma pasión con la que juego al fútbol, asegurándome de que siempre estén felices y bien cuidadas."
                    }
                },
                "proveedor": {
                    "name": "Diego",
                    "lastname": "Maradona",
                    "email": "diego.maradona@example.com",
                    "phone": "0987654321",
                    "address": "Calle del Fútbol 10",
                    "password": "Password123",
                    "profileDescription": "Cuido de tus mascotas con la misma pasión con la que juego al fútbol, asegurándome de que siempre estén felices y bien cuidadas."
                },
                "horarioContacto": "10:00 - 13:00",
                "motivo": "Paseo de alta energía para perros."
            },
            {
                "estadoPedido": {
                    "tipoEstadoPedido": "ACEPTADO"
                },
                "usuario": {
                    "name": "Whiskers",
                    "lastname": "Smith",
                    "email": "whiskers.smith@example.com",
                    "password": "Password123",
                    "address": "Boulevard Felino 789",
                    "pets": [
                        {
                            "pets": "Gato",
                            "noPets": 4
                        }
                    ]
                },
                "servicio": {
                    "title": "Servicio 3",
                    "description": "Un servicio especial para gatos que incluye cuidados y juegos interactivos.",
                    "price": 150,
                    "serviceStatus": {
                        "tipoEstadoServicio": "ACTIVO"
                    },
                    "serviceCategory": {
                        "nombreCategoria": "Cuidado Doméstico"
                    },
                    "petType": {
                        "nombre": "Gato"
                    },
                    "frequencyType": {
                        "descripcionFrecuencia": "Diaria"
                    },
                    "startDate": "2024-06-28T04:38:54.384Z",
                    "endDate": "2024-07-28T04:38:54.384Z",
                    "zone": {
                        "nombreZona": "Recoleta"
                    },
                    "calification": {
                        "numeroCalificacion": 5
                    },
                    "petsitter": {
                        "name": "Felina",
                        "lastname": "García",
                        "email": "felina.garcia@example.com",
                        "phone": "1234567890",
                        "password": "Password123",
                        "profileDescription": "Experta en cuidados felinos, me aseguro de que cada gato esté feliz y bien cuidado."
                    }
                },
                "proveedor": proveedores[0],
                "horarioContacto": "11:00 - 14:00",
                "motivo": "Cuidado especial para gatos."
            },
                {
                    "estadoPedido": {
                        "tipoEstadoPedido": "SOLICITADO"
                    },
                    "usuario": users[0],
                    "servicio": servicios[0],
                    "proveedor": proveedores[0],
                    "horarioContacto": "10:00 - 12:00",
                    "motivo": "Necesito paseador para mi perro en la mañana."
                },
                {
                    "estadoPedido": {
                        "tipoEstadoPedido": "ACEPTADO"
                    },
                    "usuario": users[1],
                    "servicio": servicios[1],
                    "proveedor": proveedores[1],
                    "horarioContacto": "14:00 - 17:00",
                    "motivo": "Paseo vespertino para mi gato."
                },
                {
                    "estadoPedido": {
                        "tipoEstadoPedido": "RECHAZADO"
                    },
                    "usuario": users[2],
                    "servicio": servicios[2],
                    "proveedor": proveedores[2],
                    "horarioContacto": "17:00 - 20:00",
                    "motivo": "Cuidado nocturno para mis peces."
                },
                {
                    "estadoPedido": {
                        "tipoEstadoPedido": "FINALIZADO"
                    },
                    "usuario": users[3],
                    "servicio": servicios[3],
                    "proveedor": proveedores[3],
                    "horarioContacto": "09:00 - 11:00",
                    "motivo": "Paseo matutino para mi perro."
                },
                {
                    "estadoPedido": {
                        "tipoEstadoPedido": "SOLICITADO"
                    },
                    "usuario": users[4],
                    "servicio": servicios[4],
                    "proveedor": proveedores[4],
                    "horarioContacto": "16:00 - 18:00",
                    "motivo": "Paseo vespertino para mi gato."
                },
                    {
                        "estadoPedido": {
                            "tipoEstadoPedido": "SOLICITADO"
                        },
                        "usuario": users[0],
                        "servicio": servicios[0],
                        "proveedor": proveedores[0],
                        "horarioContacto": "10:00 - 12:00",
                        "motivo": "Necesito paseador para mi perro en la mañana."
                    },
                    {
                        "estadoPedido": {
                            "tipoEstadoPedido": "ACEPTADO"
                        },
                        "usuario": users[1],
                        "servicio": servicios[1],
                        "proveedor": proveedores[1],
                        "horarioContacto": "14:00 - 17:00",
                        "motivo": "Paseo vespertino para mi gato."
                    },
                    {
                        "estadoPedido": {
                            "tipoEstadoPedido": "RECHAZADO"
                        },
                        "usuario": users[2],
                        "servicio": servicios[2],
                        "proveedor": proveedores[2],
                        "horarioContacto": "17:00 - 20:00",
                        "motivo": "Cuidado nocturno para mis peces."
                    },
                    {
                        "estadoPedido": {
                            "tipoEstadoPedido": "FINALIZADO"
                        },
                        "usuario": users[3],
                        "servicio": servicios[3],
                        "proveedor": proveedores[3],
                        "horarioContacto": "09:00 - 11:00",
                        "motivo": "Paseo matutino para mi perro."
                    },
                    {
                        "estadoPedido": {
                            "tipoEstadoPedido": "SOLICITADO"
                        },
                        "usuario": users[4],
                        "servicio": servicios[4],
                        "proveedor": proveedores[4],
                        "horarioContacto": "16:00 - 18:00",
                        "motivo": "Paseo vespertino para mi gato."
                    }                
        ];

        await Pedido.insertMany(pedidosData);
        
        res.status(201).json({ message: "All entities have been initialized" });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

module.exports = {
    initializeAll
};
