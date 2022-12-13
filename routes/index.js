var express = require('express');
var router = express.Router();

const messages = [
  {
    text: 'Is this thing on?',
    user: 'spghtti',
    added: new Date(),
  },
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Mini messageboard', messages: messages });
});

/* GET new form page. */

router.get('/new', function (req, res, next) {
  res.render('new', { title: 'Submit a post' });
});

router.post('/new', function (req, res, next) {
  console.log();
  messages.push({
    text: req.body.messageText,
    user: req.body.nameText,
    added: new Date(),
  });
  res.redirect('/');
});

module.exports = router;
