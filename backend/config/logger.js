const winston = require('winston');
require('winston-mongodb');


const levels= {
  error: 0,
  warn: 1,
  info: 2,
  debug: 4
}


const logger = winston.createLogger({
  levels: levels,
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
  
    new winston.transports.File(
        { 
            filename: 'winston.log', 
            format : winston.format.combine(winston.format.timestamp(),winston.format.json())
        }),
    new winston.transports.MongoDB(
          { 
               db :'mongodb://localhost:27017/MarketPlace',
               option : { useUnifiedTopology: true } 
          }),
  ],
});


module.exports = logger;