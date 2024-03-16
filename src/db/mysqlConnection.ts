import mysql from 'mysql';

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	database: 'AleCrm_ZEM',
});

export default connection;
