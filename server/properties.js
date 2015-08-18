var db = require('./pghelper');

function findAll(req, res, next) {

    var sort = req.query.sort || "price";

    db.query("SELECT property_id, address, city, bedrooms, bathrooms, price, location FROM property ORDER BY " + sort)
        .then(function (properties) {
            return res.send(JSON.stringify(properties));
        })
        .catch(next);

};

function findById(req, res, next) {
    var id = req.params.id;

    var sql = "SELECT property_id, address, city, zip, pic, state, teaser, description, size, bedrooms, bathrooms, price, location FROM property WHERE property_id = $1";

    db.query(sql, [id])
        .then(function (product) {
            console.log(product[0]);
            return res.json(product[0]);
        })
        .catch(next);
};

function createItem(req, res, next) {
    var property = req.body;
    db.query('INSERT INTO property (address, city, state, zip, description, size, bedrooms, bathrooms, price) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)',
        [property.address, property.city, property.state, property.zip, property.size, property.bedrooms, property.size, property.bathrooms, property.price], true)
        .then(function () {
            return res.send({result: 'ok'});
        })
        .fail(function(err) {
            return next(err);
        });

};

function updateItem(req, res, next) {
    var property = req.body;
    db.query('UPDATE property SET address=$1, city=$2, state=$3, zip=$4, pic=$5, teaser=$6, description=$7, size=$8, bedrooms=$9, bathrooms=$10, price=$11 WHERE property_id=$12',
        [property.address, property.city, property.state, property.zip, property.pic, property.teaser, property.description, property.size, property.bedrooms, property.bathrooms, property.price, property.property_id], true)
        .then(function () {
            return res.send({result: 'ok'});
        })
        .fail(function(err) {
            return next(err);
        });

};

function deleteItem(req, res, next) {
    var propertyId = req.params.id;
    db.query('DELETE FROM property WHERE property_id=$1', [propertyId], true)
        .then(function () {
            return res.send({result: 'ok'});
        })
        .fail(function(err) {
            return next(err);
        });

};

exports.findAll = findAll;
exports.findById = findById;
exports.createItem = createItem;
exports.updateItem = updateItem;
exports.deleteItem = deleteItem;