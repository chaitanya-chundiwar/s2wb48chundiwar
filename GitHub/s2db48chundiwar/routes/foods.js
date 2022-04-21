var express = require('express');
const food_controller = require('../controllers/food');
var router = express.Router();

/* GET home page. */
/*
router.get('/', function(req, res, next) {
  res.render('foods', { title: 'Search Results' });
});
*/

/* GET costumes */
router.get('/', food_controller.food_view_all_Page );
/* GET detail food page */
router.get('/detail', food_controller.food_view_one_Page);
/* GET create food page */
router.get('/create', food_controller.food_create_Page);
/* GET create update page */
router.get('/update', food_controller.food_update_Page);
/* GET delete food page */
router.get('/delete', food_controller.food_delete_Page);

module.exports = router;
