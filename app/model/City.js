Ext.define('Weather.model.City', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'name',  type: 'string'},
        {name: 'country',   type: 'string'}
    ],
    idProperty: 'id'
});
