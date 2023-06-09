Ext.define('ClientApp.store.Movie', {
    extend: 'Ext.data.Store',
    alias: 'store.movie',
    model: 'ClientApp.model.Movie',
    remoteSort: true,
    autoLoad: true,
    fields: [
        {name: 'MovieTitle'},
        {name: 'Description'},
        {name: 'Genre'}
    ],
    
    proxy: {
        type: 'ajax',
        reader: {
            type: 'json',
            rootProperty: 'items'
        },
        url: 'http://localhost:5000/api/Movies',
    }

})