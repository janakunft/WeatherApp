Ext.define('Weather.view.city.Detail', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.citydetail',

    requires: [
        'Weather.view.city.DetailController'
    ],

    bind: {
        title: 'City - {theCity.name}',
        html: '{weather.main.temp}'
    },

    listeners: {
        //render: 'onCityAdd'
    }
});
