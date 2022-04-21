var Car = require('../models/food');
// List of all foods
exports.food_list = async function (req, res) {
    try {
        theFoods = await Food.find();
        res.send(theFoods);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// for a specific food.
exports.food_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await Food.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};
// Handle Food create on POST.
exports.food_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Food();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"food_brand":"Mustang GT", "Food_color":"Lucid Red Pearl", "food_cost":37000}
    document.food_brand = req.body.food_brand;
    document.food_cost = req.body.food_cost;
    document.food_color = req.body.food_color;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle food delete form on DELETE.
exports.food_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await Food.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};
// Handle food update form on PUT.
exports.food_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Food.findById(req.params.id)
        // Do updates of properties
        if (req.body.food_brand) toUpdate.food_brand = req.body.food_brand;
        if (req.body.food_cost) toUpdate.food_cost = req.body.food_cost;
        if (req.body.food_color) toUpdate.food_color = req.body.food_color;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
};

// VIEWS
// Handle a show all view
exports.food_view_all_Page = async function (req, res) {
    try {
        theFoods = await Food.find();
        res.render('foods', { title: 'Food Search Results', results: theFoods });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle a show one view with id specified by query
exports.food_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await Food.findById(req.query.id)
        res.render('fooddetail',
            { title: 'Food Detail', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for creating a car.
// No body, no in path parameter, no query.
// Does not need to be async
exports.food_create_Page = function (req, res) {
    console.log("create view")
    try {
        res.render('foodcreate', { title: 'Food Create' });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle building the view for updating a car.
// query provides the id
exports.food_update_Page = async function (req, res) {
    console.log("update view for item " + req.query.id)
    try {
        let result = await Food.findById(req.query.id)
        res.render('foodupdate', { title: 'Food Update', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle a delete one view with id from query
exports.food_delete_Page = async function (req, res) {
    console.log("Delete view for id " + req.query.id)
    try {
        result = await Food.findById(req.query.id)
        res.render('fooddelete', {title: 'Food Delete', toShow: result});
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};