var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:p1', function(req, res, next) {
    res.json({string: req.params.p1, length: req.params.p1.length});
});

router.post('/post', function(req,res,next) {
    var id = req.body.p1;
    res.redirect('/' + id);
});

module.exports = router;
