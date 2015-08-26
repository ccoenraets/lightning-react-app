var db = require('./pghelper');

function findAll(req, res, next) {

    var name = req.query.name;
    var sort = req.query.sort || "first_name";

    var whereClause = name ? "WHERE first_name || last_name ~* $1" : "";

    db.query("SELECT broker_id, first_name, last_name, first_name || ' ' || last_name as name, office_phone, mobile_phone, email FROM broker " + whereClause+ " ORDER BY " + sort, name ? [name] : [])
        .then(function (contacts) {
            return res.send(JSON.stringify(contacts));
        })
        .catch(next);

};

function findById(req, res, next) {
    var id = req.params.id;

    var sql = "SELECT broker_id, first_name, last_name, address, city, state, zip, title, office_phone, mobile_phone, email, pic FROM broker WHERE broker_id = $1";

    db.query(sql, [id])
        .then(function (product) {
            console.log(product[0]);
            return res.json(product[0]);
        })
        .catch(next);
};

function createItem(req, res, next) {
    var broker = req.body;
    db.query('INSERT INTO broker (first_name, last_name, office_phone, mobile_phone, email) VALUES ($1, $2, $3, $4, $5)',
        [broker.first_name, broker.last_name, broker.home_phone, broker.mobile_phone, broker.email], true)
        .then(function () {
            return res.send({result: 'ok'});
        })
        .fail(function(err) {
            return next(err);
        });

};

function updateItem(req, res, next) {
    var broker = req.body;
    db.query('UPDATE broker SET first_name=$1, last_name=$2, address=$3, city=$4, state=$5, zip=$6, title=$7, office_phone=$8, mobile_phone=$9, email=$10, pic=$11 WHERE broker_id=$12',
        [broker.first_name, broker.last_name, broker.address, broker.city, broker.state, broker.zip, broker.title, broker.office_phone, broker.mobile_phone, broker.email, broker.pic, broker.broker_id], true)
        .then(function () {
            return res.send({result: 'ok'});
        })
        .fail(function(err) {
            return next(err);
        });

};

function deleteItem(req, res, next) {
    var brokerId = req.params.id;
    db.query('DELETE FROM broker WHERE broker_id=$1', [brokerId], true)
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
