import { Pool } from 'pg';

// Cadena de conexión proporcionada
const connectionString = 'postgresql://cartas_game_user:DqON4evQxb7BFUTJ3fB564YGcLbCBDwg@dpg-cum67qpu0jms73bkfjhg-a.frankfurt-postgres.render.com/cartas_game';

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Esto desactiva la verificación estricta del certificado SSL.
  },
});

export function query(text: string, params?: any[]) {
  return pool.query(text, params);
}
