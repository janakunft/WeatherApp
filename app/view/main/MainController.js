/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Weather.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'Ext.window.MessageBox'
    ],

    alias: 'controller.main',

    createTab: function (prefix, rec, cfg) {
        var tabs = this.lookupReference('main'),
            id = prefix + '_' + rec.getId(),
            tab = tabs.items.getByKey(id);

        if (!tab) {
            cfg.itemId = id;
            cfg.closable = true;
            tab = tabs.add(cfg);
            if (prefix == 'city') {
                this.buildCityContent(rec,tab);
            }
            //tab.fireEvent(prefix + 'add');
        }

        tabs.setActiveTab(tab);
    },

    onClickButton: function () {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },

    onCityDblClick: function(view, rec) {
        this.viewCity(rec);
    },

    viewCity: function(rec) {
        this.createTab('city', rec, {
            xtype: 'citydetail',
            session: true,
            viewModel: {
                data: {
                    theCity: rec
                }
            }
        });
    },

    buildCityContent: function(rec,tab) {
        Ext.data.JsonP.request({
            url: 'http://api.openweathermap.org/data/2.5/weather',
            params: {
                APPID: 'c6abf9a119dee26f96fa8ebf3f01a3b4',
                units: 'metric',
                q: rec.data.name + ',' + rec.data.country
            },
            scope: this,
            success: function(response){
                console.log('weather', response);
                tab.getViewModel().setData({weather: response});
            },
            failure: function(response) {
                console.log(response);
            }
        });

        Ext.data.JsonP.request({
            url: 'http://api.openweathermap.org/data/2.5/forecast',
            params: {
                APPID: 'c6abf9a119dee26f96fa8ebf3f01a3b4',
                units: 'metric',
                q: rec.data.name + ',' + rec.data.country
            },
            scope: this,
            success: function(response){
                console.log('forecast', response);
                tab.getViewModel().setData({forecast: response});
            },
            failure: function(response) {
                console.log(response);
            }
        });
    }
});
