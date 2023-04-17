Ext.define('ClientApp.model.Movie', {
    extend: 'ClientApp.model.Base',

    store: 'ClientApp.store.Movie',
    fields: [
        {name:'MovieTitle', type: 'string'}, 
        {name:'Description', type: 'string'},
        {name: 'Genre', type: 'string'}
    ]
});