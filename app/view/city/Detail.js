Ext.define('Weather.view.city.Detail', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.citydetail',

    requires: [
        'Weather.view.city.DetailController'
    ],

    bind: {
        title: 'City - {theCity.name}',
        html: '{weather.base}'
    },

    listeners: {
        //render: 'onCityAdd'
    }
});
