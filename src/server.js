let express = require('express');
let app = express();
app.listen(3000, () => {
    console.log('后台起于3000端口')
});


app.use((req, res, next) => {
    const {
        ALLOW_ORIGIN,
        CREDENTIALS,
        HEADERS,
        ALLOW_METHODS
    } = CONFIG.CROS;
    res.header("Access-Control-Allow-Origin", ALLOW_ORIGIN);
    res.header("Access-Control-Allow-Credentials", CREDENTIALS);
    res.header("Access-Control-Allow-Headers", HEADERS);
    res.header("Access-Control-Allow-Methods", ALLOW_METHODS);
    req.method === 'OPTIONS' ? res.send('CURRENT SERVICES SUPPORT CROSS DOMAIN REQUESTS!') : next();
});
app.use(session(CONFIG.SESSION));
app.use(bodyParser.urlencoded({
    extended: false
}));

const {
    readFile
} = require('./utils/promiseFS');


app.use(async (req, res, next) => {
    req.findData = JSON.parse(await readFile('../json/follow.json'));
    next();
})
app.use('/follow', require('./in'))