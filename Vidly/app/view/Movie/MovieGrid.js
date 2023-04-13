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
        width: 150,
        dataIndex: 'MovieTitle'
    }, {
        text: 'Description',
        width: 150,
        dataIndex: 'Description'
    }, {
        text: 'Genre',
        width: 150,
        dataIndex: 'Genre',
    }]
})