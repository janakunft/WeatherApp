Ext.define('Weather.view.city.Detail', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.citydetail',

    requires: [
        'Weather.view.city.DetailController'
    ],

    bind: {
        title: 'City - {theCity.name}'
        //html: '{weather.base}'
    },

    layout: {
        type: 'table',
        columns: 2
    },

    items: [{
        html: 'Current Temperature'
    },{
        bind: {
            html: '{weather.main.temp}'
        }
    },{
        html: 'Humidity'
    },{
        html: '66%'
    }]
});
