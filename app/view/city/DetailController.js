Ext.define('Weather.view.city.DetailController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.weatherdetail',

    init: function() {
        alert('init')
    },

    beforeInit: function() {
        alert('beforeInit')
    },

    initViewModel: function() {
        alert('initViewModel')
    }
});
