const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const userRoutes = require('./routes/userRoutes');
const mascotaRoutes = require('./routes/mascotaRoutes');
const proveedorRoutes = require('./routes/proveedorRoutes');
const categoriaServicioRoutes = require('./routes/categoriaServicioRoutes');
const tipoFrecuenciaRoutes = require('./routes/tipoFrecuenciaRoutes');
const tipoMascotaRoutes = require('./routes/tipoMascotaRoutes');
const zonaRoutes = require('./routes/zonaRoutes');
const servicioRoutes = require('./routes/servicioRoutes');
const calificacionRoutes = require('./routes/calificacionRoutes');
const comentarioRoutes = require('./routes/comentarioRoutes');
const estadoPedidoRoutes = require('./routes/estadoPedidoRoutes');
const estadoServicioRoutes = require('./routes/estadoServicioRoutes');
const pedidoRoutes = require('./routes/pedidoRoutes');

const app = express();

// Conectar a la base de datos
connectDB();

// Middleware para parsear JSON
app.use(express.json());

// Middleware para habilitar CORS
app.use(cors({
    origin: 'http://localhost:3000', // Permitir solicitudes desde esta dirección
}));

// Rutas
app.use('/api/users', userRoutes);
app.use('/api/mascotas', mascotaRoutes);
app.use('/api/proveedores', proveedorRoutes);
app.use('/api/categoriaServicios', categoriaServicioRoutes);
app.use('/api/tipoFrecuencias', tipoFrecuenciaRoutes);
app.use('/api/tipoMascotas', tipoMascotaRoutes);
app.use('/api/zonas', zonaRoutes);
app.use('/api/servicios', servicioRoutes);
app.use('/api/calificaciones', calificacionRoutes);
app.use('/api/comentarios', comentarioRoutes);
app.use('/api/estadoPedidos', estadoPedidoRoutes);
app.use('/api/estadoServicios', estadoServicioRoutes);
app.use('/api/pedidos', pedidoRoutes);

module.exports = app;
