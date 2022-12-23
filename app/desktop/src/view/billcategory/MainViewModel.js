Ext.define('Financeiro.view.billcategory.MainViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.categoryview',

    stores: {
        categories: {
            model: 'Financeiro.model.BillCategory', // busca os dados no model e leva a Main
            autoLoad: true,
        },
    },
});
