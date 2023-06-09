Ext.define('ClientApp.view.Movie.MovieGrid', {
    extend: 'Ext.grid.Panel',
    store: {type: 'movie'},
    xtype: 'movie-grid',

   /* requires: [
        'ClientApp.store.Movie'
    ],*/
    title: 'List of Movies',
    
    columns: [
        {text: 'Movie Title', dataIndex: 'MovieTitle', flex: 1}, 
        {text: 'Description', dataIndex: 'Description', flex: 1}, 
        {text: 'Genre', dataIndex: 'Genre', flex: 1}
    ],

    renderTo: Ext.getBody()
})