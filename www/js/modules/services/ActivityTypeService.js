import * as h from './h';

let url = "/activitytypes";

export let findAll = sort => h.get(url, {sort});