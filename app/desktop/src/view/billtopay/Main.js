Ext.define('Financeiro.view.billtopay.Main', {
    extend: 'Ext.Panel',
    alias: 'widget.billtopay',

    controller: 'billtopaymaincontroller',
    viewModel: {
        type: 'billtopaymodel',
    },

    layout: {
        type: 'vbox', // layout deixe os items no sentido vertical
        // align: "stretch",
    },

    items: [
        {
            xtype: 'billtopaygrid',
            reference: 'billtopaygrid',
            margin: 10,
            shadow: true,
            flex: 1,
            bind: {
                store: '{bills}',
            },
        },
    ],
});
