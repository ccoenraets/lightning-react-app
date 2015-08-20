let url = "/properties";

export let findAll = sort => new Promise((resolve, reject) => {
    fetch(url + (sort ? ("?sort=" + sort) : ""))
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(error => reject(error));
});

export let findByName = name => new Promise((resolve, reject) => {
    fetch(url + "?name="+name)
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(error => reject(error));
});

export let findById = id => new Promise((resolve, reject) => {
    fetch(url + "/"+id)
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(error => reject(error));
});

export let updateItem = property => new Promise((resolve, reject) => {
    fetch(url, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'put',
        body: JSON.stringify(property)
    })
    .then(response => response.json())
    .then(data => {
        resolve(data);
    })
    .catch(e => reject(e));
});

export let createItem = property => new Promise((resolve, reject) => {
    fetch(url, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify(property)
    })
    .then(response => response.json())
    .then(data => {
        resolve(data);
    })
    .catch(e => reject(e));
});

export let deleteItem = property => new Promise((resolve, reject) => {
    fetch(url, {
        method: 'del'
    })
    .then(response => response.json())
    .then(data => {
        resolve(data);
    })
    .catch(e => reject(e));
});
