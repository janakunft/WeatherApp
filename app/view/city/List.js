Ext.define('Weather.view.city.List', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.citylist',

    /*requires: [
        'Weather.view.city.ListController'
    ],*/

    store: 'City',
    columns: [
        {text: 'City', dataIndex: 'name'},
        {text: 'Country', dataIndex: 'country'}
    ]
});
