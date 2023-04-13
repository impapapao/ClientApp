Ext.define('ClientApp.store.Movie', {
    extend: 'Ext.data.Store',
    alias: 'store.movie',

    model: 'ClientApp.model.Movie',
    fields: [
        'MovieTitle', 'Description', 'Genre'
    ],
})