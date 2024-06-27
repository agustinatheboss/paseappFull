const Servicio = require('../models/servicioModel');

const createServicio = async (req, res) => {
    try {
        const servicio = new Servicio(req.body);
        await servicio.save();
        res.status(201).json(servicio);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const getServicios = async (req, res) => {
    try {
        // Obtiene los filtros de la solicitud
        const { categories, petTypes, frequencies, dateRange, rating, zones, query } = req.query;

        // Crea el objeto de filtros
        let filters = {};

        if (categories && categories.length) {
            filters.serviceCategory = { $in: categories.split(',') };
        }

        if (petTypes && petTypes.length) {
            filters.petType = { $in: petTypes.split(',') };
        }

        if (frequencies && frequencies.length) {
            filters.frequencyType = { $in: frequencies.split(',') };
        }

        if (dateRange && dateRange.start && dateRange.end) {
            filters.startDate = { $gte: new Date(dateRange.start), $lte: new Date(dateRange.end) };
        }

        if (rating) {
            filters.qualification = { $gte: parseInt(rating, 10) };
        }

        if (zones && zones.length) {
            filters.zone = { $in: zones.split(',') };
        }

        if (query) {
            filters.title = { $regex: query, $options: 'i' }; // Asumiendo que tienes un campo 'title' en tus servicios
        }

        // Buscar servicios con los filtros aplicados
        const servicios = await Servicio.find(filters).populate('serviceCategory').populate('zone').populate('provider').populate('petType');
        res.json(servicios);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getServicioById = async (req, res) => {
    try {
        const servicio = await Servicio.findById(req.params.id).populate('serviceCategory').populate('zone').populate('provider').populate('petType');
        if (!servicio) {
            return res.status(404).json({ message: 'Servicio not found' });
        }
        res.json(servicio);
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
    updateServicio,
    deleteServicio,
};
