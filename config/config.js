require('dotenv').config();//instatiate environment variables

let CONFIG = {} //Make this global to use all over the application

CONFIG.app          = process.env.APP   || 'dev';
CONFIG.port         = process.env.PORT  || '3000';

CONFIG.db_dialect   = process.env.DB_DIALECT    || 'mysql';
CONFIG.db_host      = process.env.DB_HOST       || '156.67.212.103';
CONFIG.db_port      = process.env.DB_PORT       || '3306';
CONFIG.db_name      = process.env.DB_NAME       || 'u3785757_e-reiyn';
CONFIG.db_user      = process.env.DB_USER       || 'u3785757_admin';
CONFIG.db_password  = process.env.DB_PASSWORD   || 'belumtentujadi';

CONFIG.jwt_encryption  = process.env.JWT_ENCRYPTION || 'DavidAndrianChandra';
CONFIG.jwt_expiration  = process.env.JWT_EXPIRATION || '10000';

module.exports = CONFIG;
