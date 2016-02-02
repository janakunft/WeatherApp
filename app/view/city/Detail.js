Ext.define('Weather.view.city.Detail', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.citydetail',

    viewModel: {
        type: 'citydetail'  // references alias "viewmodel.citydetail"
    },

    requires: [
        'Weather.view.city.DetailController'
    ],

    bind: {
        title: 'City - {theCity.name}'
    },

    layout: 'border',

    items: [{
        region: 'west',
        width: 200,
        layout: {
            type: 'table',
            columns: 2,
            tableAttrs: {
                border: 0
            }
        },

        defaults: {
            bodyStyle: 'padding:5px'
        },

        items: [{
            bind: {
                html: '<h3>{weather.name}, {weather.sys.country}</h3>'
            },
            colspan: 2
        },{
            xtype: 'image',
            bind: {
                src: 'http://openweathermap.org/img/w/{weather.weather.0.icon}.png'
            }
        },{
            bind: {
                html: '<h2>{weather.main.temp} °C</h2>'
            }
        },{
            bind: {
                html: '{weather.weather.0.main}'
            },
            colspan: 2
        },{
            bind: {
                html: 'get at {timestamp}'
            },
            colspan: 2
        },{
            html: 'Humidity'
        },{
            bind: {
                html: '{weather.main.humidity} %'
            }
        },{
            html: 'Sunrise'
        },{
            bind: {
                html: '{sunriseTime}'
            }
        },{
            html: 'Sunset'
        },{
            bind: {
                html: '{sunsetTime}'
            }
        }]
    },{
        region: 'center',
        xtype: 'tabpanel',
        items: [{
            title: 'Main'
        },{
            title: 'Daily'
        },{
            title: 'Hourly'
        },{
            title: 'Chart'
        }]
    }]
});
