Ext.define('Weather.view.city.DetailModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.citydetail',

    formulas: {
        sunriseTime: function (get) {
            var ms = get('weather.sys.sunrise') * 1000,
                dt = new Date(ms);
            console.log(dt.getTimezoneOffset());
            return dt.toLocaleTimeString();
        },

        sunsetTime: function (get) {
            var ms = get('weather.sys.sunset') * 1000,
                dt = new Date(ms);
            console.log(dt.getTimezoneOffset());
            return dt.toLocaleTimeString();
        },

        timestamp: function (get) {
            var ms = get('weather.dt') * 1000,
                dt = new Date(ms);
            console.log(dt.getTimezoneOffset());
            return dt.toLocaleTimeString();
        }
    }
});
