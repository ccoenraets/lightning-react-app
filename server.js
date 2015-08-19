var express = require('express'),
    bodyParser = require('body-parser'),
    //path = require('path'),
    compression = require('compression'),
    properties = require('./server/properties'),
    contacts = require('./server/contacts'),
    activities = require('./server/activities'),
    brokers = require('./server/brokers'),
    activityTypes = require('./server/activitytypes'),
    sqlinit = require('./server/sqlinit'),
    app = express();

app.set('port', process.env.PORT || 5000);

app.use(bodyParser.json());
app.use(compression());

app.use('/', express.static(__dirname + '/www'));

// Adding CORS support
/*
app.all('*', function (req, res, next) {
    // Set CORS headers: allow all origins, methods, and headers: you may want to lock this down in a production environment
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE");
    res.header("Access-Control-Allow-Headers", req.header('access-control-request-headers'));

    if (req.method === 'OPTIONS') {
        // CORS Preflight
        res.send();
    } else {
        next();
    }
});
*/
app.get('/properties', properties.findAll);
app.get('/properties/:id', properties.findById);
app.post('/properties', properties.createItem);
app.put('/properties', properties.updateItem);
app.delete('/properties/:id', properties.deleteItem);

app.get('/contacts', contacts.findAll);
app.get('/contacts/:id', contacts.findById);
app.post('/contacts', contacts.createItem);
app.put('/contacts', contacts.updateItem);
app.delete('/contacts/:id', contacts.deleteItem);

app.get('/activities', activities.findAll);
app.get('/activities/:id', activities.findById);
app.post('/activities', activities.createItem);
app.delete('/activities/:id', activities.deleteItem);

app.get('/activitytypes', activityTypes.findAll);
app.get('/brokers', brokers.findAll);

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});