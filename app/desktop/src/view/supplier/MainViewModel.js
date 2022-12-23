Ext.define('Financeiro.view.supplier.MainViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.supplierview',

    stores: {
        suppliers: {
            model: 'Financeiro.model.Supplier', // busca os dados no model e leva a Main
            autoLoad: true,
        },
    },
});
