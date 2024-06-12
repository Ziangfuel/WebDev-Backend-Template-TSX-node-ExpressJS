const express = require('express');
let { rateLimit } = require('express-rate-limit');


const reqRateLimiterPerSec = rateLimit({
    windowMs:1000, // define per second
    max:30,        // times
    message:'request denied',
    statusCode:400,
    standardHeaders:true,
    legacyHeaders:false
});


const reqRateLimiterPerMinute = rateLimit({
    windowMs:60000,
    max:1000,
    message:'request denied',
    statusCode:400,
    standardHeaders:true,
    legacyHeaders:false
});

module.exports = {
    reqRateLimiterPerMinute,
    reqRateLimiterPerSec
};