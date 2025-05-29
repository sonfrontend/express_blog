const {
    singleMongooseToObject,
    multipleMongooseToObject,
} = require('../../util/mongoose');
const Course = require('../models/Course');

class MeController {
    // [GET] /me/stored/courses
    storedCourses(req, res, next) {
        Promise.all([
            Course.find(),
            Course.countDocumentsWithDeleted({ deleted: true }),
        ]).then(([courses, countDocumentsDeleted]) =>
            res.render('me/stored-courses', {
                countDocumentsDeleted,
                courses: multipleMongooseToObject(courses),
            }),
        );
    }

    // [GET] /me/stored/deleted/courses
    storedDeletedCourses(req, res, next) {
        Course.findWithDeleted({ deleted: true })
            .then((courses) =>
                res.render('me/deleted-courses', {
                    courses: multipleMongooseToObject(courses),
                }),
            )
            .catch(next);
    }
}

module.exports = new MeController();
