"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.query = query;
var pg_1 = require("pg");
// Cadena de conexión proporcionada
var connectionString = 'postgresql://basededatos_gzip_user:nLlDgiA4riZ1am4IQSplRfKw1kH0FlrZ@dpg-cvcqlalumphs73afimog-a.frankfurt-postgres.render.com/basededatos_gzip';
var pool = new pg_1.Pool({
    connectionString: connectionString,
    ssl: {
        rejectUnauthorized: false, // Esto desactiva la verificación estricta del certificado SSL.
    },
});
function query(text, params) {
    return pool.query(text, params);
}
