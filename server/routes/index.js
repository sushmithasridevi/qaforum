var express = require('express');
var router = express.Router();
let questionControl = require('../controller/question');

module.exports = function(passport) {
    router.post('/createQuestion', questionControl.addquestion);
    return router;
}
