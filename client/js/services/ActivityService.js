import * as h from './h';

let url = "/activities";

export let findAll = sort => h.get(url, {sort});

export let findByName = name => h.get(url, {name});

export let findByProperty = propertyId => h.get(url, {propertyId});

export let findByContact = contactId => h.get(url, {contactId});

export let findById = id => h.get(url + "/" + id);

export let updateItem = property => h.put(url, property);

export let createItem = property => h.post(url, property);

export let deleteItem = id => h.del(url + "/" + id);