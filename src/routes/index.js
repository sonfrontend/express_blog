const newRouter = require('./news');
const site = require('./site');

function route(app) {
    app.use('/news', newRouter);
    app.use('/', site);
}

module.exports = route;
