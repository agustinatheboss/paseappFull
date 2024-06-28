const Servicio = require('../models/servicioModel');
const Proveedor = require('../models/proveedorModel');

const createServicio = async (req, res) => {
    try {
        // Buscar si el petsitter ya existe por email
        let petsitter = await Proveedor.findOne({ email: req.body.petsitter.email });

        // Si no existe, crear un nuevo petsitter
        if (!petsitter) {
            petsitter = new Proveedor(req.body.petsitter);
            await petsitter.save();
        }

        // Crear los datos del servicio utilizando el petsitter existente o nuevo
        const servicioData = {
            ...req.body,
            serviceStatus: req.body.serviceStatus, // Objeto completo
            serviceCategory: req.body.serviceCategory, // Objeto completo
            petType: req.body.petType, // Objeto completo
            frequencyType: req.body.frequencyType, // Objeto completo
            startDate: req.body.startDate,
            endDate: req.body.endDate,
            zone: req.body.zone, // Objeto completo
            calification: req.body.calification, // Objeto completo
            petsitter: petsitter, // Reutilizar el objeto completo del petsitter
            comments: req.body.comments.map(comment => ({
                ...comment,
                usuario: comment.usuario._id, // Solo el ID del usuario
                calificacion: comment.calificacion // Objeto completo
            }))
        };

        // Crear y guardar el nuevo servicio
        const servicio = new Servicio(servicioData);
        await servicio.save();
        res.status(201).json(servicio);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const getServicios = async (req, res) => {
    try {
        const servicios = await Servicio.find();
        res.json(servicios);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getServicioById = async (req, res) => {
    try {
        const servicio = await Servicio.findById(req.params.id);
        if (!servicio) {
            return res.status(404).json({ message: 'Servicio not found' });
        }
        res.json(servicio);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getServicioByIdProveedor = async (req, res) => {
    try {
        const servicios = await Servicio.find({ "petsitter._id": req.params.id });
        if (!servicios.length) {
            return res.status(404).json({ message: 'No services found for the given provider' });
        };
        res.json(servicios);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


const updateServicio = async (req, res) => {
    try {
        const servicio = await Servicio.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!servicio) {
            return res.status(404).json({ message: 'Servicio not found' });
        }
        res.json(servicio);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const deleteServicio = async (req, res) => {
    try {
        const servicio = await Servicio.findByIdAndDelete(req.params.id);
        if (!servicio) {
            return res.status(404).json({ message: 'Servicio not found' });
        }
        res.json({ message: 'Servicio deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    createServicio,
    getServicios,
    getServicioById,
    getServicioByIdProveedor,
    updateServicio,
    deleteServicio,
};
