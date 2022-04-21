var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var costume_controller = require('../controllers/costume');
var food_controller = require('../controllers/food');

/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// costume ROUTES ///
// POST request for creating a costume.
router.post('/costumes', costume_controller.costume_create_post);
// DELETE request to delete costume.
router.delete('/costumes/:id', costume_controller.costume_delete);
// PUT request to update costume.
router.put('/costumes/:id', costume_controller.costume_update_put);
// GET request for one costume.
router.get('/costumes/:id', costume_controller.costume_detail);
// GET request for list of all costume items.
router.get('/costumes', costume_controller.costume_list);

/// food ROUTES ///
// POST request for creating a food.
router.post('/foods', food_controller.food_create_post);
// DELETE request to delete food.
router.delete('/foods/:id', food_controller.food_delete);
// PUT request to update food.
router.put('/foods/:id', food_controller.food_update_put);
// GET request for one food.
router.get('/foods/:id', food_controller.food_detail);
// GET request for list of all food items.
router.get('/foods', food_controller.food_list);
module.exports = router;
