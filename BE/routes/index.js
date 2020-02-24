const list = require('./list');
const authentication = require('./users');
const login = require('./login');

class RouterIndex {
    constructor(app) {
        this.app = app;
    }

    registerRoutes() {
        this.app.use('/list', list);
        this.app.use('/users', authentication);
        this.app.use('/login', login);
    }
}

module.exports = app => {
    return new RouterIndex(app)
};