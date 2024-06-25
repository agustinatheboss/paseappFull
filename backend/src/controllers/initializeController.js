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
            nombre: "Proveedor 1",
            apellido: "Apellido 1",
            mailProveedor: "proveedor1@example.com",
            password: "password1",
            domicilio: "Calle 1",
            idUsuario: 1,
            experiencia: "3 años"
        });

        await Proveedor.create({
            nombre: "Proveedor 2",
            apellido: "Apellido 2",
            mailProveedor: "proveedor2@example.com",
            password: "password2",
            domicilio: "Calle 2",
            idUsuario: 2,
            experiencia: "5 años"
        });

        await Proveedor.create({
            nombre: "Proveedor 3",
            apellido: "Apellido 3",
            mailProveedor: "proveedor3@example.com",
            password: "password3",
            domicilio: "Calle 3",
            idUsuario: 3,
            experiencia: "2 años"
        });

        await Proveedor.create({
            nombre: "Proveedor 4",
            apellido: "Apellido 4",
            mailProveedor: "proveedor4@example.com",
            password: "password4",
            domicilio: "Calle 4",
            idUsuario: 4,
            experiencia: "4 años"
        });

        await Proveedor.create({
            nombre: "Proveedor 5",
            apellido: "Apellido 5",
            mailProveedor: "proveedor5@example.com",
            password: "password5",
            domicilio: "Calle 5",
            idUsuario: 5,
            experiencia: "1 año"
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
            nombre: "Juan",
            apellido: "Pérez",
            mailUsuario: "juan.perez@example.com",
            password: "password123",
            domicilio: "Calle Principal 123",
            idUsuario: 1
        });

        const user2 = await User.create({
            nombre: "Ana",
            apellido: "Gómez",
            mailUsuario: "ana.gomez@example.com",
            password: "password123",
            domicilio: "Calle Secundaria 456",
            idUsuario: 2
        });

        const user3 = await User.create({
            nombre: "Carlos",
            apellido: "Martínez",
            mailUsuario: "carlos.martinez@example.com",
            password: "password123",
            domicilio: "Avenida Siempre Viva 742",
            idUsuario: 3
        });

        const user4 = await User.create({
            nombre: "Laura",
            apellido: "Fernández",
            mailUsuario: "laura.fernandez@example.com",
            password: "password123",
            domicilio: "Calle de la Rosa 234",
            idUsuario: 4
        });

        const user5 = await User.create({
            nombre: "Marta",
            apellido: "López",
            mailUsuario: "marta.lopez@example.com",
            password: "password123",
            domicilio: "Paseo del Prado 123",
            idUsuario: 5
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
