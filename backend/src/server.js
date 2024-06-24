const app = require('./app');
const connectDB = require('./config/db');  // Importar la función connectDB
const PORT = process.env.PORT || 5000;

connectDB();  // Llamar a la función connectDB

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
