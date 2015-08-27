var db = require('./pghelper');

function findAll(req, res, next) {

    var propertyId = req.query.propertyId,
        contactId = req.query.contactId,
        whereParts = [],
        values = [];

    if (propertyId) {
        values.push(parseInt(propertyId));
        whereParts.push("activity.property_id = $" + values.length);
    }
    if (contactId) {
        values.push(parseInt(contactId));
        whereParts.push("activity.contact_id = $" + values.length);
    }

    var where = whereParts.length > 0 ? ("WHERE " + whereParts.join(" AND ")) : "";

    db.query("SELECT activity_id, activity.property_id, property.address, activity.contact_id as contact_id, contact.first_name || ' ' || contact.last_name as contact, activity_type.name as activity_name, activity_date, activity.price, comment FROM activity " +
             "INNER JOIN property on activity.property_id = property.property_id " +
             "LEFT JOIN contact on activity.contact_id = contact.contact_id " +
             "INNER JOIN activity_type on activity.activity_type_id = activity_type.activity_type_id " +
             where +
             "ORDER BY activity_date", values)
        .then(function (activities) {
            return res.send(JSON.stringify(activities));
        })
        .catch(next);

};

function createItem(req, res, next) {
    var activity = req.body;
    db.query('INSERT INTO activity (property_id, contact_id, activity_type_id, activity_date, price, comment) VALUES ($1, $2, $3, $4, $5, $6)',
        [activity.property_id, activity.contact_id, activity.activity_type_id, activity.activity_date, activity.price, activity.comment], true)
        .then(function () {
            return res.send({result: 'ok'});
        })
        .fail(function(err) {
            return next(err);
        });
};

function deleteItem(req, res, next) {
    var activityId = req.params.id;
    db.query('DELETE FROM activity WHERE activity_id=$1', [activityId], true)
        .then(function () {
            return res.send({result: 'ok'});
        })
        .fail(function(err) {
            return next(err);
        });

};

exports.findAll = findAll;
exports.createItem = createItem;
exports.deleteItem = deleteItem;