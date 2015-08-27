var express = require('express'),
    bodyParser = require('body-parser'),
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
app.post('/activities', activities.createItem);
app.delete('/activities/:id', activities.deleteItem);

app.get('/activitytypes', activityTypes.findAll);

app.get('/brokers', brokers.findAll);
app.get('/brokers/:id', brokers.findById);
app.post('/brokers', brokers.createItem);
app.put('/brokers', brokers.updateItem);
app.delete('/brokers/:id', brokers.deleteItem);

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});