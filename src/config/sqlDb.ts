import { createPool, type Pool } from 'mysql2/promise';
import { config } from 'dotenv';

config();

function requireEnv(name: string): string {
    const value = process.env[name];
    if (value === undefined || value.trim() === '') {
        throw new Error(`Missing or empty environment variable: ${name}`);
    }
    return value;
}

const pool: Pool = createPool({
    host: requireEnv('DB_HOST'),
    user: requireEnv('DB_USER'),
    password: requireEnv('DB_PASSWORD'),
    database: requireEnv('DB_NAME'),
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

export default pool;

(async () => {
    try {
        const connection = await pool.getConnection();
        console.log('Connection to database successful');
        connection.release();
    } catch (err) {
        console.error('Connection to database fail: ', err);
    }
})();