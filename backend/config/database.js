const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    logging: false, // Desactiva logs de consultas SQL en consola
  }
);

const testDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Conexión a la base de datos establecida correctamente.");
  } catch (error) {
    console.error("❌ Error al conectar con la base de datos:", error);
  }
};

testDB();

module.exports = sequelize;
