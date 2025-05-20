const express = require('express');
// const morgan = require("morgan");
const { create } = require('express-handlebars');
const path = require('path');
const app = express();
const port = 3000;

const route = require('./routes');

app.use(express.static(path.join(__dirname, '/public')));

// Http logger
// app.use(morgan("combined"));

// Middleware xử lý khi client gửi dữ liệu lên
// Đối với query parameter thì đối với .query thì đã có middleware xử lý lấy data
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// Template engine

const hbs = create({
    extname: '.hbs',
    partialsDir: path.join(__dirname, 'resources/views', 'partials'),
});

app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');
app.set('views', 'src/resources/views');

// Route init
route(app);
// app.get("/", (req, res) => {
//   res.render("home");
// });

// app.get("/news", (req, res) => {
//   res.render("news");
// });

// app.get("/search", (req, res) => {
//   res.render("search");
// });

// app.post("/search", (req, res) => {
//   console.log(req.body);
//   res.send("");
// });

app.listen(port);
