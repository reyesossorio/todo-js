function logger(req, resp, next) {
    console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
    next();
}

module.exports = logger; 
