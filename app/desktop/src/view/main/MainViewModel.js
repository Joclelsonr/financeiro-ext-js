Ext.define('Financeiro.view.main.MainViewModel', {
    extend: 'Ext.app.ViewModel', // painel que modela os dados vindo da api
    alias: 'viewmodel.mainviewmodel',

    requires: ['Ext.data.TreeStore'], // o que o componente requer para iniciar

    stores: {
        menu: {
            type: 'tree',
            proxy: {
                type: 'ajax',
                reader: 'json',
                url: '/resources/desktop/menu.json', // menu.json
            },
            autoLoad: true,
        },
    },
});
