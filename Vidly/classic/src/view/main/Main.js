/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('ClientApp.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'ClientApp.view.main.MainController',
        'ClientApp.view.main.MainModel',
        'ClientApp.view.main.List',
        'ClientApp.view.Movie.MovieGrid',
        'ClientApp.view.formmovie.addMovie'
    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: 'Vidly'
            },
            flex: 0
        },
        iconCls: 'fa-th-play2'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [{
        title: 'Home',
        iconCls: 'fa-home',
        // The following grid shares a store with the classic version's grid as well!
        /*items: [{
            xtype: 'mainlist'
        }]*/
    }, {
        title: 'Movies',
        iconCls: 'fa-play',
        items: {
            xtype: 'movie-grid'
        }
    }, {
        title: 'Add Movie',
        iconCls: 'fa-add',
        items: {
            xtype: 'form-movie'
        }
    }],

    renderTo: Ext.getBody()
});
