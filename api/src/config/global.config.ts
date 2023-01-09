export default () => ({
  isDev: process.env.NODE_ENV === 'dev',
  port: parseInt(process.env.API_PORT, 10),
  redis: {
    host: process.env.REDIS_HOST || 'localhost',
    port: parseInt(process.env.REDIS_PORT, 10) || 6379,
  },
  database: {
    host: process.env.POSTGRES_HOST || 'localhost',
    port: parseInt(process.env.POSTGRES_PORT, 10) || 5432,
    user: process.env.POSTGRES_USER || 'root',
    password: process.env.POSTGRES_PASSWORD || '',
    dbName: process.env.POSTGRES_DB || 'postgres',
  },
});
