const express = require('express'),
    cors = require('cors'),
    cron = require('cron').CronJob,
    cookieParser = require("cookie-parser");

/* note:
*   cors:
*       Cross-Origin Resource Sharing.
*       A security feature implemented by web browsers that restricts web pages from making requests
*       to a different domain than the one that served the web page.
*   cookies:
*       Store credential and user preference
*   cron:
*       services
*       */
// -- import component
const {reqRateLimiterPerSec, reqRateLimiterPerMinute,} = require('./src/utils/auth');
const appService = require('./src/services/app_services');

// -- import routes
const routes = require('./src/routes/app_routes');


// main app
const app = express();

// config
const PORT = process.env.PORT || 15009;        //  port
app.use(cors(
    {
        origin: true,
        credentials: false,
        exposedHeaders: ['Set-Cookie'],
    }
));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(reqRateLimiterPerSec);
app.use(reqRateLimiterPerMinute);


// main endpoint
app.use('/app_api', routes);

// main
const start = () => {
    try {
        // service task
        const sTask = new cron("0 */15 * * * *", function () {
            appService.MockFunction();
        }, null, true, 'America/Toronto')

        // feed back
        app.listen(PORT, () => {
            console.log(Date().toLocaleString());
            console.log(`⚡️ Server started, PORT: ${PORT}`);
        })

    } catch (err) {
        console.log(err)
    }
}

start();
