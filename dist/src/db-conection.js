"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.query = query;
var pg_1 = require("pg");
// Cadena de conexión proporcionada
var connectionString = 'postgresql://cartas_game_user:DqON4evQxb7BFUTJ3fB564YGcLbCBDwg@dpg-cum67qpu0jms73bkfjhg-a.frankfurt-postgres.render.com/cartas_game';
var pool = new pg_1.Pool({
    connectionString: connectionString,
    ssl: {
        rejectUnauthorized: false, // Esto desactiva la verificación estricta del certificado SSL.
    },
});
function query(text, params) {
    return pool.query(text, params);
}
