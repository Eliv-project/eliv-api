export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    host: process.env.POSTGRES_HOST || 'localhost',
    port: parseInt(process.env.POSTGRES_PORT, 10) || 5432,
    user: process.env.POSTGRES_USER || 'root',
    password: process.env.POSTGRES_PASSWORD || '',
    dbName: process.env.POSTGRES_DB || 'postgres',
  },
});
