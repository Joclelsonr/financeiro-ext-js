Ext.define('Financeiro.view.billtopay.MainViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.billtopaymodel',

    stores: {
        bills: {
            model: 'Financeiro.model.BillToPay', // busca os dados no model e leva a Main
            autoLoad: true,
        },
    },
});
