const moment = require('moment');
const logger = (req, re, next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`);
    next();
}
module.exports = logger;
