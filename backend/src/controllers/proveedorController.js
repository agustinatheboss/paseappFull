const Proveedor = require('../models/proveedorModel');
const bcrypt = require('bcrypt');

const createProveedor = async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const proveedor = new Proveedor({
            ...req.body,
            password: hashedPassword
        });
        await proveedor.save();
        res.status(201).json(proveedor);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const getProveedores = async (req, res) => {
    try {
        const proveedores = await Proveedor.find();
        res.json(proveedores);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getProveedorById = async (req, res) => {
    try {
        const proveedor = await Proveedor.findById(req.params.id);
        if (!proveedor) {
            return res.status(404).json({ message: 'Proveedor not found' });
        }
        res.json(proveedor);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const updateProveedor = async (req, res) => {
    try {
        const proveedor = await Proveedor.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!proveedor) {
            return res.status(404).json({ message: 'Proveedor not found' });
        }
        res.json(proveedor);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const deleteProveedor = async (req, res) => {
    try {
        const proveedor = await Proveedor.findByIdAndDelete(req.params.id);
        if (!proveedor) {
            return res.status(404).json({ message: 'Proveedor not found' });
        }
        res.json({ message: 'Proveedor deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const loginProveedor = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await Proveedor.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'Proveedor not found' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid password' });
        }

        // Aquí podrías generar y devolver un token JWT si lo necesitas
        res.status(200).json({ message: 'Login successful', user });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    createProveedor,
    getProveedores,
    getProveedorById,
    updateProveedor,
    deleteProveedor,
    loginProveedor
};
