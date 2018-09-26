'use strict';

const winston=require('winston');

const logs=(test)=>{
      const logger=winston.createLogger({
      level:'info',
      format:winston.format.json(),
      transports:[
      new winston.transports.File({filename:'error.log',level:'error'}),
      new winston.transports.File({filename:'testlog.log'})    
      ],
      //exitOnError:true,
      silent:false

      });
      logger.info("TESTING SUCCESS  -"+test);
      logger.log({
      level:'info',  
      message:"message  -"+test,
      
    });
    
    return true;
};


module.exports=logs;


