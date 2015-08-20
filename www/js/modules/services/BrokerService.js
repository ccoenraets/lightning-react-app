let url = "/brokers";

export let findAll = () => new Promise((resolve, reject) => {
    fetch(url)
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(error => reject(error));
});

export let findByProperty = (id) => new Promise((resolve, reject) => {
    fetch(url + "?propertyId="+id)
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(error => reject(error));
});