Ext.define('Financeiro.view.supplier.Main', {
    extend: 'Ext.Container', // container do grid
    alias: 'widget.supplier',

    controller: 'suppliercontroller',

    bodyPadding: 0,

    viewModel: {
        type: 'supplierview', // model do grid - mainviewmodel
    },

    layout: {
        type: 'vbox', // layout deixe os items no sentido vertical
        // align: "stretch",
    },

    items: [
        {
            xtype: 'suppliergrid',
            flex: 1,
            margin: 10,
            shadow: true,
            reference: 'supplierGrid',
            bind: {
                store: '{suppliers}',
            },
        },
    ],
});
