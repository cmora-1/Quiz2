var express = require('express');
var router = express.Router();

<<<<<<< HEAD
var quizController = require('../controllers/quiz_controller')
=======
>>>>>>> 0d90f33cff57c9d0a644d07fd4fe2c29cb6694fa
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});

<<<<<<< HEAD
router.get('/quizes',                      quizController.index);
router.get('/quizes/:quizId(\\d+)',        quizController.show);
router.get('/quizes/:quizId(\\d+)/answer', quizController.answer);

=======
router.get('/author', function(req, res) {
  res.render('author', { autor: 'Carlos Mora' });
});
>>>>>>> 0d90f33cff57c9d0a644d07fd4fe2c29cb6694fa
module.exports = router;
