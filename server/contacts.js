var db = require('./pghelper');

function findAll(req, res, next) {

    var name = req.query.name;
    var sort = req.query.sort || "first_name";

    var whereClause = name ? "WHERE first_name || last_name ~* $1" : "";

    db.query("SELECT contact_id, first_name, last_name, first_name || ' ' || last_name as name, home_phone, mobile_phone, email FROM contact " + whereClause + " ORDER BY " + sort , name ? [name] : [])
        .then(function (contacts) {
            return res.send(JSON.stringify(contacts));
        })
        .catch(next);

};

function findById(req, res, next) {
    var id = req.params.id;

    var sql = "SELECT contact_id, first_name, last_name, address, city, state, zip, occupation, home_phone, mobile_phone, email, lead_source, category, member_since, notes, pic FROM contact WHERE contact_id = $1";

    db.query(sql, [id])
        .then(function (product) {
            console.log(product[0]);
            return res.json(product[0]);
        })
        .catch(next);
};

function createItem(req, res, next) {
    var contact = req.body;
    db.query('INSERT INTO contact (first_name, last_name, home_phone, mobile_phone, email) VALUES ($1, $2, $3, $4, $5)',
        [contact.first_name, contact.last_name, contact.home_phone, contact.mobile_phone, contact.email], true)
        .then(function () {
            return res.send({result: 'ok'});
        })
        .fail(function(err) {
            return next(err);
        });

};

function updateItem(req, res, next) {
    var contact = req.body;
    db.query('UPDATE contact SET first_name=$1, last_name=$2, home_phone=$3, mobile_phone=$4, email=$5 WHERE contact_id=$6',
        [contact.first_name, contact.last_name, contact.home_phone, contact.mobile_phone, contact.email, contact.contact_id], true)
        .then(function () {
            return res.send({result: 'ok'});
        })
        .fail(function(err) {
            return next(err);
        });

};

function deleteItem(req, res, next) {
    var contactId = req.params.id;
    db.query('DELETE FROM contact WHERE contact_id=$1', [contactId], true)
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