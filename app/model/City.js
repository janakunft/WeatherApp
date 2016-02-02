Ext.define('Weather.model.City', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id',  type: 'int'},
        {name: 'name',  type: 'string'},
        {name: 'country',   type: 'string'}
    ],
    idProperty: 'id'
});
