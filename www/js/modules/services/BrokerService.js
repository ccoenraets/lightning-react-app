import * as h from './h';

let url = "/brokers";

export let findAll = sort => h.get(url, {sort});

export let findByProperty = propertyId => h.get(url, {propertyId});