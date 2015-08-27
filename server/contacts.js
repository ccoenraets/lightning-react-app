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
        .then(function (contact) {
            return res.json(contact[0]);
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
    db.query('UPDATE contact SET first_name=$1, last_name=$2, address=$3, city=$4, state=$5, zip=$6, home_phone=$7, mobile_phone=$8, email=$9, occupation=$10, pic=$11 WHERE contact_id=$12',
        [contact.first_name, contact.last_name, contact.address, contact.city, contact.state, contact.zip, contact.home_phone, contact.mobile_phone, contact.email, contact.occupation, contact.pic, contact.contact_id], true)
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