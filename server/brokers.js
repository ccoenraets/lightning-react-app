var db = require('./pghelper');

function findAll(req, res, next) {

    var propertyId = req.query.propertyId,
        whereParts = [],
        values = [];

    if (propertyId) {
        values.push(parseInt(propertyId));
        whereParts.push("property_id = $" + values.length);
    }

    var where = whereParts.length > 0 ? ("WHERE " + whereParts.join(" AND ")) : "";

    db.query("SELECT broker.broker_id, first_name, last_name, mobile_phone, office_phone FROM property_broker " +
             "INNER JOIN broker on property_broker.broker_id = broker.broker_id " +
             where +
             "ORDER BY first_name", values)
        .then(function (brokers) {
            return res.send(JSON.stringify(brokers));
        })
        .catch(next);

};

exports.findAll = findAll;