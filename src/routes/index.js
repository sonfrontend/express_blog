const newRouter = require('./news');
const site = require('./site');
const course = require('./course');
const me = require('./me');

function route(app) {
    app.use('/news', newRouter);
    app.use('/', site);
    app.use('/courses', course);
    app.use('/me', me);
}

module.exports = route;
