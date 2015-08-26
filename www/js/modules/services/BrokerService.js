import * as h from './h';

let url = "/brokers";

export let findAll = sort => h.get(url, {sort});

export let findByProperty = propertyId => h.get(url, {propertyId});

export let findByName = name => h.get(url, {name});

export let findById = id => h.get(url + "/" + id);

export let updateItem = property => h.put(url, property);

export let createItem = property => h.post(url, property);

export let deleteItem = id => h.del(url + "/" + id);