import { Pool } from 'pg';

// Cadena de conexión proporcionada
const connectionString = 'postgresql://basededatos_gzip_user:nLlDgiA4riZ1am4IQSplRfKw1kH0FlrZ@dpg-cvcqlalumphs73afimog-a.frankfurt-postgres.render.com/basededatos_gzip';

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Esto desactiva la verificación estricta del certificado SSL.
  },
});

export function query(text: string, params?: any[]) {
  return pool.query(text, params);
}
