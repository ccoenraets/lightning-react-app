var db = require('./pghelper');

function findAll(req, res, next) {

    var propertyId = req.query.propertyId,
        promise;

    if (propertyId) {
        promise = db.query("SELECT b.broker_id, b.first_name, b.last_name, b.first_name || ' ' || b.last_name as name, b.title, b.office_phone, b.mobile_phone, b.email FROM property_broker as pb " +
            "INNER JOIN broker AS b on pb.broker_id = b.broker_id " +
            "WHERE pb.property_id = $1 ORDER BY b.first_name", [propertyId]);
    } else {
        var name = req.query.name;
        var sort = req.query.sort || "first_name";
        whereClause = name ? "WHERE first_name || last_name ~* $1" : "";
        promise = db.query("SELECT broker_id, first_name, last_name, first_name || ' ' || last_name as name, title, office_phone, mobile_phone, email FROM broker " + whereClause + " ORDER BY " + sort, name ? [name] : []);
    }
    promise.then(function (brokers) {
            return res.send(JSON.stringify(brokers));
        })
        .catch(next);
};

function findById(req, res, next) {
    var id = req.params.id;

    var sql = "SELECT broker_id, first_name, last_name, address, city, state, zip, title, office_phone, mobile_phone, email, pic FROM broker WHERE broker_id = $1";

    db.query(sql, [id])
        .then(function (broker) {
            return res.json(broker[0]);
        })
        .catch(next);
};

function createItem(req, res, next) {
    var broker = req.body;
    db.query('INSERT INTO broker (first_name, last_name, office_phone, mobile_phone, email) VALUES ($1, $2, $3, $4, $5)',
        [broker.first_name, broker.last_name, broker.office_phone, broker.mobile_phone, broker.email], true)
        .then(function () {
            return res.send({result: 'ok'});
        })
        .fail(function(err) {
            return next(err);
        });

};

function updateItem(req, res, next) {
    var broker = req.body;
    db.query('UPDATE broker SET first_name=$1, last_name=$2, address=$3, city=$4, state=$5, zip=$6, office_phone=$7, mobile_phone=$8, email=$9, title=$10, pic=$11 WHERE broker_id=$12',
        [broker.first_name, broker.last_name, broker.address, broker.city, broker.state, broker.zip, broker.office_phone, broker.mobile_phone, broker.email, broker.title, broker.pic, broker.broker_id], true)
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
