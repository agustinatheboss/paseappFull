const Zona = require('../models/zonaModel');
const Proveedor = require('../models/proveedorModel');
const Calificacion = require('../models/calificacionModel');
const CategoriaServicio = require('../models/categoriaServicioModel'); // Importa el modelo de CategoriaServicio
const User = require('../models/userModel'); // Importa el modelo de User
const Comentario = require('../models/comentarioModel'); // Importa el modelo de Comentario




// Importa aquí todos los modelos que necesites inicializar

const initializeAll = async (req, res) => {
    try {
        // Inicializar Zonas
        await Zona.create({ nombreZona: "CABA" });
        await Zona.create({ nombreZona: "Zona Oeste" });

        // Inicializar Proveedores
        await Proveedor.create({
            name: "Proveedor 1",
            lastname: "Apellido 1",
            email: "proveedor1@example.com",
            password: "password1",
            address: "Calle 1",
            phone: "1165656565"
        });

        await Proveedor.create({
            name: "Proveedor 2",
            lastname: "Apellido 2",
            email: "proveedor2@example.com",
            password: "password2",
            address: "Calle 2",
            phone: "1165656565"
        });

        await Proveedor.create({
            name: "Proveedor 3",
            lastname: "Apellido 3",
            email: "proveedor3@example.com",
            password: "password3",
            address: "Calle 3",
            phone: "1165656565"
            
        });

        await Proveedor.create({
            name: "Proveedor 4",
            lastname: "Apellido 4",
            email: "proveedor4@example.com",
            password: "password4",
            address: "Calle 4",
            phone: "1165656565"
            
        });

        await Proveedor.create({
            name: "Proveedor 5",
            lastname: "Apellido 5",
            email: "proveedor5@example.com",
            password: "password5",
            address: "Calle 5",
            phone: "1165656565"
            
        });

        // Inicializar Calificaciones
        await Calificacion.create({ numeroCalificacion: 1 });
        await Calificacion.create({ numeroCalificacion: 2 });
        await Calificacion.create({ numeroCalificacion: 3 });
        await Calificacion.create({ numeroCalificacion: 4 });
        await Calificacion.create({ numeroCalificacion: 5 });
        
        // Inicializar Categorías de Servicio
        await CategoriaServicio.create({ nombreCategoria: "Paseo de Perros" });
        await CategoriaServicio.create({ nombreCategoria: "Cuidado de Mascotas" });
        await CategoriaServicio.create({ nombreCategoria: "Adiestramiento" });
        await CategoriaServicio.create({ nombreCategoria: "Veterinario a Domicilio" });
        await CategoriaServicio.create({ nombreCategoria: "Transporte de Mascotas" });

        // Inicializar Usuarios
        const user1 = await User.create({
            name: "Juan",
            lastname: "Pérez",
            email: "juan.perez@example.com",
            password: "password123",
            address: "Calle Principal 123",
            phone: "1160606060"
        });

        const user2 = await User.create({
            name: "Ana",
            lastname: "Gómez",
            email: "ana.gomez@example.com",
            password: "password123",
            address: "Calle Secundaria 456",
            phone: "1150505050"
        });

        const user3 = await User.create({
            name: "Carlos",
            lastname: "Martínez",
            email: "carlos.martinez@example.com",
            password: "password123",
            address: "Avenida Siempre Viva 742",
            phone: "1140404040"
        });

        const user4 = await User.create({
            name: "Laura",
            lastname: "Fernández",
            email: "laura.fernandez@example.com",
            password: "password123",
            domicilio: "Calle de la Rosa 234",
            phone: "1130303030"
        });

        const user5 = await User.create({
            name: "Marta",
            lastname: "López",
            email: "marta.lopez@example.com",
            password: "password123",
            address: "Paseo del Prado 123",
            phone: "1110101010"
        });

        // Inicializar Comentarios
       
        // Inicializa aquí otras entidades

        res.status(201).json({ message: "Todas las entidades fueron inicializadas" });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

module.exports = {
    initializeAll
};
