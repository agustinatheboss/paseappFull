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
            { name: "Lionel", lastname: "Messi", email: "lionel.messi@example.com", phone: "1234567890", password: "Password123" },
            { name: "Diego", lastname: "Maradona", email: "diego.maradona@example.com", phone: "0987654321", password: "Password123" },
            { name: "Gabriela", lastname: "Sabatini", email: "gabriela.sabatini@example.com", phone: "1122334455", password: "Password123" },
            { name: "Manuel", lastname: "Belgrano", email: "manuel.belgrano@example.com", phone: "5566778899", password: "Password123" },
            { name: "Eva", lastname: "Perón", email: "eva.peron@example.com", phone: "6677889900", password: "Password123" },
            { name: "Jorge Luis", lastname: "Borges", email: "jorge.borges@example.com", phone: "7788990011", password: "Password123" },
            { name: "Julio", lastname: "Cortázar", email: "julio.cortazar@example.com", phone: "8899001122", password: "Password123" },
            { name: "Mercedes", lastname: "Sosa", email: "mercedes.sosa@example.com", phone: "9900112233", password: "Password123" },
            { name: "Carlos", lastname: "Gardel", email: "carlos.gardel@example.com", phone: "0011223344", password: "Password123" },
            { name: "Alfonsina", lastname: "Storni", email: "alfonsina.storni@example.com", phone: "2233445566", password: "Password123" }
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

        //inicializa mascotas
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
                name: "YoSoy",
                lastname: "Gilda",
                email: "yosoy.gilda@example.com",
                password: "Password123",
                address: "Avenida Siempre Viva 456",
                pets: [mascotas[2],mascotas[3]]
            },
            {
                name: "Green",
                lastname: "Day",
                email: "green.day@example.com",
                password: "Password123",
                address: "Boulevard de los Sueños Rotos 789",
                pets: [mascotas[4]]
            },
            {
                name: "La",
                lastname: "Rosalia",
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
            }
        ];
        const users = await User.insertMany(usuariosData);
    
        // Inicializar Estados de Servicio
        const estadosServicioData = [
            { tipoEstadoServicio: "Publicado" },
            { tipoEstadoServicio: "NoPublicado" }
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
                estadoComentario: 'Aceptado',
                calificacion: calificaciones[4]
            },
            {
                usuario: users[1],
                descripcion: "El servicio fue aceptable.",
                estadoComentario: 'Aceptado',
                calificacion: calificaciones[3]
            },
            {
                usuario: users[2],
                descripcion: "No estoy satisfecho con el servicio.",
                estadoComentario: 'Rechazado',
                calificacion: calificaciones[0]
            },
            {
                usuario: users[3],
                descripcion: "El paseador fue muy puntual y amable.",
                estadoComentario: 'Aceptado',
                calificacion: calificaciones[4]
            },
            {
                usuario: users[4],
                descripcion: "Buen servicio, pero puede mejorar.",
                estadoComentario: 'Aceptado',
                calificacion: calificaciones[2]
            },
            {
                usuario: users[4],
                descripcion: "Servicio pésimo, no lo recomiendo.",
                estadoComentario: 'Rechazado',
                calificacion: calificaciones[0]
            },
            {
                usuario: users[3],
                descripcion: "Excelente servicio, mi perro quedó feliz.",
                estadoComentario: 'Aceptado',
                calificacion: calificaciones[4]
            },
            {
                usuario: users[2],
                descripcion: "El paseador llegó tarde.",
                estadoComentario: 'Rechazado',
                calificacion: calificaciones[1]
            },
            {
                usuario: users[1],
                descripcion: "Muy profesional y confiable.",
                estadoComentario: 'Aceptado',
                calificacion: calificaciones[4]
            },
            {
                usuario: users[0],
                descripcion: "No estoy seguro si volveré a contratar.",
                estadoComentario: 'Rechazado',
                calificacion: calificaciones[2]
            }
        ];

        const comentarios = await Comentario.insertMany(comentariosData);
        
    

        // Inicializar Servicios
        const serviciosData = [
            {
                serviceStatus: estadosServicio[0],
                serviceCategory: categoriasServicio[0],
                petType: tiposMascota[0],
                frequencyType: tiposFrecuencia[0],
                startDate: new Date(),
                endDate: new Date(new Date().setDate(new Date().getDate() + 30)),
                zone: zonas[0],
                qualification: calificaciones[0],
                provider: proveedores[0],
                comment: [comentarios[0], comentarios[1]]
            },
            {
                serviceStatus: estadosServicio[1],
                serviceCategory: categoriasServicio[1],
                petType: tiposMascota[1],
                frequencyType: tiposFrecuencia[1],
                startDate: new Date(),
                endDate: new Date(new Date().setDate(new Date().getDate() + 60)),
                zone: zonas[1],
                qualification: calificaciones[2],
                provider: proveedores[1],
                comment: [comentarios[2]]
            },
            {
                serviceStatus: estadosServicio[0],
                serviceCategory: categoriasServicio[2],
                petType: tiposMascota[2],
                frequencyType: tiposFrecuencia[2],
                startDate: new Date(),
                endDate: new Date(new Date().setDate(new Date().getDate() + 90)),
                zone: zonas[2],
                qualification: calificaciones[4],
                provider: proveedores[2],
                comment: [comentarios[3],comentarios[4]]
            },
            {
                serviceStatus: estadosServicio[1],
                serviceCategory: categoriasServicio[0],
                petType: tiposMascota[0],
                frequencyType: tiposFrecuencia[3],
                startDate: new Date(),
                endDate: new Date(new Date().setDate(new Date().getDate() + 10)),
                zone: zonas[3],
                qualification: calificaciones[3],
                provider: proveedores[3],
                comment: [comentarios[5],comentarios[9]]
            },
            {
                serviceStatus: estadosServicio[0],
                serviceCategory: categoriasServicio[1],
                petType: tiposMascota[1],
                frequencyType: tiposFrecuencia[0],
                startDate: new Date(),
                endDate: new Date(new Date().setDate(new Date().getDate() + 20)),
                zone: zonas[4],
                qualification: calificaciones[2],
                provider: proveedores[4],
                comment: [comentarios[6],comentarios[7],comentarios[8]]
            }
        ];
        const servicios =await Servicio.insertMany(serviciosData);
        
         // Inserta los datos necesarios antes de los pedidos
         await EstadoPedido.insertMany([
            { tipoEstadoPedido: 'Solicitado' },
            { tipoEstadoPedido: 'Aceptado' },
            { tipoEstadoPedido: 'Rechazado' },
            { tipoEstadoPedido: 'Finalizado' }
        ]);

        const estadosPedido = await EstadoPedido.find();
        
        // Inicializa los pedidos
        const pedidosData = [
            {
                estadoPedido: estadosPedido[0], // Asumiendo que es 'Solicitado'
                usuario: users[0],
                servicio: servicios[0],
                horarioContacto: '09:00 - 12:00',
                motivo: 'Necesito paseador para la mañana.'
            },
            {
                estadoPedido: estadosPedido[1], // Asumiendo que es 'Aceptado'
                usuario: users[1],
                servicio: servicios[1],
                horarioContacto: '14:00 - 17:00',
                motivo: 'Paseo por la tarde.'
            },
            {
                estadoPedido: estadosPedido[2], // Asumiendo que es 'Rechazado'
                usuario: users[2],
                servicio: servicios[2],
                horarioContacto: '17:00 - 20:00',
                motivo: 'Cuidado de mascotas por la noche.'
            },
            {
                estadoPedido: estadosPedido[3], // Asumiendo que es 'Finalizado'
                usuario: users[3],
                servicio: servicios[3],
                horarioContacto: '10:00 - 12:00',
                motivo: 'Paseo matutino.'
            },
            {
                estadoPedido: estadosPedido[0], // Asumiendo que es 'Solicitado'
                usuario: users[4],
                servicio: servicios[4],
                horarioContacto: '16:00 - 18:00',
                motivo: 'Paseo vespertino.'
            }
        ];

        await Pedido.insertMany(pedidosData);
        res.status(201).json({ message: "All entities have been initialized" });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

module.exports = {initializeAll};
