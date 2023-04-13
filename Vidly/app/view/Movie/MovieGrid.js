Ext.define('ClientApp.view.Movie.MovieGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'movie-grid',

    requires: [
        'ClientApp.store.Movie'
    ],
    title: 'List of Movies',
    store: {
        type: 'movie'
    },


    items: [{
        text: 'Movie Title',
        flex: 1,
        dataIndex: 'MovieTitle'
    }, {
        text: 'Description',
        flex: 1,
        dataIndex: 'Description'
    }, {
        text: 'Genre',
        flex: 1,
        dataIndex: 'Genre',
    }]
})