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
        columns: 2,
        tableAttrs: {
            border: 0
        }
    },

    defaults: {
        // applied to each contained panel
        bodyStyle: 'padding:5px'
    },

    items: [{
        bind: {
            html: '<h3>{weather.name}, {weather.sys.country}</h3>'
        },
        colspan: 2
    },/*{
        bind: {
            html: '<h2><img src="http://openweathermap.org/img/w/{weather.weather.0.icon}.png"> {weather.main.temp} °C</h2>'
        },
        colspan: 2
    },*/{
        xtype: 'image',
        bind: {
            src: 'http://openweathermap.org/img/w/{weather.weather.0.icon}.png'
        }
    },{
        bind: {
            html: '<h2>{weather.main.temp} °C</h2>'
        }
    },{
        html: 'Current Temperature'
    },{
        bind: {
            html: '{weather.main.temp}'
        }
    },{
        html: 'Humidity'
    },{
        bind: {
            html: '{weather.main.humidity}'
        }
    },{
        html: 'Sunrise'
    },{
        bind: {
            html: '{weather.sys.sunrise}'
        }
    }]
});
