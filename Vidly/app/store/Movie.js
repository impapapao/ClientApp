Ext.define('ClientApp.store.Movie', {
    extend: 'Ext.data.Store',
    alias: 'store.movie',

    model: 'ClientApp.model.Movie',
    fields: [
        'MovieTitle', 'Description', 'Genre'
    ],
    remoteSort: true,
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: 'http://localhost1234',
        reader: {
            totalProperty: 'totalCount'
        }
    }

})