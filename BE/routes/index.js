const list = require('./list');
const authentication = require('./users');

class RouterIndex {
    constructor(app) {
        this.app = app;
    }

    registerRoutes() {
        this.app.use('/list', list);
        this.app.use('/users', authentication);
    }
}

module.exports = app => {
    return new RouterIndex(app)
};