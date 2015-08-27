var db = require('./pghelper');

function findAll(req, res, next) {

    db.query("SELECT activity_type_id, name FROM activity_type")
        .then(function (types) {
            return res.send(JSON.stringify(types));
        })
        .catch(next);

};

exports.findAll = findAll;