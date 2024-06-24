const Zona = require('../models/zonaModel');
const Proveedor = require('../models/proveedorModel');
// Importa aquí todos los modelos que necesites inicializar

const initializeAll = async (req, res) => {
    try {
        // Inicializar Zonas
        await Zona.create({ nombreZona: "CABA" });
        await Zona.create({ nombreZona: "Zona Oeste" });

        // Inicializar Proveedores
        await Proveedor.create({ name: "Proveedor 1", email: "proveedor1@example.com", phone: "1234567890" });
        await Proveedor.create({ name: "Proveedor 2", email: "proveedor2@example.com", phone: "0987654321" });

        // Inicializa aquí otras entidades

        res.status(201).json({ message: "Todas las entidades fueron inicializadas" });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

module.exports = {
    initializeAll
};
