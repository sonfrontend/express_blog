const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');

class Site {
    // [GET] /home
    index(req, res, next) {
        // res.render('home');
        Course.find({})
            .then((courses) => {
                // Nếu không có lỗi, trả về danh sách khóa học dưới dạng JSON
                res.render('home', {
                    courses: multipleMongooseToObject(courses),
                });
            })
            .catch((err) => {
                // Nếu có lỗi, xử lý lỗi và trả về một trạng thái lỗi hoặc thông báo

                // Xử lý midelware tại một nơi
                next(err);
            });
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new Site();
