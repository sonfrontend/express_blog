module.exports = {
    multipleMongooseToObject: function (mongooseArray) {
        return mongooseArray.map((item) => item.toObject());
    },

    singleMongooseToObject: function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    },
};
