Ext.define('Weather.store.City', {
    extend: 'Ext.data.Store',
    model: 'Weather.model.City',
    data : [
     {id: 1, name: 'Prague',    country: 'Czech Republic'},
     {id: 2, name: 'London', country: 'UK'},
     {id: 3, name: 'New York', country: 'US'},
     {id: 4, name: 'Melbourne', country: 'Australia'}
    ]
});
