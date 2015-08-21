var express = require('express'),
    bodyParser = require('body-parser'),
    compression = require('compression'),
    properties = require('./server/properties'),
    contacts = require('./server/contacts'),
    activities = require('./server/activities'),
    brokers = require('./server/brokers'),
    activityTypes = require('./server/activitytypes'),
    sqlinit = require('./server/sqlinit'),
    //auth = require('basic-auth'),
    app = express();


app.set('port', process.env.PORT || 5000);

/*
app.use(function(req, res, next) {
    var credentials = auth(req);
    if (!credentials || credentials.name !== 'landmark' || credentials.pass !== 'theramp') {
        res.statusCode = 401;
        res.setHeader('WWW-Authenticate', 'Basic realm="Realty"');
        console.log(req.path + " unauthorized");
        res.end('Unauthorized');
    } else {
        console.log(req.path + " authorized");
        next();
    }
});
*/

app.use(bodyParser.json());
app.use(compression());

app.use('/', express.static(__dirname + '/www'));

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